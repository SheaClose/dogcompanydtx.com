import angular from "angular";
import uiRouter from "angular-ui-router";
import "normalize.css";
import "./app.scss";
import routes from "./routes";
import navBarModule from "./components/navBar/navBarModule";

angular
  .module("app", ["ui.router"])
  .config(routes)
  .component("navBar", navBarModule);
