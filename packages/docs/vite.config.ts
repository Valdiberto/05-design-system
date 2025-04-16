import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  base: '/05-design-system/', // Configuração do caminho base no Vite
  plugins: [react()],
})
