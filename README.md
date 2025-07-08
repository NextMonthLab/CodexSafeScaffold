# CodexSafeScaffold

Production-ready fullstack TypeScript scaffold for Codex/Claude handover and Render deployment.

## Features

- **TypeScript Strict Mode**: Full type safety across frontend and backend
- **Vite Frontend**: Fast development with React
- **Express Backend**: Node.js server with TypeScript
- **Clean Build Output**: Optimized `dist/` for production
- **GitHub Ready**: Pre-configured for version control
- **Render Deployment**: Production-ready configuration

## Structure

```
├── client/
│   ├── index.html
│   ├── src/main.tsx
│   └── vite.config.ts
├── server/
│   ├── index.ts
│   └── render.ts
├── public/
├── package.json
├── tsconfig.json
├── .gitignore
└── README.md
```

## Getting Started

### Development

```bash
npm install
npm run dev
```

This starts both the Vite dev server (frontend) and Express server (backend) concurrently.

### Production Build

```bash
npm run build
```

Builds the frontend to `dist/` and prepares the server for production.

### Production Server

```bash
npm start
```

Runs the production server serving the built frontend and API.

## Scripts

- `npm run dev` - Start development servers (client + server)
- `npm run build` - Build for production
- `npm start` - Run production server
- `npm run check` - TypeScript type checking

## API Endpoints

- `GET /api/health` - Health check endpoint
- `GET /api/hello` - Test endpoint

## Ready for Handover

This scaffold is clean, minimal, and ready for Codex/Claude development. All dependencies are properly configured and the build system is production-ready for Render deployment.