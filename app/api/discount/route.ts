import { NextResponse } from "next/server";
import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";

const ses = new SESv2Client({ region: process.env.AWS_REGION });

export async function POST(req: Request) {
  const body = await req.json();
  const { name, jobTitle, company, phone, email, city, website, state } = body;

  const text = `
Name: ${name}
Job Title: ${jobTitle}
Company: ${company}
Website: ${website}
Phone: ${phone}
Email: ${email}
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
            Subject: { Data: `Nonprofit Discount Code Request from ${name}` },
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
