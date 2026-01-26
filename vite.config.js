import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,   // habilita o host para aceitar conexões externas
    port: 3000,   // porta padrão, pode mudar se quiser
  },
})
