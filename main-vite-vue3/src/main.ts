import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";
import router from "@/router";

import WujieVue from "wujie-vue3";
const { setupApp } = WujieVue;
const app = createApp(App).use(WujieVue).use(router).use(ElementPlus);

setupApp({
  name: "mdm",
  url: "//localhost:1001/",
  exec: true,
  alive: true,
});

app.mount("#app");
