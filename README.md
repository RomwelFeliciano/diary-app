# Diary App

A full-stack MERN diary application. Users register/log in and create, view,
edit, and delete personal diary entries.

## Stack

- **client** — React 18 (Create React App), React Router, Tailwind CSS, Axios
- **server** — Node.js, Express, MongoDB (Mongoose), JWT auth

## Project structure

```
diary-app/
├── client/          # React frontend
│   ├── public/
│   └── src/
│       ├── api/           # axios instance + API service functions
│       ├── components/    # presentational/reusable UI components
│       ├── context/       # React context definitions
│       ├── hooks/         # custom hooks (auth, notes)
│       └── pages/         # route-level components
├── server/          # Express backend
│   └── src/
│       ├── config/        # env loading + DB connection
│       ├── controllers/   # request handlers
│       ├── middleware/    # auth guard, error handler
│       ├── models/        # Mongoose schemas
│       ├── routes/        # Express routers
│       └── utils/         # asyncHandler, JWT helper
├── package.json     # root workspace (npm workspaces: client + server)
└── README.md
```

This repo uses **npm workspaces**, so a single `npm install` at the root
installs and hoists dependencies for both `client/` and `server/` into one
top-level `node_modules/`.

## Getting started

### 1. Install dependencies (from the repo root)

```bash
npm install
```

### 2. Configure environment variables

Copy the example files and fill in real values:

```bash
cp server/.env.example server/.env.local
cp client/.env.example client/.env.local
```

`server/.env.local`:

| Variable         | Description                                      |
| ---------------- | ------------------------------------------------- |
| `PORT`           | Port the API listens on (default `5001`)           |
| `MONGO_URI`      | MongoDB connection string                          |
| `JWT_SECRET`     | Secret used to sign JWTs                           |
| `JWT_EXPIRES_IN` | Token lifetime (default `3d`)                      |
| `CLIENT_ORIGIN`  | Allowed CORS origin (the client's URL)             |
| `NODE_ENV`       | `development` / `production`                       |

`client/.env.local`:

| Variable              | Description                          |
| --------------------- | ------------------------------------- |
| `REACT_APP_API_URL`   | Base URL of the running server API    |

A `server/.env.local` with a working local-dev secret and `client/.env.local`
pointing at `http://localhost:5001` are already included for convenience —
just replace `MONGO_URI` with your own MongoDB connection string.

> **macOS note:** port `5000` is claimed by Control Center's AirPlay Receiver,
> which will silently answer HTTP requests instead of your server and show up
> as a confusing CORS/403 error in the browser. That's why the default here is
> `5001` instead — either keep using a non-5000 port, or disable AirPlay
> Receiver under System Settings > General > AirDrop & Handoff.

### 3. Run the app in development

From the repo root:

```bash
npm run dev            # runs client + server together
npm run dev:server     # server only (nodemon)
npm run dev:client     # client only (react-scripts start)
```

### 4. Production build

```bash
npm run build          # builds the client into client/build
npm start               # starts the server
```

## Notes

- `react-scripts` (Create React App) pins old ranges for its optional
  TypeScript tooling; a fresh install can otherwise resolve an incompatible
  `typescript` version and break the build's lint step. The root
  `package.json` pins this via `overrides` (`typescript: ~4.9.5`) — this repo
  contains no TypeScript, it's purely a build-tool compatibility fix.
- `npm audit` reports a number of vulnerabilities that come from
  `react-scripts`'s own (unmaintained) dependency tree; they affect the local
  dev/build tooling, not the shipped app code.
