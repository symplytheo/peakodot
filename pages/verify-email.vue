<template>
  <v-card class="py-2 px-4">
    <v-card-title class="font-weight-black text-center pb-0">Verify your account</v-card-title>
    <v-card-subtitle class="text-center">Enter token to verify your email</v-card-subtitle>
    <v-card-text>
      <v-form @submit.prevent>
        <v-row dense>
          <v-col cols="12">
            <v-text-field v-model="token" color="primary" label="Email address" />
          </v-col>
          <v-col cols="12">
            <v-btn size="large" block flat color="primary" class="my-3">Verify</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
definePageMeta({ layout: "auth" });

const token = ref("");
</script>
