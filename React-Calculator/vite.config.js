import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
  test: {
    globals: true,
    environment: "happy-dom",
  },
    proxy: {
      '/api': {
        target: 'http://api.wolframalpha.com/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
