import { NextResponse } from "next/server";
import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";

const ses = new SESv2Client({ region: process.env.AWS_REGION });

export async function POST(req: Request) {
  const body = await req.json();
  const { name, jobTitle, company, phone, industry, email, message, city, state } = body;

  const text = `
  Name: ${name}
  Job Title: ${jobTitle}
  Company: ${company}
  Phone: ${phone}
  Industry: ${industry}
  Email: ${email}
  Message: ${message}
  City: ${city}
  State: ${state}
  `.trim();

  try {
    await ses.send(
      new SendEmailCommand({
        FromEmailAddress: process.env.SES_FROM_EMAIL!,
        Destination: {
          ToAddresses: [process.env.SES_TO_EMAIL!],
          CcAddresses: ["karla.highman@walkingwise.com"],
        },
        ReplyToAddresses: email ? [email] : undefined,
        Content: {
          Simple: {
            Subject: { Data: `Quote Request from ${name}` },
            Body: { Text: { Data: text } },
          },
        },
      })
    );

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Error sending email" }, { status: 500 });
  }
}
