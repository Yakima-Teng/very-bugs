<script setup>
import { useRoute, useRouter } from 'vue-router'
import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue'

import { menus } from './router.js'

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
  <el-container
      class="layout-container-demo"
      style="height: 100vh; border: 1px solid #eee"
  >
    <el-header style="text-align: right; font-size: 12px">
      <div class="toolbar">
        <el-dropdown>
          <el-icon style="margin-right: 8px; margin-top: 1px"
          ><setting
          /></el-icon>
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
    </el-header>
    <el-container>
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-scrollbar>
          <el-menu :default-active="route.path" unique-opened router>
            <el-menu-item v-for="menu in menus" :index="menu.path" :key="menu.path">
              <template #title>
                <el-icon>
                  <message v-if="menu.iconName === 'message'" />
                  <icon-menu v-if="menu.iconName === 'icon-menu'" />
                  <setting v-if="menu.iconName === 'setting'" />
                </el-icon>
                {{ menu.name }}
              </template>
            </el-menu-item>
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
  position: relative;
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
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
.layout-container-demo .toolbar {
  position: absolute;
  display: inline-flex;
  align-items: center;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
}
</style>
