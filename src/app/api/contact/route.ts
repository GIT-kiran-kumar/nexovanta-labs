import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, phone, budget, message } = await req.json();

  await resend.emails.send({
    from: "Nexovanta Labs <onboarding@resend.dev>",
    to: "nexovantalabs@gmail.com",
    subject: `New Enquiry from ${name}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#050d1a;color:#f0f6ff;padding:32px;border-radius:12px;">
        <h2 style="color:#00d4ff;margin-bottom:24px;">New Project Enquiry 🚀</h2>
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="padding:10px 0;color:#7a94b0;width:140px;">Name</td><td style="padding:10px 0;font-weight:600;">${name}</td></tr>
          <tr><td style="padding:10px 0;color:#7a94b0;">Email</td><td style="padding:10px 0;">${email}</td></tr>
          <tr><td style="padding:10px 0;color:#7a94b0;">Phone</td><td style="padding:10px 0;">${phone || "Not provided"}</td></tr>
          <tr><td style="padding:10px 0;color:#7a94b0;">Budget</td><td style="padding:10px 0;">${budget || "Not selected"}</td></tr>
          <tr><td style="padding:10px 0;color:#7a94b0;vertical-align:top;">Message</td><td style="padding:10px 0;">${message}</td></tr>
        </table>
        <div style="margin-top:24px;padding-top:24px;border-top:1px solid rgba(26,109,255,0.2);color:#7a94b0;font-size:12px;">
          Sent from Nexovanta Labs website contact form
        </div>
      </div>
    `,
  });

  return NextResponse.json({ success: true });
}