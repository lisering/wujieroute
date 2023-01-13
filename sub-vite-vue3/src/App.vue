<template>
  <RouterView />
</template>

<script setup lang="ts">
import { onMounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

// watch: {
//     // 在 vue3-sub 路由下主动告知主应用路由跳转，主应用也跳到相应路由高亮菜单栏
//     $route() {
//       window.$wujie?.bus.$emit("sub-route-change", "vue3", this.$route.path);
//     }
//   }

watch(
  () => route.path,
  (val) => {
    window.$wujie?.bus.$emit("sub-route-change", "mdm", val);
  }
);

onMounted(() => {
  window.$wujie?.bus.$on("mdm-router-change", (path: string) => {
    return router.push(path);
  });
});
</script>
