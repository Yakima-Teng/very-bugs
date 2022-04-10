import { defineStore } from 'pinia'

export const useSiteStore = defineStore('site', {
    state: () => {
        return {
            title: 'VeryBugs',
            desc: '在线bug监控和上报系统',
            showSidebar: true,
        }
    },
    actions: {
        updateSite(payload) {
            Object.entries(payload).forEach(([key, value]) => {
                this[key] = value
            })
        },
        toggleSidebar() {
            this.showSidebar = !this.showSidebar
        },
    },
})
