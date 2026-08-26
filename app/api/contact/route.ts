import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

/* Many networks block outbound SMTP entirely. Without these the socket hangs
   for two minutes and the visitor just watches a dead button, so fail fast and
   let the form surface its error instead. */
const TIMEOUTS = {
  connectionTimeout: 10000,
  greetingTimeout: 10000,
  socketTimeout: 15000,
};

/* Keeps Gmail's service preset as the default, but any custom mailbox host
   (Zoho, Hostinger, GoDaddy...) works by setting SMTP_HOST / SMTP_PORT. */
const transporter = nodemailer.createTransport(
  process.env.SMTP_HOST
    ? {
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT ?? 465),
        secure: Number(process.env.SMTP_PORT ?? 465) === 465,
        auth: { user: process.env.SMTP_EMAIL, pass: process.env.SMTP_PASSWORD },
        ...TIMEOUTS,
      }
    : {
        service: 'gmail',
        auth: { user: process.env.SMTP_EMAIL, pass: process.env.SMTP_PASSWORD },
        ...TIMEOUTS,
      }
);

const BRAND = 'Studio Materium';
const GREEN = '#0f5b43';
const INK = '#1c2b25';

/* Every value below lands inside an HTML document, so it has to be escaped —
   otherwise a message containing markup rewrites the email body. */
function esc(value: unknown) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

const nl2br = (value: string) => esc(value).replace(/\r?\n/g, '<br />');

/* The real logo is a PNG under /public, which an inbox cannot reach, so the
   lockup is rebuilt in table markup that renders with no image at all. */
function lockup() {
  return `
    <table role="presentation" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td style="border:2px solid #ffffff;width:52px;height:52px;text-align:center;vertical-align:middle;font-family:Georgia,'Times New Roman',serif;font-size:21px;letter-spacing:1px;color:#ffffff;">SM</td>
        <td style="padding-left:14px;font-family:Georgia,'Times New Roman',serif;color:#ffffff;">
          <div style="font-size:17px;letter-spacing:3.5px;line-height:1.25;">STUDIO</div>
          <div style="border-top:1px solid rgba(255,255,255,0.55);margin:3px 0;"></div>
          <div style="font-size:17px;letter-spacing:3.5px;line-height:1.25;">MATERIUM</div>
        </td>
      </tr>
    </table>`;
}

function thankYouHtml(name: string, message: string) {
  const mailbox = esc(process.env.SMTP_EMAIL);
  return `<!doctype html>
<html><body style="margin:0;padding:0;background:#f5f3ef;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f5f3ef;padding:32px 12px;">
    <tr><td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:4px;overflow:hidden;">

        <tr><td style="background:${GREEN};padding:32px 40px;">${lockup()}</td></tr>

        <tr><td style="padding:40px 40px 8px 40px;">
          <h1 style="margin:0 0 20px 0;font-family:Georgia,'Times New Roman',serif;font-size:28px;font-weight:normal;color:${INK};line-height:1.3;">
            Thank you, ${esc(name)}.
          </h1>
          <p style="margin:0 0 16px 0;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.75;color:#41504a;">
            Your enquiry has reached ${BRAND}, and we are glad it did. Every space we have
            designed began exactly like this &mdash; with someone taking a moment to tell us
            what they had in mind.
          </p>
          <p style="margin:0 0 28px 0;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.75;color:#41504a;">
            One of our design leads will personally read what you have shared and respond
            within <strong style="color:${INK};">1&ndash;2 business days</strong>. No automated
            replies after this one &mdash; the next message you receive will be from a person
            on our team.
          </p>
        </td></tr>

        <tr><td style="padding:0 40px;">
          <div style="border-left:3px solid ${GREEN};background:#f7f9f8;padding:18px 20px;">
            <div style="font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:1.6px;text-transform:uppercase;color:#7c8b85;margin-bottom:10px;">What you sent us</div>
            <div style="font-family:Georgia,'Times New Roman',serif;font-size:15px;line-height:1.7;color:${INK};">${nl2br(message)}</div>
          </div>
        </td></tr>

        <tr><td align="center" style="padding:28px 40px 4px 40px;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#b9c4c0;letter-spacing:6px;">
          &#9650;&#9650;&#9650;
        </td></tr>

        <tr><td style="padding:12px 40px 40px 40px;">
          <p style="margin:0 0 4px 0;font-family:Georgia,'Times New Roman',serif;font-size:16px;color:${INK};">Warm regards,</p>
          <p style="margin:0 0 2px 0;font-family:Georgia,'Times New Roman',serif;font-size:16px;color:${GREEN};letter-spacing:1px;">The ${BRAND} Team</p>
          <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#7c8b85;">
            <a href="mailto:${mailbox}" style="color:${GREEN};text-decoration:none;">${mailbox}</a>
          </p>
        </td></tr>

        <tr><td style="background:#f7f9f8;padding:18px 40px;border-top:1px solid #e6ebe9;">
          <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:11px;line-height:1.6;color:#9aa8a3;">
            This message confirms an enquiry submitted through studiomaterium.in.
            If this was not you, you can safely ignore this email.
          </p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body></html>`;
}

/* Plain-text alternative: without it, spam filters score the mail lower. */
function thankYouText(name: string, message: string) {
  return [
    `Thank you, ${name}.`,
    '',
    `Your enquiry has reached ${BRAND}, and we are glad it did. Every space we`,
    'have designed began exactly like this - with someone taking a moment to',
    'tell us what they had in mind.',
    '',
    'One of our design leads will personally read what you have shared and',
    'respond within 1-2 business days. No automated replies after this one -',
    'the next message you receive will be from a person on our team.',
    '',
    'WHAT YOU SENT US',
    message,
    '',
    'Warm regards,',
    `The ${BRAND} Team`,
    process.env.SMTP_EMAIL ?? '',
  ].join('\n');
}

export async function POST(req: NextRequest) {
  let name = '';
  let email = '';
  let phone = '';
  let message = '';

  try {
    ({ name = '', email = '', phone = '', message = '' } = await req.json());

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    /* The lead itself. This one must not be lost, so it is sent first. */
    await transporter.sendMail({
      from: `"${BRAND}" <${process.env.SMTP_EMAIL}>`,
      to: process.env.RECIPIENT_EMAIL || process.env.SMTP_EMAIL,
      replyTo: `"${name}" <${email}>`,
      subject: `New enquiry from ${name}`,
      html: `
        <h2 style="font-family:Georgia,serif;color:${GREEN};">New website enquiry</h2>
        <p><strong>Name:</strong> ${esc(name)}</p>
        <p><strong>Email:</strong> ${esc(email)}</p>
        <p><strong>Phone:</strong> ${esc(phone) || 'Not provided'}</p>
        <hr />
        <p>${nl2br(message)}</p>
      `,
      text: `New website enquiry\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\n\n${message}`,
    });
  } catch (error) {
    console.error('Enquiry email failed:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }

  /* The enquiry is already delivered — a bounced thank-you must not turn a
     captured lead into a failed submission for the visitor. */
  try {
    await transporter.sendMail({
      from: `"${BRAND}" <${process.env.SMTP_EMAIL}>`,
      to: email,
      subject: `Thank you for reaching out to ${BRAND}`,
      html: thankYouHtml(name, message),
      text: thankYouText(name, message),
    });
  } catch (error) {
    console.error('Thank-you email failed (the enquiry was still delivered):', error);
  }

  return NextResponse.json(
    { success: true, message: 'Email sent successfully' },
    { status: 200 }
  );
}
