const baseHref = process.env.BASE_HREF || '/';

export default {
    target: 'static',
    mode: 'universal',
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || ''
            },
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: baseHref + 'favicon.ico'},
        ]
    },
    /*
    ** Customize the progress-bar color
    */
    loading: {color: '#222'},
    /*
    ** Global CSS
    */
    css: [
        '../node_modules/@ionic/core/css/core.css',
        '../node_modules/@ionic/core/css/normalize.css',
        '../node_modules/@ionic/core/css/structure.css',
        '../node_modules/@ionic/core/css/typography.css',
        '../node_modules/@ionic/core/css/ionic.bundle.css',
    ],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        {src: '~/plugins/ionic.js', mode: 'client'},
    ],
    /*
    ** Nuxt.js dev-modules
    */
    components: true,

    buildModules: [
        // '@nuxtjs/router',
        '@nuxtjs/moment', // dateMixin 모듈 추가
    ],
    /*
    ** Nuxt.js modules
    */
    modules: [
        '@nuxtjs/pwa',
        '@nuxtjs/axios',
        '@nuxtjs/dotenv',
        '@nuxtjs/toast',
        ['@nuxtjs/component-cache', {maxAge: 5000}],
        '@nuxtjs/moment',
    ],
    moment: {
        locales: ['ko'],
        defaultTimezone: 'Asia/Seoul',

    },
    axios: { // axios 설정
        proxy: true,
    },
    cache: {
        // max: 캐시에 사용되는 컴포넌트의 수
        // maxAge: 캐시 시간 (ms)
        max: 1000,
        maxAge: 1000 * 60 * 60
    },
    vue: {
        config: {
            productionTip: false,
            devtools: true,
        }
    },
    build: {
        /*
        ** You can extend webpack config here
        */
        babel: {
            compact: true,
        },
        extend(config, ctx) {
        }

    },
    generate: {
        routes: [
            '/',
        ],
    },
    router: {
        base: baseHref,
        mode: 'history',
        prefetchLinks: false,
    },

    server: {
        port: 3000, // default: 3000
        host: "0.0.0.0", // default: localhost
    }

};
