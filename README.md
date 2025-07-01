# Professional Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and cutting-edge web technologies to showcase professional experience, skills, and projects.

## 🚀 Live Demo

Visit the live website: [https://aakashgiri.dev](https://aakashgiri.dev)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Customization](#customization)
- [Performance](#performance)
- [Contributing](#contributing)

## ✨ Features

### 🎨 Design & User Experience
- **Modern Glassmorphism UI** - Beautiful backdrop-blur effects and translucent elements
- **Responsive Design** - Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations** - Framer Motion powered scroll-triggered and hover animations
- **Professional Layout** - Clean, organized sections with intuitive navigation
- **Accessibility Compliant** - WCAG guidelines followed for inclusive design

### 🔧 Technical Features
- **Server-Side Rendering** - Next.js App Router for optimal performance
- **TypeScript Integration** - Full type safety throughout the application
- **GitHub API Integration** - Dynamic project fetching from real repositories
- **SEO Optimized** - Proper meta tags, structured data, and performance optimization
- **Performance Optimized** - Image optimization, code splitting, and lazy loading

### 📱 Sections Included
1. **Hero Section** - Professional introduction with contact information
2. **About Section** - Professional summary, objectives, and key highlights
3. **Skills Section** - Technical skills with proficiency levels and categories
4. **Projects Showcase** - Featured projects with filtering and detailed descriptions
5. **GitHub Integration** - Real-time project data from GitHub repositories
6. **Experience Timeline** - Professional experience and education history
7. **Contact Form** - Interactive contact form with validation
8. **Downloadable Resume** - Direct link to professional resume

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **React 18** - Component-based UI library
- **TypeScript** - Static type checking
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React

### APIs & Integration
- **GitHub REST API** - Dynamic project data fetching
- **Axios** - HTTP client for API requests
- **React Intersection Observer** - Scroll-triggered animations

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AakashGiri1/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup** (Optional)
   Create a `.env.local` file for enhanced features:
   ```env
   # GitHub API (Optional - for higher rate limits)
   GITHUB_TOKEN=your_github_personal_access_token
   GITHUB_USERNAME=your_github_username
   ```

4. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open in browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Main page component
├── components/            # React components
│   ├── sections/          # Page sections
│   │   ├── Hero.tsx       # Landing section with intro
│   │   ├── About.tsx      # Professional summary
│   │   ├── Skills.tsx     # Technical skills showcase
│   │   ├── Projects.tsx   # Featured projects
│   │   ├── ActualProjects.tsx # GitHub integration
│   │   ├── Experience.tsx # Work history timeline
│   │   ├── Contact.tsx    # Contact form
│   │   └── Footer.tsx     # Site footer
│   ├── ui/               # Reusable UI components
│   │   ├── AnimatedBackground.tsx # Animated background
│   │   ├── Button.tsx     # Custom button component
│   │   └── Card.tsx       # Card component
│   └── Navigation.tsx    # Main navigation
├── data/                 # Static data and configuration
│   └── profile.ts        # Personal information and content
├── lib/                  # Utility functions
│   ├── github.ts         # GitHub API integration
│   └── utils.ts          # Helper functions
└── types/               # TypeScript type definitions
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy with Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign up/login with your GitHub account
   - Click "New Project"
   - Import your repository
   - Configure environment variables (if needed)
   - Deploy!

3. **Custom Domain** (Optional)
   - In Vercel dashboard, go to your project
   - Navigate to "Settings" → "Domains"
   - Add your custom domain
   - Follow DNS configuration instructions

### Alternative Deployment Options

#### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify
3. Configure environment variables in Netlify dashboard

#### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json
3. Run: `npm run deploy`

## 🎨 Customization

### Personal Information
Update your details in `src/data/profile.ts`:

```typescript
export const profileData = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  phone: "+1234567890",
  location: "Your Location",
  bio: "Your professional bio...",
  // ... other details
}
```

### Profile Photo
Replace the image file in the `public` folder and update the path in `profileData.profileImage`.

### Resume Link
Update `profileData.resumeUrl` with your resume link (Google Drive, Dropbox, or local file).

### Styling Customization
- **Colors**: Modify `tailwind.config.js` for custom color schemes
- **Fonts**: Update `src/app/layout.tsx` for different font families
- **Animations**: Customize Framer Motion animations in component files

### Content Sections
- **Skills**: Update `profileData.skills` object with your technologies
- **Projects**: Modify the projects array in `src/components/sections/Projects.tsx`
- **Experience**: Update experience data in `src/components/sections/Experience.tsx`

## ⚡ Performance Optimizations

### Built-in Optimizations
- **Image Optimization** - Next.js Image component with lazy loading
- **Code Splitting** - Automatic route-based code splitting
- **Bundle Analysis** - Use `npm run analyze` to check bundle size
- **Static Generation** - Pre-rendered pages for faster loading

### Performance Metrics
- **Lighthouse Score**: 95+ across all categories
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Bundle Size**: Optimized with tree shaking and compression

### Monitoring
- Use Vercel Analytics for performance monitoring
- Google PageSpeed Insights for performance auditing
- Web Vitals extension for real-time metrics

## 🔧 Development Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📊 SEO Features

- **Meta Tags** - Comprehensive meta tags for social sharing
- **Open Graph** - Facebook and LinkedIn sharing optimization
- **Twitter Cards** - Twitter sharing optimization
- **Structured Data** - JSON-LD for search engines
- **Sitemap** - Automatic sitemap generation
- **Robots.txt** - Search engine crawling instructions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support & Contact

If you have questions or need help with setup:

- **Email**: aakash903824@gmail.com
- **LinkedIn**: [Aakash Giri](https://linkedin.com/in/aakash-giri-11487a26a)
- **GitHub**: [AakashGiri1](https://github.com/AakashGiri1)

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing React framework
- **Vercel** - For seamless deployment platform
- **Tailwind CSS** - For the utility-first CSS framework
- **Framer Motion** - For beautiful animations
- **Lucide React** - For the icon library

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**

*Last updated: December 2024*#   P o r t f o l i o . A a k a s h  
 