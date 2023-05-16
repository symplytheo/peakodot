<template>
  <div>
    <h3 class="font-weight-black text-primary text-h6 mb-6">
      <v-icon color="primary" :icon="mdiRobotOutline" />
      Minting Bot
    </h3>
  </div>
</template>

<script setup lang="ts">
import { mdiRobotOutline } from "@mdi/js";

definePageMeta({ layout: "dashboard" });
</script>
