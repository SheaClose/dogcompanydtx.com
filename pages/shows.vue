<template>
  <div class="shows-page-container" :style="{
      backgroundSize:`${125 + parseInt(scroll / 6)}vh`
    }">
    <NavBar></NavBar>
    <div class="shows-page-content-container" :style="{backgroundColor: `rgba(0,0,0,${this.location})`}">
      <div class="container">
        <div class="center">
          <h5 class="Past-events-header">Upcoming Events</h5>
        </div>
        <div v-html="unsafeHtml"></div>
        <div class="center">
          <h5 class="Past-events-header">Past Events</h5>
        </div>
        <table class="show-table highlight">
          <thead>
            <tr>
              <th style="width: 1.5vw"></th>
              <th style="width: 4.4vw">Date</th>
              <th style="width: 25.8vw">Venue</th>
              <th data-field="Location">Location</th>
              <th style="width: 4vw"></th>
              <th style="width: 5.3vw"></th>
              <th style="width: 5.3vw"></th>

            </tr>
          </thead>

          <tbody :key="show.id" v-for="show in shows">
            <tr @click="goToThere(show.facebook_rsvp_url)">
              <td style="width: 1.5vw"></td>
              <td style="width: 4.4vw" class="date-data">
                {{show.datetime | shortDate}}
              </td>
              <td style="width: 25.8vw" class="venue-data">{{show.venue.name}}</td>
              <td class="Location-data">{{show.venue.city}}, {{show.venue.region}}</td>
              <td style="width: 4vw"></td>
              <td style="width: 5.3vw">
                <a :href="show.facebook_rsvp_url">More
                  <br>Info</a>
              </td>
              <td style="width: 5.3vw">{{show.datetime | yearDate}}</td>
            </tr>
          </tbody>
        </table>
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
  mixins:[scroll],
  data(){
    return {
      unsafeHtml: '',
      shows: []
    }
  },
  async mounted(){
    let {data: shows } = await this.$axios.get('/api/shows')
    this.shows = shows.slice(1, 49).reverse()
    this.unsafeHtml = `
      <div>
          <a href="http://www.bandsintown.com/dog%20company" class="bit-widget-initializer" data-artist="dog company" data-prefix="fbjs"></a>
          <div class="right">
            <iframe src="https://www.bandsintown.com/artist/Dog%20Company/track_button?size=small&text_color=%2331465C&background_color=%23FFFFFF&hover_color=%23ededed" height="25" width="165" scrolling="no" frameborder="0" style="border:none; overflow:hidden" ; allowtransparency="true" class="center"></iframe>
            <br>
          </div>
          <script type='text/javascript' src='http://widget.bandsintown.com/javascripts/bit_widget.js' /> 
      </div>
      ` 
  },
  methods:{
    goToThere (url) {
      window.location.href = url
    }
  }
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

  @media only screen and (min-width: 960px) {
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
  table.highlight > tbody > tr:hover {
    background-color: rgba(0, 150, 136, 0.8);
  }
  table {
    font-size: 1.25em;
    font-weight: 700;
  }
  .shows-page-content-container {
    background-color: transparent;
    font-family: arial, helvetica, sans-serif;
  }

  .Past-events-header {
    margin-top: 50px;
  }

  div[class*="content-container"] .container {
    width: 70%;
    margin: auto;
  }
  .shows-page-container {
    /* background: #000; */
    min-height: 100vh;
  }
</style>
