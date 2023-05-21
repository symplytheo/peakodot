import { defineStore } from "pinia";

export const useToastStore = defineStore("toast", {
  state: () => ({
    show: false,
    variant: "loading",
    text: "Processing...",
    timeout: 7000,
  }),
  actions: {
    success(text: string) {
      this.variant = "success";
      this.text = text || "Success";
      this.show = true;
    },
    error(text: string) {
      this.variant = "error";
      this.text = text || "Error";
      this.show = true;
    },
    warn(text: string) {
      this.variant = "warning";
      this.text = text || "Warning";
      this.show = true;
    },
    load(text: string) {
      this.variant = "loading";
      this.text = text || "Processing";
      this.show = true;
    },
    close() {
      this.show = false;
    },
  },
});
