// https://nuxt.com/docs/api/configuration/nuxt-config

import vuetify from "vite-plugin-vuetify";

export default defineNuxtConfig({
  vite: {
    ssr: { noExternal: ["vuetify"] },
  },
  modules: [
    async (options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) =>
        // @ts-ignore
        config.plugins.push(vuetify())
      );
    },
  ],
  app: {
    head: {
      title: "Peakodot",
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "anonymous" },
        {
          href: "https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;500;700;900&display=swap",
          rel: "stylesheet",
        },
      ],
    },
  },
});
