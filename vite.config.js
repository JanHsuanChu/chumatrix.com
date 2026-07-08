import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Using a root base path since this site is served from a custom domain
// (chumatrix.com) at the domain root, not from a /repo-name/ subpath.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
