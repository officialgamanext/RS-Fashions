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
    // Disable CSS minification — Vite 8's lightningcss minifier crashes on
    // bootstrap.min.css's embedded `sourceMappingURL` comment. Bootstrap is
    // already pre-minified, so there is no meaningful bundle-size impact.
    cssMinify: false,
  },
})
