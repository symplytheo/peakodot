<template>
  <div>
    <h3 class="font-weight-black text-primary text-h6 mb-6">
      <v-icon color="primary" :icon="mdiViewDashboardOutline" />
      Overview
    </h3>
 
    <v-btn color="orange-darken-2" @click="$api.logUser()"> Open Snackbar </v-btn>

    <v-btn color="primary" @click="$store.increment()" class="mx-4"> + </v-btn>
    <v-btn color="black" @click="$store.increaseBy(5)"> + 5 </v-btn>

    <p class="pa-8 text-h5">Counter: {{ $store.counter }}</p>

    <p>Toast: {{ $toast.variant }}</p>

    <v-snackbar v-model="snackbar" :color="$toast.variant === 'loading' ? 'black' : $toast.variant" variant="tonal">
      <div class="d-flex align-center">
        <v-progress-circular v-if="$toast.variant === 'loading'" indeterminate size="24" class="mr-2" />
        <v-icon v-else :icon="mdiCheckCircle" class="mr-2" />
        User authentication successful
      </div>
      <template v-slot:actions>
        <v-btn :icon="mdiClose" @click="snackbar = false" size="small" />
      </template>
    </v-snackbar>
  </div>
</template>

<script setup lang="ts">
import { mdiCheckCircle, mdiClose, mdiViewDashboardOutline } from "@mdi/js";

definePageMeta({ layout: "dashboard" });

const { $toast } = useNuxtApp();

const snackbar = ref(false);

const handleShow = () => {
  $toast.success("Hello");
};
</script>
