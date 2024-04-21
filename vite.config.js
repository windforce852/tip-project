import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // "process.env.VITE_TEST_OPEN_WEATHER_API_KEY" : process.env.ENV
})