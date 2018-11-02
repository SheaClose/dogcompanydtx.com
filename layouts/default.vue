<template>
  <v-app dark>
    <nuxt />
  </v-app>
</template>

<script>
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

  export default {
    data() {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        items: [
          { icon: 'apps', title: 'Welcome', to: '/' },
          { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Vuetify.js'
      }
    }
  }
</script>

<style>
p.description a.error-link.nuxt-link-active{
  color:white;
}
  .application.theme--dark {
    background: black;
  }
  body {
    background-color: black;
    color: white;
    max-width: 100vw;
    overflow: hidden;
  }
</style>
