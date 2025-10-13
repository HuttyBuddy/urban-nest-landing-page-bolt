// vite.config.ts

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

// Explicitly load .env file
dotenv.config()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
