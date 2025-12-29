import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { name, email, message } = await request.json();

        // Basic validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        // Email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email address' },
                { status: 400 }
            );
        }

        // Send email via Resend
        const data = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>', // SAFE DEFAULT
            to: ['teshie00001@gmail.com'], // MUST BE ARRAY
            replyTo: email,
            subject: `New Contact Message from ${name}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color:#2ecc71;">New Contact Form Submission</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>

          <div style="margin-top:20px; padding:15px; background:#f5f5f5; border-radius:8px;">
            <p style="white-space:pre-wrap;">${message}</p>
          </div>

          <p style="margin-top:30px; font-size:12px; color:#888;">
            Sent from your portfolio contact form
          </p>
        </div>
      `,
        });

        return NextResponse.json({ success: true, data }, { status: 200 });
    } catch (error) {
        console.error('Email send error:', error);
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        );
    }
}
