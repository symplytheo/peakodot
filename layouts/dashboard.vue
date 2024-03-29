<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" color="primary" dark>
      <v-list-item to="/" prepend-avatar="/logo.png" nav class="py-3">
        <v-list-item-title class="text-h6 font-weight-black">PEAKODOT</v-list-item-title>
      </v-list-item>
      <v-divider />
      <v-list :items="items" nav></v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block @click="handleLogout()"> Logout </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar color="white" class="pr-3">
      <v-app-bar-nav-icon color="primary" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-img class="d-md-none" src="/logo.png" alt="Peakodot" max-width="48" />
      <v-spacer />
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-avatar color="grey" v-bind="props" style="cursor: pointer">
            <v-icon :icon="mdiAccount" />
          </v-avatar>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title class="text-capitalize">{{ user.firstname + " " + user.lastname }}</v-list-item-title>
            <v-list-item-subtitle class="text-capitalize mt-2">
              {{ `${user.package} - ${user.is_vendor ? "vendor" : "user"}` }}
            </v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main class="bg-grey-lighten-5">
      <v-container>
        <slot />
      </v-container>
    </v-main>

    <!--  -->
    <app-snackbar />
  </v-app>
</template>

<script setup lang="ts">
import { useDisplay } from "vuetify";
import {
  mdiAccount,
  mdiRobotOutline,
  mdiController,
  mdiAccountMultiplePlus,
  mdiShareVariant,
  mdiCashMultiple,
  mdiViewDashboardOutline,
  mdiGoogleAds,
} from "@mdi/js";

const display = useDisplay();

const val = display.smAndDown ? false : true;
const drawer = ref(val);

const { $store } = useNuxtApp();
const user = $store.user;

const items = [
  { title: "Overview", props: { prependIcon: mdiViewDashboardOutline, to: "/dashboard" } },
  { title: "Minting Bot", props: { prependIcon: mdiRobotOutline, to: "/dashboard/minting" } },
  { title: "NFT Games", props: { prependIcon: mdiController, to: "/dashboard/nft-games" } },
  { title: "Share & Earn", props: { prependIcon: mdiShareVariant, to: "/dashboard/share-earn" } },
  { title: "Digital Ads", props: { prependIcon: mdiGoogleAds, to: "/dashboard/digital-ads" } },
  { title: "Referrals", props: { prependIcon: mdiAccountMultiplePlus, to: "/dashboard/referrals" } },
  { title: "Withdrawals", props: { prependIcon: mdiCashMultiple, to: "/dashboard/withdrawals" } },
  { title: "Profile", props: { prependIcon: mdiAccount, to: "/dashboard/me" } },
];

const handleLogout = () => {
  localStorage.removeItem("authtoken");
  navigateTo("/login");
};
</script>
