# Tendani Website

This is a modern, full-stack website built with Next.js 15 and Payload CMS. It provides a powerful content management system with a beautiful, production-ready frontend.

## Core Features

### Backend Features
- **Payload CMS Integration** - Enterprise-grade headless CMS
- **SQLite Database** - Using `@payloadcms/db-sqlite` for data storage
- **Authentication & User Management**
- **Form Builder** - Using `@payloadcms/plugin-form-builder`
- **SEO Management** - Using `@payloadcms/plugin-seo`
- **Search Functionality** - Using `@payloadcms/plugin-search`
- **URL Redirects** - Using `@payloadcms/plugin-redirects`
- **Nested Documents** - Using `@payloadcms/plugin-nested-docs`
- **Live Preview** - Real-time content preview using `@payloadcms/live-preview-react`

### Frontend Features
- **Next.js 15** - Latest version with App Router
- **Modern UI Components** - Using Radix UI primitives
- **Tailwind CSS** - For styling with additional typography plugin
- **Responsive Design** - Mobile-first approach
- **Dark Mode Support**
- **Interactive Charts** - Using Recharts
- **Form Handling** - Using React Hook Form
- **Code Syntax Highlighting** - Using Prism React Renderer
- **Date Picking** - Using React Day Picker
- **Admin Bar Integration** - For quick access to CMS

## Tech Stack

- **Framework**: Next.js 15.3.0
- **CMS**: Payload 3.33.0
- **Database**: SQLite
- **UI Components**: Radix UI
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Typography**: Geist Font
- **Charts**: Recharts
- **Forms**: React Hook Form

## Getting Started

### Prerequisites
- Node.js ^18.20.2 || >=20.9.0
- PNPM ^9 || ^10

### Development

1. Clone the repository
2. Copy the environment variables:
   ```bash
   cp .env.example .env
   ```
3. Install dependencies:
   ```bash
   pnpm install
   ```
4. Start the development server:
   ```bash
   pnpm dev
   ```
5. Open [http://localhost:3000](http://localhost:3000)

### Production

1. Build the application:
   ```bash
   pnpm build
   ```
2. Start the production server:
   ```bash
   pnpm start
   ```

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Fix ESLint errors
- `pnpm generate:types` - Generate Payload types
- `pnpm generate:importmap` - Generate import map

## Project Structure

```
src/
├── access/         # Access control logic
├── app/            # Next.js app router pages
├── blocks/         # Reusable content blocks
├── collections/    # Payload collections
├── components/     # React components
├── hooks/          # Custom React hooks
├── lib/           # Utility libraries
├── providers/     # React context providers
├── search/        # Search functionality
└── utilities/     # Helper functions
```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
PAYLOAD_SECRET=your-secret-key
MONGODB_URI=your-mongodb-uri
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Built with [Next.js](https://nextjs.org/) and [Payload CMS](https://payloadcms.com/)
