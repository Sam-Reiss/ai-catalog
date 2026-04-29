# AI Catalog

A modern AI agents, flows, skills, and MCP servers discovery platform built with React, TypeScript, Vite, and Supabase.

## Features

- Browse and search AI agents, flows, skills, and MCP servers
- Switch between different personas (User, Engineer, Admin) and scopes (Explore, Group, Project)
- List and grid view modes
- Real-time filtering and sorting
- Detailed catalog item information
- Beautiful, responsive design

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS
- **Backend**: Supabase (PostgreSQL database)
- **UI**: Lucide React icons

## Setup

### Prerequisites

- Node.js 16+ and npm
- A Supabase account and project

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/REPO_NAME.git
   cd REPO_NAME
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Get your Supabase credentials from your project settings
   - Add them to `.env`:
     ```
     VITE_SUPABASE_URL=your_supabase_url
     VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
     ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

## Project Structure

```
src/
├── components/      # React components
├── lib/            # Utility functions and Supabase client
├── types.ts        # TypeScript type definitions
├── App.tsx         # Main app component
└── main.tsx        # Entry point
```

## License

MIT
