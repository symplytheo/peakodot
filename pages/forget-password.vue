<template>
  <v-card class="py-2 px-4">
    <v-card-title class="font-weight-black text-center pb-0">Forgot Password?</v-card-title>
    <p class="text-center text-body-2 text-medium-emphasis">
      Don't fret. Enter the email address associated with your account to receive a reset token.
    </p>
    <v-card-text>
      <v-form @submit.prevent="handleSubmit">
        <v-row dense>
          <v-col cols="12">
            <v-text-field v-model="email" type="email" color="primary" label="Email address" />
          </v-col>
          <v-col cols="12">
            <v-btn size="large" type="submit" block flat color="primary">Submit</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
definePageMeta({ layout: "auth" });

const email = ref("");

const handleSubmit = () => {
  alert("Reset token sent, check your email");
  navigateTo("/reset-password");
};
</script>
