import { Pinia } from "pinia";
import { useToastStore } from "~/store/toast";

export default defineNuxtPlugin(({ $pinia }) => {
  return {
    provide: {
      toast: useToastStore($pinia as Pinia),
    },
  };
});
