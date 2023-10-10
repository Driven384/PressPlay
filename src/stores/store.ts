import { defineStore } from 'pinia';

export const useHeaderStore = defineStore('header', {
  state: () => ({
    title: '',
  }),
  actions: {
    setTitle(newTitle: string) {
      this.title = newTitle;
    },
  },
});
