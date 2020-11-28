<template>
  <div>
    <div class="">
      <div id="nav_bar" class="nav-bar">
        <nuxt-link to="/">Home</nuxt-link>
        <div class="card transparent">
          <a class="pointer">/</a>
        </div>
        <nuxt-link to="/store">Store</nuxt-link>
        <div class="card transparent">
          <a class="pointer">/</a>
        </div>
        <nuxt-link to="/about">About</nuxt-link>
        <div class="card transparent">
          <a class="pointer">/</a>
        </div>
        <nuxt-link to="/media">Media</nuxt-link>
      </div>
    </div>
    <v-alert
      type="info"
      class="alert"
      transition="scale-transition"
      :value="alert"
      :color="$store.state.alertColor"
    >
      {{ $store.state.alertMsg }}
    </v-alert>
  </div>
</template>

<script>
export default {
  computed: {
    alert() {
      return !!this.$store.state.alert;
    }
  }
};
</script>

<style scoped>
.success {
  background: rgba(82, 106, 83, 0.95);
}
.alert {
  z-index: 100;
  color: black;
  position: fixed;
  bottom: 0;
  right: 50vw;
  width: 25vw;
  transform: translate(50%);
  text-align: center;
  background: rgba(82, 106, 83, 0.95);
}
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
  align-items: center;
  font-family: "Black Ops One", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 2em;
  margin: 1vh 0vh 5vh;
  width: 85vw;
  position: absolute;
  margin: auto;
  left: 50%;
  transform: translate(-50%);
  z-index: 1;
  height: 10vh;
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

@viewport {
  width: device-width;
}
@media (max-width: 960px) {
  .alert {
    width: 50vw;
  }
  .fixed-action-btn {
    font-size: 2em;
  }
  .nav-bar {
    font-size: 14px;
  }
}
</style>
