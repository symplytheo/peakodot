import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => ({
    counter: 0,
    user: { firstname: "", lastname: "", package: "", balance: { USD: 0, USDC: 0 } },
    isLoggedIn: false,
  }),
  actions: {
    increment() {
      this.counter++;
    },
    increaseBy(payload: number) {
      this.counter += payload;
    },
    setUser(payload: any) {
      this.user = payload;
      this.isLoggedIn = !!Object.entries(payload).length;
    },
  },
});
