export default defineNuxtPlugin(async (nuxtApp) => {
  const authtoken = localStorage.getItem("authtoken");
  const { $api, $store } = useNuxtApp();
  if (authtoken) {
    $api.setToken(authtoken);
    const user = await $api.getProfile();
    $store.setUser(user);
  }
});
