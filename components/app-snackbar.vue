<template>
  <v-snackbar
    v-model="$toast.show"
    :color="$toast.variant === 'loading' ? 'black' : $toast.variant"
    variant="tonal"
    class="mb-6"
    location="bottom right"
  >
    <div class="d-flex align-center">
      <v-progress-circular v-if="$toast.variant === 'loading'" indeterminate size="24" class="mr-2" />
      <v-icon
        v-else
        :icon="
          $toast.variant === 'success' ? mdiCheckCircle : $toast.variant === 'error' ? mdiCloseCircle : mdiAlertCircle
        "
        class="mr-2"
      />
      {{ $toast.text }}
    </div>
    <template v-slot:actions>
      <v-btn :icon="mdiClose" @click="$toast.close()" size="small" />
    </template>
  </v-snackbar>
</template>

<script setup lang="ts">
import { mdiCheckCircle, mdiCloseCircle, mdiAlertCircle, mdiClose } from "@mdi/js";
</script>
