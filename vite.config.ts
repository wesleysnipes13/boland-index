import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: If deploying to https://username.github.io/repo-name/
  // you must uncomment the line below and replace 'repo-name' with your repository name
  base: '/Boland-Index/',
});