<template>
  <div class="shows-page-container" :style="{
      backgroundSize:`${125 + (+scroll / 4)}vh`
    }">
    <div class="shows-page-content-container" :style="{backgroundColor: `rgba(0,0,0,${this.location})`}">
      <div class="container">
        <NabBar></NabBar>
        <div class="center">
          <div class="Past-events-header">
            <h5>Upcoming Events</h5>
          </div>
        </div>
        <script type='text/javascript' src='http://widget.bandsintown.com/javascripts/bit_widget.js'></script>
        <a href="http://www.bandsintown.com/dog%20company" class="bit-widget-initializer" data-artist="dog company" data-prefix="fbjs"></a>
        <div class="right">
          <iframe src="https://www.bandsintown.com/artist/Dog%20Company/track_button?size=small&text_color=%2331465C&background_color=%23FFFFFF&hover_color=%23ededed" height="25" width="165" scrolling="no" frameborder="0" style="border:none; overflow:hidden" ; allowtransparency="true" class="center"></iframe>
          <br>
        </div>
        <div class="center">
          <div class="Past-events-header">
            <h5>Past Events</h5>
          </div>
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

          <tbody :key="i" v-for="(show,i) in shows">
            <tr ng-click="goToThere(show.facebook_rsvp_url)">
              <td style="width: 1.5vw"></td>
              <td style="width: 4.4vw" class="date-data">{{show.datetime | formatDate}} {{show.datetime | formatDate}}
              </td>
              <td style="width: 25.8vw" class="venue-data">{{show.venue.name}}</td>
              <td class="Location-data">{{show.venue.city}}, {{show.venue.region}}</td>
              <td style="width: 4vw"></td>
              <td style="width: 5.3vw">
                <a :href="show.facebook_rsvp_url">More
                  <br>Info</a>
              </td>
              <td style="width: 5.3vw">{{show.datetime | formatDate}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';
import scroll from '@/mixins/scroll'
export default {
  components: {
    NavBar
  },
  mixins: [scroll],
  data(){
    return {
      shows: []
    }
  },
  async mounted(){
    let {data} = await this.$axios.get("/api/shows")
    this.shows = data.slice(0,25)

  },
  methods:{
    goToThere(url){
      console.log('url: ', url);
      // this.$router.history.push()
    }
  }
}
</script>
<style>
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

  .shows-page-content-container {
    background-color: transparent;
    font-family: arial, helvetica, sans-serif;
  }

  .Past-events-header {
    margin-top: 50px;
  }

  #toast-container {
    top: auto !important;
    left: auto !important;
    bottom: 15vh;
    right: 1%;
  }
</style>
