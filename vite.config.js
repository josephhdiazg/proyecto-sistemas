import { resolve } from 'path'
import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    RubyPlugin(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      '~assets': resolve(__dirname, 'assets'),
    }
  }
})
