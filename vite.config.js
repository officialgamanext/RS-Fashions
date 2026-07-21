import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  build: {
    // lightningcss (Vite 8 default minifier) is incompatible with Bootstrap 5.
    // Disable CSS minification — Bootstrap is already well-optimised and the
    // final output is still gzip-compressed by the server.
    cssMinify: false,
  },
})
