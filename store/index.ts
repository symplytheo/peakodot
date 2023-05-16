import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => ({
    counter: 0,
    snackbar: { show: false, variant: "loading", text: "Processing..." },
  }),
  actions: {
    increment() {
      this.counter++;
    },
    increaseBy(payload: number) {
      this.counter += payload;
    },
    
    closeSnackbar() {
      this.snackbar.show = false;
    },
  },
});
