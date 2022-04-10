<script setup>
import { useRoute, useRouter } from 'vue-router'
import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue'

import { menus } from './router.js'
import SiteHeader from './components/SiteHeader.vue'

const route = useRoute()
const router = useRouter()
const activePath = route.path
console.log(activePath)
if (activePath === '/') {
  router.replace({
    path: menus[0].path,
    query: {},
  })
}
</script>

<template>
  <el-container class="layout-container-demo">
    <el-header>
      <SiteHeader />
    </el-header>
    <el-container>
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
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
      <el-main>
        <el-scrollbar>
          <router-view></router-view>
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
.layout-container-demo .el-header {
  padding: 0;
}
.layout-container-demo .el-aside {
  width: 240px;
  color: var(--el-text-color-primary);
  background: #fff !important;
  border-right: solid 1px #e6e6e6;
  box-sizing: border-box;
}
.layout-container-demo .el-menu {
  border-right: none;
}
.layout-container-demo .el-main {
  padding: 0;
}
</style>
