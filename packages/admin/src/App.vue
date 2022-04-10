<script setup>
import { useRoute, useRouter } from 'vue-router'
import { Menu as IconMenu } from '@element-plus/icons-vue'

import { menus } from './router.js'
import SiteHeader from './components/SiteHeader.vue'
import { useSiteStore } from './stores/useSiteStore.js'

const route = useRoute()
const router = useRouter()
const site = useSiteStore()
const activePath = route.path
if (activePath === '/') {
  router.replace({
    path: menus[0].path,
    query: {},
  })
}
</script>

<template>
  <el-container>
    <el-header class="root-site-header">
      <SiteHeader />
    </el-header>
    <el-container class="root-site-container">
      <el-aside :class="['root-site-sidebar', { 'hide-sidebar': !site.showSidebar }]">
        <el-scrollbar>
          <el-menu
              :default-active="activePath"
              :collapse="!site.showSidebar"
              :collapse-transition="false"
              unique-opened
              router
          >
            <template v-for="menu in menus" :key="menu.path">
              <el-sub-menu v-if="menu.children.length > 0" :index="menu.path">
                <template #title>
                  <el-icon><icon-menu /></el-icon>
                  <span>{{ menu.name }}</span>
                </template>
                <el-menu-item v-for="subMenu in menu.children" :index="subMenu.path">{{ subMenu.name }}</el-menu-item>
              </el-sub-menu>
              <el-menu-item v-if="menu.children.length === 0" :index="menu.path">
                <el-icon><icon-menu /></el-icon>
                <template #title>{{ menu.name }}</template>
              </el-menu-item>
            </template>
          </el-menu>
        </el-scrollbar>
      </el-aside>
      <el-main class="root-site-main">
        <el-scrollbar>
          <router-view></router-view>
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>

<style lang="less" scoped>
.root-site-header {
  padding: 0;
  height: 60px;
}
.root-site-container {
  height: calc(100vh - 60px);
}
.root-site-sidebar {
  height: 100%;
  width: 150px;
  color: var(--el-text-color-primary);
  border-right: solid 1px #e6e6e6;
  box-sizing: border-box;
  background-color: #fff;
  &.hide-sidebar {
    width: auto;
  }
  .el-menu {
    border-right: none;
  }
}
.root-site-main {
  height: 100%;
  padding: 0;
}
</style>
