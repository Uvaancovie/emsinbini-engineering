# ENSIMBINI ENGINEERING CC Website

A professional business website for ENSIMBINI ENGINEERING CC, a Durban-based engineering company. This website showcases the company's services, projects, and client testimonials.

![ENSIMBINI ENGINEERING CC Website](https://placeholder.svg?height=300&width=600&text=ENSIMBINI+ENGINEERING+WEBSITE)

## Features

- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop devices
- **Modern UI**: Clean, professional design using Tailwind CSS and shadcn/ui components
- **Multiple Pages**: 
  - Home page with company overview
  - About page with company history and values
  - Services page detailing engineering offerings
  - Projects portfolio showcasing completed work
  - Clients page with testimonials
  - Contact page with form and business information
- **Interactive Elements**: Contact form, mobile-friendly navigation, and more
- **SEO Friendly**: Built with Next.js for optimal performance and SEO

## Technologies Used

- **Next.js 14+**: React framework with App Router
- **React 18+**: JavaScript library for building user interfaces
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: High-quality UI components built with Radix UI and Tailwind
- **TypeScript**: Type-safe JavaScript
- **Lucide Icons**: Beautiful, consistent icon set

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn package manager

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/your-username/ensimbini-engineering.git
   cd ensimbini-engineering
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. Run the development server:
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Project Structure

\`\`\`
ensimbini-engineering/
├── app/                    # Next.js App Router pages
│   ├── about/              # About page
│   ├── clients/            # Clients page
│   ├── contact/            # Contact page
│   ├── projects/           # Projects page
│   ├── services/           # Services page
│   ├── layout.tsx          # Root layout component
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/             # Reusable components
│   ├── site-footer.tsx     # Footer component
│   ├── site-header.tsx     # Header/navigation component
│   ├── theme-provider.tsx  # Theme provider component
│   └── ui/                 # UI components from shadcn
├── public/                 # Static assets
├── .gitignore              # Git ignore file
├── next.config.mjs         # Next.js configuration
├── package.json            # Project dependencies
├── README.md               # Project documentation
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
\`\`\`

## Deployment

This website can be easily deployed to Vercel:

1. Push your code to a GitHub repository
2. Import the project to Vercel
3. Vercel will automatically detect Next.js and deploy the website

For other deployment options, refer to the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

## Customization

### Content

- Update the text content in the page files located in the `app` directory
- Replace placeholder images with actual company images in the appropriate components

### Styling

- Modify the color scheme and styling in the Tailwind configuration file (`tailwind.config.ts`)
- Adjust component styles in their respective files

### Adding New Pages

1. Create a new directory in the `app` folder with the page name
2. Add a `page.tsx` file in the new directory
3. Update the navigation in `site-header.tsx` to include the new page

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any questions or support regarding this website, please contact:

- **Email**: your-email@example.com
- **Website**: [your-website.com](https://your-website.com)

---

Built with ❤️ for ENSIMBINI ENGINEERING CC
