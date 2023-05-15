<template>
  <div>
    <h2>Dashboard</h2>
    <v-btn @click="$api.logUser()">Test</v-btn>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: "dashboard" });
</script>
