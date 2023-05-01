// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // https://masanos.com/notes/ur-ogjt46yo/
    css: [
        '~/node_modules/bootstrap/dist/css/bootstrap.min.css',
    ],
    plugins: [
        {src: "~/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js", mode: "client"}
    ],
    modules: [
        '@nuxt/devtools'
    ]
})
