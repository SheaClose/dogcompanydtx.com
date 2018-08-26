<template>
  <div>
    <div class="Home-page-container" :style="{
      backgroundSize:`${125 + (+scroll / 4)}vh`
    }">
      <div class="home-page-content-container" :style="{backgroundColor: `rgba(0,0,0,${this.location})`}">
        <div class="container">
          <div>
            <NavBar></NavBar>
          </div>
          <div class="valign-wrapper container-center" style="height: 70vh;">
            <img class="responsive-img valign" style="opacity: .8; height: 100%;" src="https://s3-us-west-2.amazonaws.com/dogcompany/DogCoLogo.png" alt="Dog Company Logo" />
          </div>
          <ul class="" :key="blog._id" v-for="blog in blogs">
            <div class="blog">
              <div class="">
                <div class="valign-wrapper row">
                  <div class="col s10 m10 l10 valign" style="font-size: 2.2em; font-family: sans-serif; text-align: center; margin:auto;">
                    {{blog.title}}
                  </div>
                  <br />
                </div>

                <br />
                <div>
                  <div class="center">
                    <img class="responsive-img image-style" style="max-width: 80%" v-if="blog.imgUrl" :src="blog.imgUrl" alt="Blog image" />
                  </div>
                </div>
                <br />
                <div style="white-space: pre-line; font-size: 1.5em; text-align: center">
                  {{blog.body}}
                </div>
                <br />
                <div class="date">
                  {{blog.date}}
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
import NavBar from '@/components/NavBar.vue'
import scroll from '@/mixins/scroll'

export default {
  components: {NavBar},
  mixins:[scroll],
  data(){
    return {
      blogs: []
    }
  },
  async mounted(){
    let {data} = await this.$axios.get("/api/blogs");
    this.blogs = data.sort((a, b) => a.date < b.date)
  }
}
</script>
