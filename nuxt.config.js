import theme from './config/vuetify/theme.js';
import icons from './config/vuetify/icons.js';

require('dotenv').config();

// const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin');
// const nodeExternals = require('webpack-node-externals');

// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { SkeletonPlugin } = require('page-skeleton-webpack-plugin');

export default {
    mode: 'spa',

    /**
     * babel
     */
    babel: {
        presets({ isServer }) {
            return [
                [
                    '@nuxt/babel-preset-app',
                    {
                        useBuiltIns: 'entry'
                    }
                ]
            ];
        }
    },

    /*
     ** Headers of the page
     */
    head: {
        titleTemplate: `%s - ${process.env.APP_NAME}`,
        title: process.env.DEFAULT_TITLE,
        script: [{}],
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                // content: 'width=device-width, initial-scale=1'
                // content: 'initial-scale=1, width=device-width, height=device-height, viewport-fit=cover',
                content:
                    'initial-scale=1.0, width=device-width, user-scalable=no'
            },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description
            },
            {
                name: 'robots',
                content: 'noindex, nofollow'
            },
            {
                hid: 'og:title',
                name: 'og:title',
                content: process.env.DEFAULT_TITLE
            },
            {
                hid: 'og:description',
                name: 'og:description',
                content: process.env.npm_package_description
            },
            {
                hid: 'og:url',
                property: 'og:url',
                content: process.env.APP_URL
            },
            {
                property: 'og:site_name',
                content: process.env.APP_NAME
            },
            {
                property: 'og:locale',
                content: 'zh_TW'
            }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
                rel: 'stylesheet',
                href:
                    'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
            }
        ]
    },

    // https://pwa.nuxtjs.org/modules/meta.html
    meta: {
        mobileAppIOS: true,
        appleStatusBarStyle: 'black-translucent',
        nativeUI: true,
        name: process.env.APP_NAME,
        author: process.env.APP_TEAM,
        lang: 'zh_TW'
    },

    // https://pwa.nuxtjs.org/modules/icon.html
    // pwa: {
    //     iconSrc: '~/static/icon.png',
    //     iconFileName: 'icon.png',
    //     icon: {
    //         sizes: [64, 120, 144, 152, 192]
    //     }
    // },

    // https://pwa.nuxtjs.org/modules/manifest.html
    manifest: {
        name: process.env.APP_NAME,
        description: process.env.npm_package_description,
        display: 'standalone',
        dir: 'ltr',
        lang: 'zh-Hant-TW',
        background_color: '#FFFFFF',
        theme_color: '#878787',
        start_url: '/?utm_source=homescreen'
    },

    router: {
        mode: 'history',
        middleware: ['auth', 'detect-webp']
    },

    /*
     ** Customize the progress-bar color
     */
    loading: { color: 'amber' },

    /*
     ** Global CSS
     */
    css: ['~/assets/sass/main.scss'],

    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        '@/plugins/axios',
        // '@/plugins/vee-validate',
        '@/plugins/filters',
        '@/plugins/i18n',
        '@/plugins/helpers',
        '@/plugins/defined',
        '@/plugins/svg-icon.js',
        '@/plugins/vue-scrollactive'
    ],

    /*
     ** Nuxt.js modules
     *
     * Docs
     * axios : https://github.com/nuxt-community/axios-module#usage
     * auth : https://github.com/nuxt-community/auth-module#usage
     * dotenv : https://github.com/nuxt-community/dotenv-module#usage
     */
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/auth',
        '@nuxtjs/pwa',
        '@nuxtjs/toast',
        '@nuxtjs/eslint-module',
        '@nuxtjs/redirect-module',
        ['@nuxtjs/dotenv', { filename: '.env' }],
        [
            'nuxt-i18n',
            {
                locales: [
                    {
                        code: 'en',
                        iso: 'en-US',
                        file: 'en.js'
                    },
                    {
                        code: 'tw',
                        iso: 'zh-TW',
                        file: 'zh-TW.js'
                    }
                ],
                lazy: true,
                langDir: 'lang/',
                defaultLocale: 'tw',
                vueI18n: {
                    fallbackLocale: 'tw'
                }
            }
        ]
    ],

    buildModules: ['@nuxtjs/vuetify'],

    vuetify: {
        customVariables: ['~/assets/sass/variables.scss'],
        // defaultAssets: false,
        treeShake: true,
        theme,
        // icons,
        breakpoint: {
            // 992 + 16 , 1280 + 16
            thresholds: {
                xs: 576,
                sm: 768,
                md: 1008,
                lg: 1296
            }
        }
    },

    redirect: [
        // { from: '^/detail/(.*)$', to: '/property/$1' } // One to one mapping
    ],

    // memwatch: {
    //     graph: true,
    //     graphSetup(setup) {
    //         setup.metrics.malloc = {
    //             aggregator: 'avg',
    //             color: 'cyan'
    //         };
    //     },
    //     graphAddMetric(turtleGraph, stats) {
    //         turtleGraph
    //             .metric('my metrics', 'malloc')
    //             .push(stats.malloced_memory);
    //     }
    // },

    /*
     ** Axios module configuration
     */
    axios: {
        // proxy: true,
        proxyHeaders: false,
        credentials: false,
        // debug: true,
        baseURL: process.env.API_URL
    },

    /*
     ** Proxy module configuration
     */
    // proxy: resolve('./config/proxy'),

    /*
     ** Toast module configuration
     */
    toast: {
        position: 'top-center',
        theme: 'bubble',
        duration: 5000
    },
    /*
     ** Auth module configuration
     */
    auth: {
        redirect: {
            callback: '/callback'
        },
        rewriteRedirects: true,
        fullPathRedirect: true,
        plugins: ['@/plugins/auth'],
        strategies: {
            // facebook: {
            //     client_id: process.env.FACEBOOK_CLIENT_ID,
            //     userinfo_endpoint:
            //         'https://graph.facebook.com/v2.12/me?fields=about,name,picture{url},email,birthday',
            //     scope: ['public_profile', 'email', 'user_birthday']
            // },
            // google: {
            //     client_id: process.env.GOOGLE_CLIENT_ID
            // },
            password_grant: {
                _scheme: 'local',
                endpoints: {
                    login: {
                        url: '/oauth/token',
                        method: 'post',
                        propertyName: 'access_token'
                    },
                    logout: false,
                    user: {
                        url: '/api/user',
                        method: 'get'
                    }
                }
            }
        }
    },

    vue: {
        config: {
            devtools: true
        }
    },

    /*
     ** Build configuration
     */
    build: {
        // Add exception
        transpile: ['vee-validate/dist/rules'],

        babel: {
            presets({ isServer }) {
                return [
                    [
                        require.resolve('@nuxt/babel-preset-app'),
                        // require.resolve('@nuxt/babel-preset-app-edge'), // For nuxt-edge users
                        {
                            buildTarget: isServer ? 'server' : 'client',
                            corejs: { version: 3 }
                        }
                    ]
                ];
            }
        },

        // analyzer: true,

        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {
            // Run ESLint on save
            if (ctx.isDev && ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                });

                /**
                 * generate skeleton screen template
                 */
                // config.plugins.push(new HtmlWebpackPlugin());
                // config.plugins.push(
                //     new SkeletonPlugin({
                //         pathname: path.resolve(__dirname, `./skeletons`),
                //         staticDir: config.output.path,
                //         loading: 'shine',
                //         routes: ['/', '/search-to'] // 将需要生成骨架屏的路由添加到数组中
                //     })
                // );

                /**
                 * vue before create import skeleton screens.
                 */
                // config.plugins.push(
                //     new SkeletonWebpackPlugin({
                //         webpackConfig: {
                //             target: 'node',
                //             entry: {
                //                 app: resolve('./plugins/entry-skeleton.js')
                //             },
                //             externals: nodeExternals({
                //                 whitelist: /\.css$/
                //             })
                //         },
                //         quiet: true,
                //         minimize: true,
                //         router: {
                //             mode: 'history',
                //             routes: [
                //                 {
                //                     path: '/',
                //                     skeletonId: 'skeleton1'
                //                 },
                //                 {
                //                     path: '/search-to',
                //                     skeletonId: 'skeleton2'
                //                 }
                //             ]
                //         }
                //     })
                // );
            }
        }
    }
};
