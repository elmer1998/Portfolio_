import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Portfolio_/", // Just the repo name with slashes
  build: {
    sourcemap: false, // This makes your code much harder to read
  }
})
