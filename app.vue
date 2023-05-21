<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const { $api, $store } = useNuxtApp();
// onMounted(async () => {
//   const authtoken = localStorage.getItem("authtoken");
//   if (authtoken) {
//     await $api.setToken(authtoken);
//     const data = await $api.getProfile();
//     $store.setUser(data);
//   } else {
//     console.log({ token: "No tokem" });
//   }
// });
</script>
