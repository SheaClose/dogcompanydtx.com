<template>
  <div
    v-if="$store.state.showVideo"
    class="embedded-video-container"
  >
    <h2>New Video, "Raise Your Glass", Out Now! <i
        class="material-icons"
        style="float: right; cursor: pointer"
      >close</i></h2>
    <iframe
      :width="width * .8"
      :height="(width * .8) * .56"
      src="https://www.youtube.com/embed/oRigZikY8W0"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  props: ["show"],
  data() {
    let width;
    return {
      width: 0
    };
  },
  mounted() {
    this.width = this.$el.clientWidth;
    document.addEventListener("keydown", this.handlekeydown);
  },
  beforeDestroy() {
    document.removeEventListener("keydown", this.handlekeydown);
  },
  methods: {
    handlekeydown({ keyCode }) {
      if (keyCode === 27) this.$store.commit("turnOffVideo", false);
    }
  }
};
</script>



<style scoped>
h2 {
  width: 80%;
  text-align: center;
  color: white;
}
.embedded-video-container {
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.85);
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 100;
}
</style>
