# Launch MVP - Simple Hero Page

A minimal Next.js 15 hero page MVP with modern design, dark mode, and smooth animations. Perfect for quickly launching a landing page or starting your next project.

![Next.js](https://img.shields.io/badge/Next.js-15.1.3-black)
![React](https://img.shields.io/badge/React-19.0.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4.1-38B2AC)

## ✨ Features

- 🚀 **Next.js 15** with App Router
- ⚛️ **React 19** for modern UI
- 🎨 **Tailwind CSS** for styling
- 🌓 **Dark mode** support (automatic based on system preference)
- ✨ **Framer Motion** animations
- 🎯 **TypeScript** for type safety
- 📱 **Fully responsive** design
- 🔒 **Security headers** configured
- ⚡ **Zero configuration** needed to start

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/filiksyos/launch-mvp-nextjs-hero.git
cd launch-mvp-nextjs-hero
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ Built With

- **[Next.js 15.1.3](https://nextjs.org/)** - React framework
- **[React 19.0.0](https://react.dev/)** - UI library
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS 3.4.1](https://tailwindcss.com/)** - Styling
- **[Framer Motion 12.4.3](https://www.framer.com/motion/)** - Animations
- **[Lucide React 0.475.0](https://lucide.dev/)** - Icons

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Hero page
│   └── globals.css         # Global styles
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── next.config.ts          # Next.js configuration
└── package.json            # Dependencies
```

## 🎨 Customization

### Colors

Edit the color palette in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: '#A78BFA',
    light: '#C4B5FD',
    dark: '#8B5CF6',
  },
  // ... more colors
}
```

### Content

Edit the hero content in `app/page.tsx`.

### Fonts

The project uses the Geist font from Google Fonts. Change it in `app/layout.tsx`.

## 🚀 Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/filiksyos/launch-mvp-nextjs-hero)

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 💖 Credits

Based on [ShenSeanChen/launch-mvp-stripe-nextjs-supabase](https://github.com/ShenSeanChen/launch-mvp-stripe-nextjs-supabase)

---

Made with ❤️ using Next.js
