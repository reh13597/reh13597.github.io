import { defineConfig, loadEnv } from 'vite'
import tailwindcss from "@tailwindcss/vite";
import react from '@vitejs/plugin-react'

// Runs the Vercel Functions in api/ during `npm run dev`, so the Spotify widget works locally
// without `vercel dev`. Only server-side vars (no VITE_ prefix needed) are read from .env.
const vercelApiDev = () => ({
  name: 'vercel-api-dev',
  apply: 'serve',
  configureServer(server) {
    // Vite restarts in-process when .env changes, and loadEnv prefers existing process.env values,
    // so clear what we injected last time or edits to .env would never be picked up
    for (const key of globalThis.__apiDevEnvKeys ?? []) delete process.env[key];
    const env = loadEnv(server.config.mode, process.cwd(), 'SPOTIFY_');
    globalThis.__apiDevEnvKeys = Object.keys(env);
    Object.assign(process.env, env);

    server.middlewares.use('/api', async (req, res, next) => {
      const route = req.url.split('?')[0].replace(/^\/+|\/+$/g, '');
      if (!/^[\w-]+$/.test(route)) return next();
      try {
        const mod = await server.ssrLoadModule(`/api/${route}.js`);
        const handler = mod[req.method];
        if (!handler) return next();
        const response = await handler(new Request(`http://localhost${req.originalUrl}`, { method: req.method }));
        res.statusCode = response.status;
        response.headers.forEach((value, key) => res.setHeader(key, value));
        res.end(Buffer.from(await response.arrayBuffer()));
      } catch (error) {
        next(error);
      }
    });
  },
});

export default defineConfig({
  base: '/',
  plugins: [tailwindcss(), react(), vercelApiDev()],
});
