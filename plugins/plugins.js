import Vue from "vue";
import moment from "moment";
Vue.filter("formatDate", function(value) {
  if (value) {
    return moment(String(value)).format("MM/DD/YYYY hh:mm");
  }
});

Vue.filter("shortDate", function(value) {
  if (value) {
    return moment(String(value)).format("ddd MM/DD");
  }
});
Vue.filter("yearDate", function(value) {
  if (value) {
    return moment(String(value)).format("YYYY");
  }
});
