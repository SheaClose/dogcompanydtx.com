<template>
  <div>
    <NavBar></NavBar>
    <div
      class="Home-page-container"
      :style="{
      backgroundSize:`${125 + (+scroll / 4)}vh`
    }"
    >
      <div
        class="home-page-content-container"
        :style="{backgroundColor: `rgba(0,0,0,${this.location})`}"
      >
        <div class="container">
          <div
            class="valign-wrapper container-center"
            style="height: 70vh;"
          >
            <img
              class="responsive-img valign"
              style="opacity: .8; height: 100%;"
              src="https://s3-us-west-2.amazonaws.com/dogcompany/DogCoLogo.png"
              alt="Dog Company Logo"
            />
          </div>
          <ul
            class=""
            :key="blog._id"
            v-for="blog in blogs"
          >
            <div class="blog">
              <div class="">
                <div class="valign-wrapper row">
                  <div
                    class="col s10 m10 l10 valign"
                    style="font-size: 2.2em; font-family: sans-serif; text-align: center; margin:auto;"
                  >
                    {{blog.title}}
                  </div>
                  <br />
                </div>

                <br />
                <div>
                  <div class="center">
                    <img
                      class="responsive-img image-style"
                      style="max-width: 80%"
                      v-if="blog.imgUrl"
                      :src="blog.imgUrl"
                      alt="Blog image"
                    />
                  </div>
                </div>
                <br />
                <div style="white-space: pre-line; font-size: 1.5em; text-align: center">
                  <span v-html="blog.body"></span>
                </div>
                <br />
                <div class="date">
                  {{blog.date | formatDate}}
                </div>
                <hr />
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import scroll from "@/mixins/scroll";

export default {
  components: { NavBar },
  mixins: [scroll],
  data() {
    return {
      blogs: []
    };
  },
  async mounted() {
    let { data } = await this.$axios.get("/api/blogs");
    this.blogs = data.sort((a, b) =>
      new Date(a.date).getTime() < new Date(b.date).getTime() ? 1 : -1
    );
    document.addEventListener("click", this.handleClick);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.handleClick);
  }
};
</script>

<style>
.Home-page-container {
  background: black;
  background-attachment: fixed;
  background-position: center center;
  background-size: 125vh;
  color: white;
}
.home-page-content-container > .container {
  padding-top: 10vh;
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
  div[class*="content-container"] .container {
    width: 70%;
    margin: auto;
  }
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
img.responsive-img,
video.responsive-video {
  max-width: none;
}
</style>
