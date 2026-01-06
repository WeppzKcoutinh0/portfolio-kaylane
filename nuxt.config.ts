export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  devtools: { enabled: true },

  vite: {
    server: {
      watch: {
        usePolling: true, // Importante para WSL/Docker
      },
      hmr: {
        protocol: 'ws',
        host: 'localhost',
      }
    }
  }
})