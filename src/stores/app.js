import { defineStore } from 'pinia'

export const useApp = defineStore('app', {
  state: () => ({
    isHelpVisible: false,
  }),
  actions: {
    toggleHelp() {
      this.isHelpVisible = !this.isHelpVisible
    }
  }
})
