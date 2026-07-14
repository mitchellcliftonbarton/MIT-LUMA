import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxtjs/sanity'],

  css: ['~/assets/css/global.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  // Public, read-only Sanity config — published content needs no token.
  // Move to runtimeConfig/env if you later need per-environment datasets.
  sanity: {
    projectId: '988esrpr',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2024-10-01',
  },
})
