// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-12-19',
  devtools: { enabled: true },
  nitro: {
    preset: 'aws_lambda',
    serveStatic: true,
    output: {
      publicDir: './output/server'
    },
    experimental: {
      openAPI: true,
    },
  },
  css: [
    'bulma/bulma.scss',
    "~/assets/scss/main.scss",
  ],
  srcDir: '.',
  dir: {
    app: 'app'
  },
  runtimeConfig: {
    aws: {
      profile: process.env.AWS_PROFILE,
      secretArn: process.env.AWS_SECRET,
      resourceArn: process.env.AWS_RESOURCE,
    },
    turnstile: {
      secretKey: process.env.TURNSTILE_SECRET_KEY
    },
    public: {
      name: "Judge",
      turnstile: {
        siteKey: process.env.TURNSTILE_SITE_KEY,
      }
    }
  },
  i18n: {
    locales: [
      { code: 'ko', language: 'ko-KR' },
      { code: 'en', language: 'en-US' }
    ],
    defaultLocale: 'ko'
  },
  modules: [
    "@nuxtjs/turnstile",
    "@nuxt/eslint",
    "nuxt-auth-utils",
    "nuxt-purgecss",
    "@pinia/nuxt",
    "@vee-validate/nuxt",
    "@nuxtjs/i18n",
    "@vueuse/nuxt",
    '@nuxtjs/sitemap',
    'nuxt-csurf',
    'nuxt-monaco-editor',
    'nuxt-openapi-docs-module',
    '@vesp/nuxt-fontawesome'
  ]
})