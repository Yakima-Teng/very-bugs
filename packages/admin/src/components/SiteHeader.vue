<script setup>
import { Setting } from '@element-plus/icons-vue'

import imgLogo from '../assets/logo.png'
import { useSiteStore } from '../stores/useSiteStore.js'

const site = useSiteStore()
</script>

<template>
  <div class="site-header">
    <a class="site-title-wrapper" href="/">
      <img :src="imgLogo" alt="" :class="['site-logo', { rotate: !site.showSidebar }]" @click.stop.prevent="site.toggleSidebar">
      <h1 class="site-title">{{ site.title }}-{{ site.desc }}</h1>
    </a>
    <div class="site-header-toolbar">
      <el-dropdown>
        <el-icon style="margin-right: 8px; margin-top: 1px"><setting /></el-icon>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>View</el-dropdown-item>
            <el-dropdown-item>Add</el-dropdown-item>
            <el-dropdown-item>Delete</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <span>Tom</span>
    </div>
  </div>
</template>

<style lang="less" scoped>
.site-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  background-color: #b3c0d1;
  padding: 0 20px 0 10px;
}
.site-title-wrapper {
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  text-decoration: none;
  .site-logo {
    width: 50px;
    height: auto;
    border-radius: 50%;
    transform: rotateZ(0deg);
    transition: 300ms all linear;
    &.rotate {
      transform: rotateZ(-90deg);
    }
  }
  .site-title {
    font-size: 28px;
    color: #1a1a1a;
    margin: 0 0 0 6px;
  }
}
.toolbar {
  position: absolute;
  display: inline-flex;
  align-items: center;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
}
</style>
