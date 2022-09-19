import {defineNuxtConfig} from 'nuxt'

export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    target: 'static',

    head: {
        title: '캠핑24',
        htmlAttrs: {
            lang: 'ko'
        },
        meta: [
            {charset: 'utf-8'},
            {
                name: 'viewport',
                content: 'width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no'
            },
            {hid: 'description', name: 'description', content: ''},
            {name: 'format-detection', content: 'telephone=no'}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        // ionic css
        '@ionic/core/css/core.css',
        '@ionic/core/css/normalize.css',
        '@ionic/core/css/structure.css',
        '@ionic/core/css/typography.css',
        '@ionic/core/css/ionic.bundle.css',

    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '~plugins/ionic.js'
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        '@vueuse/nuxt',
        '@nuxtjs/moment', // dateMixin 모듈 추가
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/toast',
        ['@nuxtjs/component-cache', {maxAge: 5000}],
        '@nuxtjs/moment',
    ],
    moment: {
        locales: ['ko'],
        defaultTimezone: 'Asia/Seoul',

    },
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        babel: {
            compact: true,
        }
    },
    axios: { // axios 설정
        proxy: true,
    },
    router: {
        prefetchLinks: false,
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

}
