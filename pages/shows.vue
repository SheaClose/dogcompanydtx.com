<template>
  <div class="shows-page-container" :style="{
      backgroundSize:`${125 + parseInt(scroll / 6)}vh`
    }">
    <NavBar></NavBar>
    <div class="shows-page-content-container" :style="{backgroundColor: `rgba(0,0,0,${this.location})`}">
      <div class="container">
        <div >
          <script charset="utf-8" src="https://widget.bandsintown.com/main.min.js"/>
          <a 
            class="bit-widget-initializer" 
            data-artist-name="dog company" 
            data-display-local-dates="true" 
            data-display-past-dates="true" 
            data-auto-style="false" 
            data-text-color="#ffffff" 
            data-link-color="#8b8552" 
            data-background-color="rgba(0,0,0,0)" 
            data-display-limit="50" 
            data-link-text-color="#ffffff" 
            data-display-lineup="true" 
            data-separator-color="rgba(255, 255, 255, 0.5)"
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar"
import scroll from "@/mixins/scroll"
export default {
  components:{
    NavBar
  },
  mixins:[scroll]
}
</script>
<style>
  .shows-page-content-container > .container {
    padding-top: 10vh;
  }
  .shows-page-container {
    background: black;
    background-attachment: fixed;
    background-position: center center;
    background-size: 125vh;
    -o-object-fit: fill;
    object-fit: fill;
    -o-object-position: center;
    object-position: center;
    color: white;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    align-items: center;
  }

  .shows-page-content-container {
    background-color: transparent;
    font-family: arial, helvetica, sans-serif;
  }

  div[class*="content-container"] .container {
    width: 100%;
    margin: auto;
  }
  .shows-page-container {
    /* background: #000; */
    min-height: 100vh;
  }
  @media only screen and (min-width: 960px) {
    div[class*="content-container"] .container {
      width: 70%;
      margin: auto;
    }
    .shows-page-container {
      background: -webkit-radial-gradient(
          center,
          ellipse,
          rgba(0, 0, 0, 0),
          rgba(0, 0, 0, 1) 65%
        ),
        url("https://s3-us-west-2.amazonaws.com/dogcompany/DogwMisfits.jpg")
          no-repeat fixed;
      background: radial-gradient(
          ellipse at center,
          rgba(0, 0, 0, 0),
          rgba(0, 0, 0, 1) 65%
        ),
        url("https://s3-us-west-2.amazonaws.com/dogcompany/DogwMisfits.jpg")
          no-repeat fixed;
      background-attachment: fixed;
      background-position: center center;
      background-size: 125vh;
      -o-object-fit: fill;
      object-fit: fill;
      -o-object-position: center;
      object-position: center;
      color: white;
      -ms-flex-pack: distribute;
      justify-content: space-around;
    }
  }
</style>
