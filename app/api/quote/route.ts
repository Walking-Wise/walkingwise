import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(req: Request) {
  const body = await req.json();

  const { name, jobTitle, company, phone, companySize, email, message } = body;

  try {
    await sgMail.send({
      to: "hello@walkingwise.com",
      from: "hello@walkingwise.com",
      subject: `Quote Request from ${name}`,
      text: `
        Name: ${name}
        Job Title: ${jobTitle}
        Company: ${company}
        Phone: ${phone}
        Company Size: ${companySize}
        Email: ${email}
        Message: ${message}
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
