import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set base to the GitHub Pages repo path so assets load at /OWNER/REPO/
  base: '/boland-index/',
});