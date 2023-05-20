<template>
  <div>
    <h3 class="font-weight-black text-primary text-h6 mb-6">
      <v-icon color="primary" :icon="mdiViewDashboardOutline" />
      Overview
    </h3>

    <v-row align="end">
      <v-col cols="12">
        <h4 class="text-h5">Good evening, <b>John Brown</b></h4>
        <p class="text-medium-emphasis">What would you like to do?</p>
      </v-col>
      <v-col cols="12" md="4">
        <v-card>
          <v-card-title>Total Earnings</v-card-title>
          <v-card-text>
            <p class="text-h5 font-weight-black mt-2 mb-4">$ 4,069.56</p>
            <div class="d-flex justify-space-between align-end">
              <v-chip color="success" label text-color="white"> <v-icon start :icon="mdiFinance" /> 25% </v-chip>
              <span class="caption">Updated: <b>2 days ago</b></span>
            </div>
          </v-card-text>
          <v-card-actions class="justify-end pt-0">
            <v-btn color="primary" variant="flat">Withdraw</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col v-for="stat in stats" :key="stat.title" cols="12" md="4">
        <v-card>
          <v-card-title>{{ stat.title }}</v-card-title>
          <v-card-text>
            <p class="text-h5 font-weight-black mb-3">{{  stat.value }}</p>
            <span class="caption">Updated: <b>{{ stat.updated }}</b></span>
          </v-card-text>
          <v-card-actions class="justify-end pt-0">
            <v-btn color="primary" variant="tonal" v-on:click="stat.action">{{ stat.actionText }}</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { mdiFinance, mdiViewDashboardOutline } from "@mdi/js";

definePageMeta({ layout: "dashboard" });

const stats = [
  { title: "Minting", value: "40 tokens", updated: "4 hours ago", action: () => {}, actionText: "Mint now" },
  { title: "Referrals", value: "50 persons", updated: "yesterday", action: () => {}, actionText: "View all" },
  { title: "Digital Assets", value: "31 assets", updated: "just now", action: () => {}, actionText: "See all" },
  { title: "Share Earnings", value: "$ 980.50", updated: "3 days ago", action: () => {}, actionText: "Earn more" },
  { title: "NFT Games Earnings", value: "40 tokens", updated: "3 days ago", action: () => {}, actionText: "Play & win" },
];
</script>
