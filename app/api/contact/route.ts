import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();
  // Plug in your email provider here (Resend, Formspree, Nodemailer, etc.)
  console.log({ name, email, message });
  return NextResponse.json({ ok: true });
}
