# EdgeMind Web - Official Website

A modern, responsive website for EdgeMind, the local mobile RAG assistant that can replace Google Assistant.

## 🚀 Features

- **Modern Design**: Beautiful gradient backgrounds and smooth animations
- **Responsive**: Works perfectly on desktop, tablet, and mobile
- **Fast**: Built with Next.js 14 and optimized for performance
- **SEO Optimized**: Proper meta tags and structured content
- **Accessible**: Follows web accessibility guidelines

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **TypeScript**: Full type safety
- **Font**: Inter (Google Fonts)

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd EdgeMind-web
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
EdgeMind-web/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Homepage component
├── public/                  # Static assets
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # This file
```

## 🎨 Customization

### Colors
The website uses a custom color palette defined in `tailwind.config.js`:
- Primary colors: Blue to purple gradient
- Dark theme: Slate grays
- Accent: Blue-400 for highlights

### Animations
All animations are powered by Framer Motion with smooth transitions and hover effects.

### Content
Update the content in `app/page.tsx` to match your specific needs:
- Hero section text
- Feature descriptions
- Contact information
- Download links

## 📱 About EdgeMind

EdgeMind is a powerful local mobile RAG (Retrieval-Augmented Generation) assistant that:

- **Works Offline**: All processing happens on your device
- **Respects Privacy**: No data sent to cloud servers
- **Controls Device**: Open apps, control settings, manage features
- **Voice Commands**: Natural language processing for device control
- **Replaces Google Assistant**: More private, more powerful

## 📧 Contact

For bug reports, feature requests, or general inquiries:
- Email: EdgeMind01@proton.me

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The website can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

Built with ❤️ for EdgeMind 