// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // https://toolsnull.com/code-solution/the-best-way-to-include-bootstrap-in-nuxtjs
    css: [
        '~/node_modules/bootstrap/dist/css/bootstrap.min.css',
    ],
    plugins: [
        // This line has conflict with devtools. resolve it later. saeed.doc
        // {src: "~/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js", mode: "client"}
    ],
    modules: [
        '@nuxt/devtools'
    ]
})
