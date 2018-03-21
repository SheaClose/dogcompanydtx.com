export default function apparelDir() {
  return {
    templateUrl: "./views/apparelTmpl.html",
    scope: {
      add: "&",
      product: "=",
      sizes: "="
    }
  };
}
