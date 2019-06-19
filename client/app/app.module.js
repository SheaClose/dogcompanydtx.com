import angular from "angular";
import uiRouter from "angular-ui-router";
import "bootstrap-css-only";
import "normalize.css";
import "./app.component.scss";
import routes from "./components/routes";

angular.module("app", ["ui.router"]).config(routes);
