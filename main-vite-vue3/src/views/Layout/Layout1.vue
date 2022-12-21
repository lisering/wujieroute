<template>
  <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="300px">
          <div>
            <router-link to="/mdm">子应用 sub-vite-vue3</router-link>
          </div>
          <div>
            <router-link to="/mdm-sub/home"
              >子应用 sub-vite-vue3 home page</router-link
            >
          </div>
          <div>
            <router-link to="/mdm-sub/system"
              >子应用 sub-vite-vue3 system</router-link
            >
          </div>
          <div>
            <router-link to="/mdm-sub/cms"
              >子应用 sub-vite-vue3 cms</router-link
            >
          </div>
          <div>
            <router-link to="/mdm-sub/about"
              >子应用 sub-vite-vue3 about</router-link
            >
          </div>
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.common-layout {
  height: 100%;
}
</style>
