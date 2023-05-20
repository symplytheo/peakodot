<template>
  <div>
    <div class="d-flex align-center mb-6">
      <v-icon start size="x-large" color="primary" :icon="mdiAccountMultiplePlus" />
      <h3 class="font-weight-black text-primary text-h6">Referrals</h3>
    </div>

    <v-row>
      <v-col cols="12" md="7" order="2" order-md="1">
        <v-card>
          <v-card-title class="subtitle-1 font-weight-bold"> Referral Link </v-card-title>
          <v-card-subtitle>
            Refer your friends and get {{ getReferralPercent() }} of their initial deposit.
          </v-card-subtitle>
          <v-card-text class="text-center py-8">
            <p class="mb-4">
              <a :href="referralLink()" class="primary--text" target="_blank">
                {{ referralLink() }}
              </a>
            </p>
            <v-btn depressed large color="primary" @click="copyToClipboard()"> Copy Link </v-btn>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" order="3">
        <v-card>
          <v-card-title class="subtitle-1 font-weight-bold"> Referrals History </v-card-title>
          <v-card-subtitle> Members who signed up using your referral link will appear here. </v-card-subtitle>
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
            <v-data-table :headers="[{ title: 'Name', key: 'name' }]" :items="[]" :search="search"> </v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { mdiAccountMultiplePlus, mdiMagnify } from "@mdi/js";
import { VDataTable } from "vuetify/lib/labs/components";

definePageMeta({ layout: "dashboard" });

const search = ref("");

const referralLink = () => {
  return window.location.origin + "/register?referral=" + "mY8ar54";
};

const getReferralPercent = () => {
  return "15%";
};

const copyToClipboard = () => {
  navigator.clipboard.writeText(referralLink());
};
</script>
