import { createRouter, createWebHashHistory } from 'vue-router'

import BugList from './pages/Bugs/BugList/BugList.vue'
import CenterCompany from './pages/Center/Company/Company.vue'
import CenterUser from './pages/Center/User/User.vue'

const routes = [
    { path: '/bugs', name: '脚本报错', iconName: 'message', component: BugList },
    { path: '/projects', name: '项目列表', iconName: 'icon-menu', component: BugList },
    { path: '/companies', name: '公司列表', iconName: 'icon-menu', component: BugList },
    { path: '/users', name: '用户列表', iconName: 'setting', component: BugList },
    {
        path: '/center',
        name: '个人中心',
        iconName: 'setting',
        children: [
            {
                path: '/center/user',
                name: '我的信息',
                component: CenterUser,
            },
            {
                path: '/center/company',
                name: '公司信息',
                component: CenterCompany,
            },
        ],
    },
]

const menusMapCallback = (item) => ({
    name: item.name,
    path: item.path,
    iconName: item.iconName,
    children: (item.children || []).map(menusMapCallback)
})
export const menus = routes.map(menusMapCallback)

export const router = createRouter({
    history: createWebHashHistory(),
    strict: true,
    routes: routes.map((item) => ({
        path: item.path,
        component: item.component,
    })),
})
