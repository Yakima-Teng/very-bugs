<script setup>
import { useRoute, useRouter } from 'vue-router'
import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue'

import { menus } from './router.js'
import SiteHeader from './components/SiteHeader.vue'

const route = useRoute()
const router = useRouter()
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
      <el-aside class="root-site-sidebar">
        <el-scrollbar>
          <el-menu :default-active="route.path" unique-opened router>
            <template v-for="menu in menus" :key="menu.path">
              <el-sub-menu v-if="menu.children.length > 0" :index="menu.path">
                <template #title>
                  <el-icon>
                    <message v-if="menu.iconName === 'message'" />
                    <icon-menu v-if="menu.iconName === 'icon-menu'" />
                    <setting v-if="menu.iconName === 'setting'" />
                  </el-icon>
                  {{ menu.name }}
                </template>
                <el-menu-item v-for="subMenu in menu.children" :index="subMenu.path">{{ subMenu.name }}</el-menu-item>
              </el-sub-menu>
              <el-menu-item v-if="menu.children.length === 0" :index="menu.path">
                <template #title>
                  <el-icon>
                    <message v-if="menu.iconName === 'message'" />
                    <icon-menu v-if="menu.iconName === 'icon-menu'" />
                    <setting v-if="menu.iconName === 'setting'" />
                  </el-icon>
                  {{ menu.name }}
                </template>
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
  width: 200px;
  color: var(--el-text-color-primary);
  border-right: solid 1px #e6e6e6;
  box-sizing: border-box;
  background-color: #fff;
  .el-menu {
    border-right: none;
  }
}
.root-site-main {
  height: 100%;
  padding: 0;
}
</style>
