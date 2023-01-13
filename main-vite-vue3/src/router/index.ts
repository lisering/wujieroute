import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/AppCenter/index.vue";
import BaseLayout from "@/views/Layout/BaseLayout.vue";
// console.log('路由')

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/apm",
    component: BaseLayout,
    children: [
      {
        path: "/mdm",
        name: "mdm",
        component: () => import("@/views/MicroApp/Mdm.vue"),
      },
      {
        path: "/mdm-sub/:path*",
        name: "mdm-sub",
        component: () => import("@/views/MicroApp/MdmSub.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
