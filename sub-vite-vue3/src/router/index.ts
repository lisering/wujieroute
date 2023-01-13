import { createRouter, createWebHashHistory } from "vue-router";

import Home from "@/views/Home/index.vue";
// console.log('路由')

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/system",
    name: "system",
    component: () => import("@/views/System/index.vue"),
  },
  {
    path: "/cms",
    name: "cms",
    component: () => import("@/views/Cms/index.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/About/index.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(""),
  routes,
});

export default router;
