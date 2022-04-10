import { createRouter, createWebHistory } from 'vue-router'

import BugList from './pages/Bugs/BugList/BugList.vue'

const routes = [
    { path: '/bugs', name: '脚本报错', iconName: 'message', component: BugList },
    { path: '/projects', name: '项目列表', iconName: 'icon-menu', component: BugList },
    { path: '/companies', name: '公司列表', iconName: 'icon-menu', component: BugList },
    { path: '/users', name: '用户列表', iconName: 'setting', component: BugList },
]

export const menus = routes.map((item) => ({
    name: item.name,
    path: item.path,
    iconName: item.iconName,
}))

export const router = createRouter({
    history: createWebHistory(),
    strict: true,
    routes: routes.map((item) => ({
        path: item.path,
        component: item.component,
    })),
})
