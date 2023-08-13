import { defineStore } from 'pinia'

export const useDarkMode = defineStore('darkMode', {
  state: () => {
    return { isDarkMode: false }
  },
  actions: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode
    },
  },
});
