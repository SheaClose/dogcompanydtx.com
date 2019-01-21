<template>
  <div
    class="media-page-container"
    :style="{
      backgroundSize:`${120 + parseInt(scroll / 6)}vh`
    }"
  >
    <NavBar></NavBar>
    <div
      class="media-page-content-container"
      :style="{backgroundColor: `rgba(0,0,0,${this.location})`}"
    >
      <div class="container">
        <div
          :key="i"
          v-for="(al, i) in albums"
        >
          <div class="row">
            <div class="col s12 m12 l5 left responsive-img img-container">
              <img
                class="Album-Art"
                :src="al.album_art.img_url"
                :alt="al.album_art.alt"
              />
              <div class="container-fluid2">
                <a
                  v-for="(dist, i) in al.distributors"
                  :key="i"
                  target="_blank"
                  :href="dist.link_url"
                >
                  <img
                    :src="dist.logo_url"
                    style="height: 5vh; color: white;"
                    :alt="dist.alt"
                  />
                </a>
              </div>
            </div>
            <div class="col s12 m7 l7 album-container">
              <p>
                <span style="font-size: 3em; font-family: Lobster,cursive,Georgia;">
                  {{al.album_info.title}}
                </span>
                <br>
                <span>
                  Released {{al.album_info.release_year}} on
                  <a
                    target="_blank"
                    :href="al.album_info.label_link"
                  >{{al.album_info.record_label}}</a>
                </span>
              </p>
              <ol>
                <li
                  :key="i"
                  v-for="(song, i) in al.album_info.songs"
                  class="album-song-title"
                >
                  <a
                    v-if="song.song_url"
                    target="_blank"
                    :href="song.song_url"
                  >
                    {{song.song_title}}
                    <i class="material-icons material-icons-music">headset</i>
                  </a>
                  <div v-else>
                    {{song.song_title}}
                  </div>
                </li>
              </ol>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import scroll from "@/mixins/scroll";
export default {
  components: {
    NavBar
  },
  mixins: [scroll],
  async mounted() {
    let { data: albums } = await this.$axios.get("./media.json");
    Object.assign(this, { albums });
  },
  data() {
    return {
      albums: []
    };
  }
};
</script>

<style scoped>
  .media-page-content-container > .container {
    padding-top: 10vh;
  }
  div[class*="content-container"] .container {
    width: 100%;
    margin: auto;
  }
  .media-page-container {
    background: black;
    background-attachment: fixed;
    background-position: center 10vh;
    background-size: 100vw;
    -o-object-fit: fill;
    object-fit: fill;
    -o-object-position: center;
    object-position: center;
    color: white;
  }

  .Album-Art {
    width: 100%;
    border-radius: 15px;
  }

  .album-song-title a {
    color: white;
    font-size: 1.4rem;
  }
  .album-song-title {
    font-size: 1.4rem;
  }

  .material-icons-music {
    font-size: 1.1em;
  }
  ol {
    padding-inline-start: 40px;
  }
  .container-fluid2 {
    display: flex;
    justify-content: space-evenly;
  }
  .row {
    margin-top: 20px;
  }
  .row .col.album-container {
    padding: 0 5vw;
  }
  @media only screen and (min-width: 960px) {
    div[class*="content-container"] .container {
      width: 70%;
      margin: auto;
    }
    .media-page-container {
      background: -webkit-radial-gradient(
          center,
          ellipse,
          rgba(0, 0, 0, 0),
          rgba(0, 0, 0, 1) 70%
        ),
        url("https://s3-us-west-2.amazonaws.com/dogcompany/Cadillac_lounge.jpg")
          no-repeat fixed;
      background: radial-gradient(
          ellipse at center,
          rgba(0, 0, 0, 0),
          rgba(0, 0, 0, 1) 70%
        ),
        url("https://s3-us-west-2.amazonaws.com/dogcompany/Cadillac_lounge.jpg")
          no-repeat fixed;
      background-attachment: fixed;
      background-position: center center;
      background-size: 80vw;
      -o-object-fit: fill;
      object-fit: fill;
      -o-object-position: center;
      object-position: center;
      color: white;
    }
  }

  @media (max-width: 960px) {
    .row .col.album-container {
      display: block;
    }
  }
</style>