<template>
  <!--单例模式，name相同则复用一个无界实例，改变url则子应用重新渲染实例到对应路由 -->
  <WujieVue
    width="100%"
    height="100%"
    name="mdm"
    :url="url"
    :sync="true"
  ></WujieVue>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import wujieVue from "wujie-vue3";

const route = useRoute();

const url = ref("//localhost:1001/" + `${route.params.path}`);

watch(
  () => route.params.path,
  (val) => {
    wujieVue.bus.$emit("mdm-router-change", `/${route.params.path}`);
  }
);
</script>
