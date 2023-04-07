// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            apiUrl: process.env.API_URL
        }
    },
    app: {
        head: {
            title: "VST Магазинчик",
            htmlAttrs: {
                class: "h-full bg-gray-100",
                lang: 'ru'
            },
            bodyAttrs: {
                class: "h-full"
            },
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { hid: 'description', name: 'description', content: '' },
                { name: 'format-detection', content: 'telephone=no' }
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
            ]
        }
    },
    css: ["@/assets/css/main.css"],
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
})
