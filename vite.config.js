import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import dotenv from 'dotenv';
dotenv.config();

const { PORT = 3001 } = process.env;

export default defineConfig({
  plugins: [reactRefresh()],
  publicDir: 'src/app/assets/images',
  server: {
    proxy: {
      '/api': {
        target: `http://localhost:${PORT}`,
        changeOrigin: true,
      },
    },
    build: {},
    outDir: 'dist/app',
  },
});
