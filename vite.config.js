import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',          // 👈 IMPORTANT for custom domain
  plugins: [react()],
})
