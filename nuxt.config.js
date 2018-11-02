const pkg = require("./package");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  mode: "universal",
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: "eng-us"
    },
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      {
        name: "description",
        content:
          "Dog Company is a Dallas Based punk rock band formed by Joe Blow (previously with The Staggers and Riot Squad)."
      },
      {
        name: "keywords",
        content:
          "dog,company,dallas,tx,punk,rock,staggers,riot squad, Joe Blow, Shea Close, shea close, Mic Villareal, Garrett Chapman"
      },
      { name: "viewport", content: "initial-scale=.75, maximum-scale=.75" },
      {
        name: "msapplication-TileImage",
        content: "Assets/favico/ms-icon-144x144.png"
      },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#ffffff" },
      { name: "msapplication", content: "#ffffff" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [
      { rel: "preconnect", href: "https://s3-us-west-2.amazonaws.com/" },
      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.1/css/materialize.css"
      },
      {
        href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        rel: "stylesheet"
      },
      {
        href:
          "https://fonts.googleapis.com/css?family=Black+Ops+One|Fruktur|Fugaz+One|Permanent+Marker|Shrikhand",
        rel: "stylesheet"
      },
      {
        rel: "apple-touch-icon",
        sizes: "57x57",
        href: "Assets/favico/apple-icon-57x57.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "60x60",
        href: "Assets/favico/apple-icon-60x60.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "72x72",
        href: "Assets/favico/apple-icon-72x72.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "76x76",
        href: "Assets/favico/apple-icon-76x76.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "114x114",
        href: "Assets/favico/apple-icon-114x114.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "120x120",
        href: "Assets/favico/apple-icon-120x120.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "144x144",
        href: "Assets/favico/apple-icon-144x144.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "152x152",
        href: "Assets/favico/apple-icon-152x152.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "Assets/favico/apple-icon-180x180.png"
      },

      {
        href: "https://fonts.googleapis.com/css?family=Black+Ops+One|Oswald",
        rel: "stylesheet"
      },
      { rel: "manifest", href: "Assets/favico/manifest.json" },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Black+Ops+One|Oswald"
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#FFFFFF" },

  /*
  ** Global CSS
  */
  css: ["./vuetify/src/stylus/main.styl"],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ["@/plugins/vuetify", "@/plugins/plugins"],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    "@nuxtjs/axios"
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    baseURL:
      process.env.NODE_ENV === "production"
        ? "https://dogcompanydtx.com"
        : process.env.NODE_ENV === "staging"
          ? "https://staging.sheaclose.com"
          : `http://localhost:${process.env.PORT}`
  },

  /*
  ** Build configuration
  */
  build: {
    cssSourceMap: true,
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      if (ctx.isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vuetify/]
          })
        ];
      }
    }
  }
};  
