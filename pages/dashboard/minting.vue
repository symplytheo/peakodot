<template>
  <div>
    <h3 class="font-weight-black text-primary text-h6 mb-6">
      <v-icon color="primary" :icon="mdiRobotOutline" />
      Minting Bot
    </h3>

    <v-card flat height="50vh">
      <v-row class="fill-height text-center" justify="center" align="center">
        <h3 class="text-h4 font-weight-black">Coming Soon</h3>
      </v-row>
    </v-card>

    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-card-title class="subtitle-1 font-weight-bold pb-0"> Mint History </v-card-title>
            <v-card-subtitle> List of your mint results so far. Sorted from most recent to first. </v-card-subtitle>
            <v-card-text>
              <v-text-field
                v-model="search"
                :append-icon="mdiMagnify"
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
                class="elevation-1"
              ></v-data-table>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { mdiRobotOutline, mdiMagnify } from "@mdi/js";

definePageMeta({ layout: "dashboard" });

const itemsPerPage = ref(5);
const search = ref('');

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
