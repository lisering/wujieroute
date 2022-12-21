<template>
  <component :is="layout" />
</template>

<script lang="ts" setup>
import { shallowRef, ref } from "vue";

import Layout1 from "./Layout1.vue";
import Layout2 from "./Layout2.vue";

// 布局列表
const layoutList = {
  layout1: Layout1,
  layout2: Layout2,
};

const whichLayout = ref("layout1");

const layout = shallowRef(layoutList[whichLayout.value]); // 使用不同的布局
</script>
