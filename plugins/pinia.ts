import { Pinia } from "pinia";
import { useMainStore } from "~/store";

export default defineNuxtPlugin(({ $pinia, $api }) => {
  console.log($api)
  return {
    provide: {
      store: useMainStore($pinia as Pinia),
    },
  };
});
