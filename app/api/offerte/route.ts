// app/api/offerte/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    const { 
        naam, bedrijfsnaam, email, telefoonnummer, projectAdres,
        bouwproject, startdatum, einddatum, apparatuur, verzoeken, company 
    } = await request.json();

    // Basic server-side validation
    if (!naam || !email || !bouwproject || !startdatum || !einddatum || !apparatuur) {
        return NextResponse.json({ message: 'Missing required fields.' }, { status: 400 });
    }
    
    // Honeypot check
    if (company) {
        return NextResponse.json({ message: 'Success' }, { status: 200 }); // Pretend it's successful
    }

    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO } = process.env;

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !CONTACT_TO) {
        console.error("SMTP environment variables are not set.");
        return NextResponse.json({ message: 'Server configuration error.' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: parseInt(SMTP_PORT, 10),
        secure: parseInt(SMTP_PORT, 10) === 465, // true for 465, false for other ports
        auth: {
            user: SMTP_USER,
            pass: SMTP_PASS,
        },
    });

    const mailBody = `
        <h1>Nieuwe Offerteaanvraag van Ella Rent Website</h1>
        <p><strong>Naam:</strong> ${naam}</p>
        <p><strong>Bedrijfsnaam:</strong> ${bedrijfsnaam || 'N/A'}</p>
        <p><strong>E-mailadres:</strong> ${email}</p>
        <p><strong>Telefoonnummer:</strong> ${telefoonnummer || 'N/A'}</p>
        <hr>
        <p><strong>Adres van het project:</strong> ${projectAdres || 'N/A'}</p>
        <p><strong>Type bouwproject:</strong> ${bouwproject}</p>
        <p><strong>Startdatum:</strong> ${startdatum}</p>
        <p><strong>Einddatum:</strong> ${einddatum}</p>
        <hr>
        <h3>Apparatuur en kwantiteit:</h3>
        <pre>${apparatuur}</pre>
        <h3>Speciale verzoeken:</h3>
        <pre>${verzoeken || 'N/A'}</pre>
        <hr>
        <p><small>Verzonden op: ${new Date().toLocaleString('nl-NL')}</small></p>
    `;

    try {
        await transporter.sendMail({
            from: `"Offerte Ella Rent" <${SMTP_USER}>`,
            to: CONTACT_TO,
            subject: `[Offerte] ${bouwproject} - ${naam}`,
            html: mailBody,
        });
        return NextResponse.json({ message: 'Success' }, { status: 200 });
    } catch (error) {
        console.error('Failed to send email:', error);
        return NextResponse.json({ message: 'Failed to send email.' }, { status: 500 });
    }
}
