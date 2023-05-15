<template>
  <v-card class="py-2 px-4">
    <v-card-title class="font-weight-black text-center pb-0">Reset Password</v-card-title>
    <v-card-subtitle class="text-center">Enter a new password and confirm to continue</v-card-subtitle>
    <v-card-text>
      <v-form @submit.prevent="handleSubmit">
        <v-row dense>
          <v-col cols="12">
            <v-text-field v-model="form.newPassword" color="primary" type="password" label="New Password" />
          </v-col>
          <v-col cols="12">
            <v-text-field v-model="form.confirmPassword" color="primary" type="password" label="Confirm Password" />
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
const form = ref({ newPassword: "", confirmPassword: "" });

const handleSubmit = () => {
  alert("Password reset successful");
  navigateTo("/login");
};
</script>
