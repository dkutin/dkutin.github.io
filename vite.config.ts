import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'

export default defineConfig({
  plugins: [
    { enforce: 'pre', ...mdx({/* jsxImportSource: …, otherOptions… */ }) },
    react({ include: /\.(jsx|js|mdx|md|tsx|ts)$/ })
  ],
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@pages': '/src/pages',
      '@assets': '/src/assets'
    }
  }
})