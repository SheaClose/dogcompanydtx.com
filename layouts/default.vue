<template>
  <v-app dark>
    <nuxt />
  </v-app>
</template>

<script>
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
  body {
    background-color: black;
    color: white;
  }
  /*//////////////////////Home Page//////////////////////*/
  .Home-page-container {
    background: black;
    background-attachment: fixed;
    background-position: center center;
    background-size: 125vh;
    color: white;
  }

  .image-style {
    border: 4px solid #8b8552;
    border-radius: 20px;
  }

  .date {
    text-align: right;
    font-size: 0.85em;
  }

  @media only screen and (min-width: 960px) {
    .Home-page-container {
      background: -webkit-radial-gradient(
          center,
          ellipse,
          rgba(0, 0, 0, 0),
          rgba(0, 0, 0, 1) 70%
        ),
        url("https://s3-us-west-2.amazonaws.com/dogcompany/DogCoAmps.jpg")
          no-repeat fixed;

      background: radial-gradient(
          ellipse at center,
          rgba(0, 0, 0, 0),
          rgba(0, 0, 0, 1) 70%
        ),
        url("https://s3-us-west-2.amazonaws.com/dogcompany/DogCoAmps.jpg")
          no-repeat fixed;
      background-attachment: fixed;
      background-position: center center;
      background-size: 125vh;
      color: white;
    }
  }

  .container-center {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

  /*//////////////////////About Page//////////////////////*/
  .about-page-container {
    background: black;
    background-attachment: fixed;
    background-position: center center;
    background-size: 70vh;
    color: white;
  }

  @media only screen and (min-width: 960px) {
    .about-page-container {
      background: url("https://s3-us-west-2.amazonaws.com/dogcompany/DogCoLogo.png")
        no-repeat;
      background-attachment: fixed;
      background-position: center center;
      background-size: 70vh;
      color: white;
    }
  }

  /*//////////////////////Store Page//////////////////////*/
  .Store-page-container {
    background: black;
    background-attachment: fixed;
    background-position: center center;
    background-size: 125vh;
    -o-object-fit: fill;
    object-fit: fill;
    -o-object-position: center;
    object-position: center;
  }

  @media only screen and (min-width: 960px) {
    .Store-page-container {
      min-height: 99vh;
      background: -webkit-radial-gradient(
          center,
          ellipse,
          rgba(0, 0, 0, 0),
          rgba(0, 0, 0, 1) 70%
        ),
        url("https://s3-us-west-2.amazonaws.com/dogcompany/PastorJoe.jpg")
          no-repeat fixed;
      background: radial-gradient(
          ellipse at center,
          rgba(0, 0, 0, 0),
          rgba(0, 0, 0, 1) 70%
        ),
        url("https://s3-us-west-2.amazonaws.com/dogcompany/PastorJoe.jpg")
          no-repeat fixed;
      background-attachment: fixed;
      background-position: center center;
      background-size: 125vh;
      -o-object-fit: fill;
      object-fit: fill;
      -o-object-position: center;
      object-position: center;
    }
  }

  .Store-page-content-container {
    min-height: 100vh;
    text-align: center;
    color: white;
    background-color: rgba(0, 0, 0, 0.1);
  }

  .product-repeat {
    margin-top: 20px;
  }

  .product-img {
    height: 35vh;
    max-width: 100%;
    transition: transform 250ms ease-out;
  }

  .product-img:hover {
    transform: scale(1.05);
  }

  .product-text {
    font-size: 2.05vh;
  }

  .product-page {
    height: 80vh;
    font-size: 1.5em;
  }

  .product-page-img {
    height: 80vh;
  }

  /*//////////////////////Cart Page//////////////////////*/
  .cartHeader {
    color: black;
    font-weight: bold;
    font-size: 3.5em;
  }
  /*//////////////////////Nav Page//////////////////////*/
  .nav-bar a:link {
    color: white;
  }

  .nav-bar a:visited {
    color: white;
  }

  .nav-bar {
    background: transparent;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: distribute;
    justify-content: space-between;
    font-family: "Black Ops One", cursive;
    font-size: 2em;
    margin: 1vh 0vh 5vh;
  }
  a {
    color: deepskyblue;
  }
  .nav-bar a {
    color: white;
  }

  .pointer {
    cursor: pointer;
  }

  @-ms-viewport {
    width: device-width;
  }

  .prodrow {
    max-height: 50vh;
  }

  .t_shirt_select {
    display: block;
    background-color: #444;
  }
  [type="checkbox"]:not(:checked),
  [type="checkbox"]:checked {
    position: static;
    left: 0;
    opacity: 1;
  }
</style>
