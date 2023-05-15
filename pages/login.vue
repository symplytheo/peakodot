<template>
  <v-card class="py-2 px-4">
    <v-card-title class="font-weight-black text-center pb-0">Welcome back</v-card-title>
    <v-card-subtitle class="text-center">Login to continue</v-card-subtitle>
    <v-card-text>
      <v-form @submit.prevent="handleSubmit">
        <v-row dense>
          <v-col cols="12">
            <v-text-field v-model="form.email" type="email" color="primary" label="Email address" />
          </v-col>
          <v-col cols="12">
            <v-text-field v-model="form.password" color="primary" type="password" label="Password" />
          </v-col>
          <v-col cols="12">
            <p class="text-right">
              <nuxt-link class="text-primary" to="/forget-password">Forgot Password?</nuxt-link>
            </p>
            <v-btn size="large" block flat :loading="loading" type="submit" color="primary" class="my-3">Sign in</v-btn>
            <p>Don't have an account yet? <nuxt-link class="text-primary" to="/register">Create Account</nuxt-link></p>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script setup>
definePageMeta({ layout: "auth" });
const { $api } = useNuxtApp();

const form = ref({ email: "", password: "" });
const loading = ref(false);

const handleSubmit = async () => {
  try {
    loading.value = true;
    await $api.login(form.value);
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};
</script>
