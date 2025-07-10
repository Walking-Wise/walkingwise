import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(req: Request) {
  const body = await req.json();

  const { firstName, lastName, email, message } = body;

  try {
    await sgMail.send({
      to: "zdebrine@gmail.com",
      from: "hello@walkingwise.com",
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      text: `
        Name: ${firstName} ${lastName}
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
