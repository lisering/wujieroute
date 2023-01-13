import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";
import router from "@/router";

import WujieVue from "wujie-vue3";
const { setupApp, bus } = WujieVue;
const app = createApp(App).use(WujieVue).use(router).use(ElementPlus);

// 在 xxx-sub 路由下子应用将激活路由同步给主应用，主应用跳转对应路由高亮菜单栏
bus.$on("sub-route-change", (name: string, path: string) => {
  const mainName = `${name}-sub`;
  const mainPath = `/${name}-sub${path}`;
  const currentName = router.currentRoute.value.name;
  const currentPath = router.currentRoute.value.path;
  if (mainName === currentName && mainPath !== currentPath) {
    router.push({ path: mainPath });
  }
});

setupApp({
  name: "mdm",
  url: "//localhost:1001/",
  exec: true,
  degrade: !window.Proxy,
  alive: true,
});

app.mount("#app");
