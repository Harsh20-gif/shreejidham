import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// =======================================================================
// GITHUB PAGES DEPLOYMENT CONFIGURATION:
// Set REPO_NAME to your GitHub repo name with leading & trailing slashes,
// e.g.: '/shreejidham/'
// =======================================================================
const REPO_NAME = process.env.REPO_NAME || '/shreejidham/';

export default defineConfig({
  plugins: [react()],
  base: REPO_NAME,
  server: {
    port: 5173,
    host: true
  }
});
