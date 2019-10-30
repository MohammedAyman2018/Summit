
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Summit | Mohammed Ayman',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Practising on Vue.js(Nuxt.js) with Tailwind' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '~/assets/img/logo.png' },

    ],
    script: [
      { src: "https://kit.fontawesome.com/7ccf14bcd9.js"},
      { src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"},
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#000' },
  /*
  ** Global CSS
  */
  css: [
    '~/static/animatePage.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~plugins/vue-owl-carousel' , ssr: false },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {

    /*
    ** You can extend webpack config here
    */
   
    extend (config, ctx, isDev ) {
      
    }
  }
}