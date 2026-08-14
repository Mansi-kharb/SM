# VG Design - Interior Design Website

A modern, responsive website for VG Design interior design company built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern UI with clean design
- 📱 Fully responsive design
- 🖼️ Project showcase with 4-column grid
- 📧 Contact form with SMTP email integration
- ⚡ Fast performance with Next.js
- 🎯 SEO friendly

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Email (SMTP)

Create `.env.local` file:

```
SMTP_EMAIL=your-email@gmail.com
SMTP_PASSWORD=your-app-password
RECIPIENT_EMAIL=contact@yourdomain.com
```

**Gmail Setup:**
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable 2-step verification
3. Generate [App Password](https://myaccount.google.com/apppasswords) for Mail
4. Use the password in `.env.local`

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/
│   ├── api/contact/route.ts       # Email API
│   ├── projects/[id]/page.tsx     # Project detail
│   └── page.tsx                   # Home page
├── components/
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   ├── ServicesSection.tsx
│   ├── ProjectsGridSection.tsx
│   ├── AboutSection.tsx
│   ├── ContactSection.tsx
│   └── ContactForm.tsx
├── public/
│   ├── images/                    # Add your images here
│   └── data/projects.json         # Projects data
└── .env.local                     # Environment variables
```

## Images Setup

Add your images to `public/images/`:

- `hero-archway.jpg` - Hero section
- `about-1.jpg` to `about-4.jpg` - About section
- `project-1.jpg` to `project-12.jpg` - Project thumbnails

## Update Projects

Edit `public/data/projects.json`:

```json
{
  "id": 1,
  "title": "Project Name",
  "location": "City",
  "category": "Residential",
  "budget": "₹X-Y Lakhs",
  "duration": "X months",
  "image": "/images/project-1.jpg",
  "details": "Description"
}
```

## Deployment

### Vercel (Recommended)

```bash
npm run build
npm run start
```

Or use [Vercel Platform](https://vercel.com)

1. Push to GitHub
2. Import on Vercel
3. Add environment variables
4. Deploy ✅

## Customization

- **Colors**: Edit `tailwind.config.ts`
- **Content**: Update component files
- **Fonts**: Modify `app/layout.tsx`
- **Email**: Change email templates in `app/api/contact/route.ts`

## Troubleshooting

**Email not working?**
- Verify `.env.local` values
- Check Gmail App Password
- Check spam folder
- Ensure 2-step verification is on

**Images not showing?**
- Ensure images are in `public/images/`
- Check file names match in JSON
- Clear browser cache

## Learn More

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Nodemailer](https://nodemailer.com)
