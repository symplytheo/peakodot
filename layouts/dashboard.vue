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
          <v-btn block> Logout </v-btn>
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
        <v-list density="compact">
          <v-list-item density="compact" v-for="(item, i) in items" :key="i">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { useDisplay } from "vuetify";
import { mdiAccount, mdiRobotOutline, mdiController, mdiAccountMultiplePlus, mdiCashMultiple } from "@mdi/js";

const display = useDisplay();

const val = display.smAndDown ? false : true;
const drawer = ref(val);

const items = [
  { title: "Overview", props: { prependIcon: mdiAccount, to: "/dashboard" } },
  { title: "Minting Bot", props: { prependIcon: mdiRobotOutline, to: "/dashboard/minting" } },
  { title: "NFT Games", props: { prependIcon: mdiController, to: "/dashboard/nftgames" } },
  { title: "Referrals", props: { prependIcon: mdiAccountMultiplePlus, to: "/dashboard/referrals" } },
  { title: "Withdrawals", props: { prependIcon: mdiCashMultiple, to: "/dashboard/withdrawals" } },
  { title: "Profile", props: { prependIcon: mdiAccount, to: "/dashboard/me" } },
];
</script>
