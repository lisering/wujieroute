<template>
  <div class="flex flex-col justify-between h-screen">
    <header>menu</header>
    <div class="flex flex-1 overflow-hidden bg-white">
      <div class="flex flex-col" style="min-width: 96px">header</div>
      <div class="flex-1 animation">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.animation {
  // background: url(../../assets/images/bg_grey.gif) no-repeat center center #d8dadf;
  background: #d8dadf;
}
</style>
