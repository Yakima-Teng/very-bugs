import { defineStore } from 'pinia'

export const useSiteStore = defineStore('site', {
    state: () => {
        return {
            title: 'VeryBugs',
            desc: '在线bug监控和上报系统',
        }
    },
    actions: {
        updateSite({ title, desc }) {
            this.title = title
            this.desc = desc
        },
    },
})
