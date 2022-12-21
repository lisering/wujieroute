<template>
  <!--单例模式，name相同则复用一个无界实例，改变url则子应用重新渲染实例到对应路由 -->
  <WujieVue
    width="100%"
    height="100%"
    name="sde"
    :url="url"
    :sync="true"
  ></WujieVue>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { globalGateway } from "@/utils/gateway";

const url = ref(globalGateway["sde"].split("||")[1]);
</script>
