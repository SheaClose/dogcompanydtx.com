export default {
  data() {
    return {
      location: 0,
      scroll: 0
    };
  },
  methods: {
    handleEvent(e) {
      let body = document.body,
        html = document.documentElement,
        docHeight = Math.max(
          body.scrollHeight,
          body.offsetHeight,
          html.clientHeight,
          html.scrollHeight,
          html.offsetHeight
        ),
        scroll = window.scrollY,
        windowHeight = window.innerHeight,
        fullHeight = docHeight - windowHeight,
        percent = Math.ceil((scroll * 100) / fullHeight) / 100,
        maxPercent = percent < 0.85 ? percent : 0.85;
      this.location = maxPercent;
      this.scroll = scroll;
    }
  },
  async mounted() {
    window.addEventListener("scroll", this.handleEvent);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleEvent);
  }
};
