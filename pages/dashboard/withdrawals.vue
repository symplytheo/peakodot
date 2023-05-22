<template>
  <div>
    <div class="d-flex align-center mb-6">
      <v-icon start size="x-large" color="primary" :icon="mdiCashMultiple" />
      <h3 class="font-weight-black text-primary text-h6">Withdrawals</h3>
    </div>

    <v-card flat height="50vh">
      <v-row class="fill-height text-center" justify="center" align="center">
        <h3 class="text-h4 font-weight-black">Coming Soon</h3>
      </v-row>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { mdiCashMultiple } from "@mdi/js";

definePageMeta({ layout: "dashboard" });
</script>
