<template>
  <div>
    <router-link to="/mdm">子应用 sub-vite-vue3 首页</router-link>
  </div>
  <div>
    <router-link to="/mdm-sub/home">子应用 sub-vite-vue3 home page</router-link>
  </div>
  <div>
    <router-link to="/mdm-sub/system">子应用 sub-vite-vue3 system</router-link>
  </div>
  <div>
    <router-link to="/mdm-sub/cms">子应用 sub-vite-vue3 cms</router-link>
  </div>
  <div>
    <router-link to="/mdm-sub/about">子应用 sub-vite-vue3 about</router-link>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
div {
  margin: 20px 0;
}
</style>
