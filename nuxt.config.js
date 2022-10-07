const baseHref = process.env.BASE_HREF || '/';

export default {
    target: 'static',
    // mode: 'spa', // default
    ssr: false, // default
    head: {
        htmlAttrs: {
            lang: 'ko'
        },
        title: process.env.npm_package_name || '',
        meta: [
            {charset: 'utf-8'},
            {
                name: 'viewport',
                content: 'initial-scale=1, user-scalable=no, width=device-width, height=device-height, viewport-fit=cover'
            },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || ''
            },
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: baseHref + 'favicon.ico'},
            {rel: "stylesheet", type: "text/css", href: "https://unpkg.com/phosphor-icons@1.4.2/src/css/icons.css"}
        ],
    },
    /*
    ** Customize the progress-bar color
    */
    loading: {color: '#222'},
    /*
    ** Global CSS
    */
    css: [
        'bootstrap/dist/css/bootstrap.css',
        'bootstrap-vue/dist/bootstrap-vue.css',
        '~assets/css/index.css',
        '~assets/css/app.css',
        '~assets/css/auth.css',
        '~assets/css/common.css',
        '~assets/css/util.css',
        '~assets/css/bootstrap-btn.css',

    ],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        // {src: '~/plugins/ionic.js', mode: 'client'},
    ],
    /*
    ** Nuxt.js dev-modules
    */
    components: true,

    buildModules: [
        // '@nuxtjs/router',
        '@vueuse/nuxt',
        '@nuxt/image',
        // '@nuxtjs/moment', // dateMixin 모듈 추가
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
        // '@nuxtjs/moment',
        '@nuxtjs/dayjs',
        ['bootstrap-vue/nuxt'],
    ],
    dayjs: {
        locales: ['ko'],
        defaultLocale: 'ko',
        defaultTimeZone: 'Asia/Seoul',
        plugins: [
            'utc', // import 'dayjs/plugin/utc'
            'timezone' // import 'dayjs/plugin/timezone'
        ] // Your Day.js plugin
    },
    bootStrapVue: {
        bootstrapCSS: false, // Or `css: false`
        bootstrapVueCSS: false, // Or `bvCSS: false`
    },
    /*moment: {
        locales: ['ko'],
        defaultTimezone: 'Asia/Seoul',

    },*/
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
        publicPath: '/nuxt/',
        /*
        ** You can extend webpack config here
        */
        babel: {
            // compact: true,
            plugins: [
                ["@babel/plugin-proposal-private-property-in-object", {"loose": true}],
                ['@babel/plugin-proposal-private-methods', {loose: true}]

            ],
        },

        extend(config, ctx) {
        },

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
        iosScheme: "nuxtmobile"
    }
};
