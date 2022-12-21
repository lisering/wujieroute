<template>
  <RouterView />
</template>

<script setup lang="ts">
import { onMounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

watch(
  () => route,
  (val) => {
    window.$wujie?.bus.$emit("sub-route-change", "mdm", route.path);
  }
);

onMounted(() => {
  window.$wujie?.bus.$on("mdm-router-change", (path: string) => {
    return router.push(path);
  });
});
</script>
