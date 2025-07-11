import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(req: Request) {
  const body = await req.json();

  const { name, jobTitle, company, phone, industry, email, message, city, state } = body;

  try {
    await sgMail.send({
      to: "support@walkingwise.com",
      from: "support@walkingwise.com",
      subject: `Quote Request from ${name}`,
      text: `
        Name: ${name}
        Job Title: ${jobTitle}
        Company: ${company}
        Phone: ${phone}
        Industry: ${industry}
        Email: ${email}
        Message: ${message}
        City: ${city}
        State: ${state}
      `,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Error sending email" },
      { status: 500 }
    );
  }
}
