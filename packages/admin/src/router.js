import { createRouter, createWebHistory } from 'vue-router'

import BugList from './pages/Bugs/BugList/BugList.vue'

export const router = createRouter({
    history: createWebHistory(),
    strict: true,
    routes: [
        { path: '/bugs', component: BugList }
    ],
})
