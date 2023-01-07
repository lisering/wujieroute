<script setup lang="ts">
import WujieVue from "wujie-vue3";
const { setupApp } = WujieVue;
setupApp({
  name: "mdm",
  url: "//localhost:1001/",
  exec: true,
  alive: true,
});
</script>

<template>
  <RouterView />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
