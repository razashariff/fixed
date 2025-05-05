import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 8080,
    host: true,
    proxy: {
      '/functions/v1/zap-scan': {
        target: 'https://jjdzrxfriezvfxjacche.supabase.co',
        changeOrigin: true,
        secure: true,
      },
    }
  }
}) 