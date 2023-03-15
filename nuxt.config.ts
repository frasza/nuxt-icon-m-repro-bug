// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  typescript: {
    strict: true,
    typeCheck: "build",
  },
  modules: ["nuxt-icon"],
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: () => "app.js",
        },
      },
    },
  },
});
