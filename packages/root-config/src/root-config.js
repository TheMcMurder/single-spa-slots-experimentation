import { registerApplication, start } from "single-spa";

registerApplication(
  "primary-nav",
  () => System.import("primary-nav"),
  () => true
);

start();