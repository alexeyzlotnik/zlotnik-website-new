import { defineStore } from 'pinia'

export const useDarkMode = defineStore('darkMode', {
  state: () => {
    return { isDarkMode: true }
  },
  actions: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode
      document.documentElement.setAttribute('data-theme', this.isDarkMode ? 'dark' : 'light');
    },
  },
});
