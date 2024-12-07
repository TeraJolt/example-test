import { defineConfig, } from 'vite'

export default defineConfig({
  define: {
    'process.env.PLASMO_PUBLIC_API_URL': JSON.stringify(process.env.PLASMO_PUBLIC_API_URL),
    'process.env.PLASMO_PUBLIC_API_KEY': JSON.stringify(process.env.PLASMO_PUBLIC_API_KEY),
  },
  plugins: [],
})