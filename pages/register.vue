<template>
  <v-card class="py-2 px-4">
    <v-card-title class="font-weight-black text-center">Create Account</v-card-title>
    <!-- <v-card-subtitle class="text-center">Login to continue</v-card-subtitle> -->
    <v-card-text class="px-0 px-md-3">
      <v-form @submit.prevent="handleSubmit">
        <v-row dense>
          <v-col cols="12">
            <v-text-field v-model="form.name" color="primary" label="Full name" />
          </v-col>
          <v-col cols="12">
            <v-text-field v-model="form.username" color="primary" label="Username" />
          </v-col>
          <v-col cols="6">
            <v-text-field v-model="form.coupon" color="primary" label="Coupon code" />
          </v-col>
          <v-col cols="6">
            <v-text-field v-model="form.referral" color="primary" label="Referral ID" />
          </v-col>
          <v-col cols="12">
            <v-text-field v-model="form.email" type="email" color="primary" label="Email address" />
          </v-col>
          <v-col cols="12">
            <v-text-field v-model="form.password" color="primary" type="password" label="Password" />
          </v-col>
          <v-col cols="12">
            <v-btn size="large" type="submit" block :loading="loading" flat color="primary" class="mb-3">Sign up</v-btn>
            <p>Already have an account yet? <nuxt-link class="text-primary" to="/login">Sign in</nuxt-link></p>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script setup>
definePageMeta({ layout: "auth" });

const { $api } = useNuxtApp();

const form = ref({ email: "", password: "", name: "", coupon: "", referral: "" });
const loading = ref(false);

const handleSubmit = async () => {
  try {
    loading.value = true;
    await $api.register(form.value);
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};
</script>
