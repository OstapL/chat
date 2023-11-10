// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";

export default defineNuxtConfig({
  app: {
    rootId: 'Chat',
    head: {
      title: 'Simple Chat',
      meta: [
        {
          name: 'description',
          content: 'Simple Chat for test tasks',
        },
      ],
    },
  },
  build: {
    transpile: ['vuetify'],
  },
  devtools: { enabled: true },
  alias: {
    "@": resolve(__dirname, '/'),
  },
  css: ["~/assets/styles/index.sass", "vuetify/lib/styles/main.sass"],
  modules: ['@pinia/nuxt',],
  postcss: {
    plugins: {
      autoprefixer: {},
    }
  },
  runtimeConfig: {
    public: {
      STREAM_API_KEY: process.env.STREAM_API_KEY,
      STREAM_API_SECRET: process.env.STREAM_API_SECRET,
    },
  }
})
