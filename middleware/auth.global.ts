export default defineNuxtRouteMiddleware((to, from) => {
  const layout = to.meta.layout;
  const { $store } = useNuxtApp();
  const isLoggedIn = $store.isLoggedIn;

  if (layout === "dashboard" && !isLoggedIn) {
    return navigateTo("/login");
  }
});
