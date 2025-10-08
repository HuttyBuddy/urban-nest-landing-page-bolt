import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: base must be '/' so assets load correctly on Cloud Run
export default defineConfig({
  base: '/',
  plugins: [react()],
})
