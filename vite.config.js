import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/", // set base for deployment to custom domain root
  plugins: [react()],
})
