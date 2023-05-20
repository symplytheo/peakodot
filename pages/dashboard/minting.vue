<template>
  <div>
    <div class="d-flex align-center mb-6">
      <v-icon start size="x-large" color="primary" :icon="mdiRobotOutline" />
      <h3 class="font-weight-black text-primary text-h6">Minting Bot</h3>
    </div>

    <v-row class="mb-8">
      <v-col cols="12" md="7">
        <v-card class="text-center">
          <v-card-title class="text-left">Daily Mint</v-card-title>
          <div class="text-subtitle-2">
            <p>You are on <b>BASIC</b> package</p>
            <p>You will earn <b>$ 0.65</b> per mint</p>
            <p>You can only mint <b>Once</b> per day</p>
          </div>
          <v-card-text>
            <v-progress-circular :rotate="360" :size="180" :width="25" :model-value="progress" color="primary">
              <v-icon v-if="minted" :icon="mdiCheck" size="60" />
              <span v-else class="text-h6 font-weight-bold"> {{ progress }} % </span>
            </v-progress-circular>
          </v-card-text>
          <p v-if="minting" class="text-error text-subtitle-2">
            Minting in Progress! <br />
            Do not refresh or leave this page!
          </p>
          <v-card-actions class="py-6 px-6">
            <v-btn variant="flat" color="primary" block :disabled="minted || minting" size="large" @click="handleMint">
              Mint now
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="5">
        <v-card class="mb-6">
          <v-card-title>Today's Mint</v-card-title>
          <v-card-text>
            <p class="text-h5 font-weight-black mb-3">$ {{ minted ? 0.65 : 0.0 }}</p>
            <span class="caption">
              Minted: <b>{{ minted ? "Just now" : "Nil" }}</b>
            </span>
          </v-card-text>
        </v-card>
        <v-card>
          <v-card-title>Last Mint</v-card-title>
          <v-card-text>
            <p class="text-h5 font-weight-black mb-3">$ 0.65</p>
            <span class="caption">Mint Date: <b>May 13, 2023 8:05PM</b></span>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title class="subtitle-1 font-weight-bold pb-0"> Mint History </v-card-title>
          <v-card-subtitle> List of your mint results so far. Sorted from most recent to first. </v-card-subtitle>
          <v-card-text>
            <v-text-field
              v-model="search"
              :append-inner-icon="mdiMagnify"
              label="Search"
              single-line
              hide-details
              class="ml-auto"
              style="max-width: 300px"
            ></v-text-field>
          </v-card-text>
          <v-card-text>
            <v-data-table
              v-model:items-per-page="itemsPerPage"
              :headers="headers"
              :items="desserts"
              item-value="name"
            ></v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { VDataTable } from "vuetify/labs/VDataTable";
import { mdiRobotOutline, mdiMagnify, mdiCheck } from "@mdi/js";

definePageMeta({ layout: "dashboard" });

const itemsPerPage = ref(5);
const search = ref("");
const progress = ref(0);
const minted = ref(false);
const minting = ref(false);
const timer = ref();

const handleMint = () => {
  minting.value = true;
  timer.value = setInterval(() => {
    if (progress.value === 100) {
      minting.value = false;
      minted.value = true;
      clearInterval(timer.value);
    }
    progress.value += 5;
  }, 1500);
};

const headers = [
  { title: "Dessert (100g serving)", key: "name" },
  { title: "Calories", key: "calories" },
  { title: "Fat (g)", key: "fat" },
  { title: "Carbs (g)", key: "carbs" },
];

const desserts = [
  {
    name: "Frozen Yogurt",
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    iron: "1",
  },
  {
    name: "Jelly bean",
    calories: 375,
    fat: 0.0,
    carbs: 94,
    protein: 0.0,
    iron: "0",
  },
  {
    name: "KitKat",
    calories: 518,
    fat: 26.0,
    carbs: 65,
    protein: 7,
    iron: "6",
  },
  {
    name: "Eclair",
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
    iron: "7",
  },
  {
    name: "Gingerbread",
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
    iron: "16",
  },
  {
    name: "Ice cream sandwich",
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    iron: "1",
  },
  {
    name: "Lollipop",
    calories: 392,
    fat: 0.2,
    carbs: 98,
    protein: 0,
    iron: "2",
  },
  {
    name: "Cupcake",
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    iron: "8",
  },
  {
    name: "Honeycomb",
    calories: 408,
    fat: 3.2,
    carbs: 87,
    protein: 6.5,
    iron: "45",
  },
  {
    name: "Donut",
    calories: 452,
    fat: 25.0,
    carbs: 51,
    protein: 4.9,
    iron: "22",
  },
];
</script>
