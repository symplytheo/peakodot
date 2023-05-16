<template>
  <div>
    <h3 class="font-weight-black text-primary text-h6 mb-6">
      <v-icon color="primary" :icon="mdiCashMultiple" />
      Withdrawals
    </h3>

    <v-row>
      <v-col cols="12" md="7" order="2" order-md="1">
        <v-card>
          <v-card-title class="subtitle-1 font-weight-bold"> Request Withdrawal </v-card-title>
          <v-card-subtitle> Minimum withdrawal amount is <b>$50</b> </v-card-subtitle>
          <v-card-text>
            <v-form ref="form" v-model="isValid" @submit.prevent="handleWithdrawal">
              <div>
                <label for="amount">Amount (US Dollar $)</label>
                <v-text-field
                  v-model.number="form.amount"
                  label="Amount"
                  type="number"
                  color="primary"
                  prefix="$"
                  :rules="[
                    (v) => !!v || 'Please enter an amount in US Dollar',
                    (v) => v > 49 || 'Minimum withdrawal is $50',
                  ]"
                />
              </div>
              <div class="my-2">
                <v-select
                  v-model="form.medium"
                  label="Method"
                  color="primary"
                  :items="['BTC', 'ETH']"
                  :rules="[(v) => !!v || 'Please select a method of payment']"
                />
              </div>
              <div class="mb-1">
                <v-textarea
                  v-model="form.address"
                  label="Address"
                  color="primary"
                  rows="3"
                  :rules="[(v) => !!v || 'Withdrawal address cannot be empty']"
                />
              </div>
              <v-btn type="submit" block color="primary" flat size="large" :disabled="!isValid" :loading="loading">
                Withdrawal
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- <v-col cols="12" md="5" order="1" order-md="2">
        <dashboard-stats-card title="Balance" :value="`$ ${balance}`" :icon="mdiCash" />
        <br />
        <dashboard-stats-card title="Last Withdrawal" :value="`$ ${last_withdrawal}`" :icon="mdiCashRefund" />
        <br />
        <dashboard-stats-card title="Total Withdrawal" :value="`$ ${total_withdrawals}`" :icon="mdiCashMultiple" />
      </v-col> -->

      <v-col cols="12" order="3" class="mt-8">
        <v-card>
          <v-card-title class="subtitle-1 font-weight-bold pb-0"> Withdrawal History </v-card-title>
          <v-card-subtitle>
            Your withdrawal history since registration. Sorted from most recent to first.
          </v-card-subtitle>
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
            <!-- <v-data-table :headers="headers" :items="items" :loading="refreshing" :search="search"> -->
            <!-- <template #[`item.sn`]="{ item }"> {{ transactions.indexOf(item) + 1 }}. </template> -->
            <!-- <template #[`item.status`]="{ item }">
                <v-chip small :color="getColor(item.status)" class="text-capitalize">
                  {{ item.status }}
                </v-chip>
              </template> -->
            <!-- <template #[`item.created_at`]="{ item }">
                {{ formatDate(item.created_at) }}
              </template> -->
            <!-- </v-data-table> -->
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

    <v-dialog v-model="success" max-width="480" persistent>
      <v-card class="px-4 py-8 text-center">
        <h3 class="text-subtitle-1 font-weight-bold mb-2">You have successfuly placed a withdrawal request</h3>
        <p class="subtitle-2">
          Reference ID: <b>{{ reference_id }}</b>
        </p>
        <v-icon color="success" class="mb-2" size="120">{{ mdiCheckCircle }}</v-icon>
        <p class="body-2">Check your email for further instructions</p>
        <v-btn color="primary" large depressed class="mt-2" width="50%" @click="success = false"> Okay </v-btn>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { mdiCashMultiple, mdiCheckCircle, mdiMagnify } from "@mdi/js";
import { VDataTable } from "vuetify/labs/VDataTable";

definePageMeta({ layout: "dashboard" });

// const headers = [
//   // { title: "S/N", key: "sn", filterable: false, sortable: false },
//   // { title: "REFERENCE ID", key: "start", sortable: false, value: "reference_id" },
//   // { title: "MEDIUM", key: "medium" },
//   // { title: "AMOUNT ($)", key: "amount" },
//   // { title: "STATUS", key: "status" },
//   // { title: "DATE", key: "created_at", filterable: false },
//   { title: "Name", key: "name", value: "name" },
//   { title: "Age", key: "age", value: "age" },
// ];

// const items = [
//   { id: 1, name: "John Doe", age: 26 },
//   { id: 2, name: "Janet Jackson", age: 23 },
// ];

const itemsPerPage = ref(5);

const headers = [
  { title: "Dessert (100g serving)", key: "name" },
  { title: "Calories", key: "calories" },
  { title: "Fat (g)", key: "fat" },
  { title: "Carbs (g)", key: "carbs" },
  // { title: "Protein (g)", align: "end", key: "protein" },
  // { title: "Iron (%)", align: "end", key: "iron" },
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

const isValid = ref(false);
const loading = ref(false);
const refreshing = ref(false);
const success = ref(false);
const form = ref({ amount: "", medium: "", address: "" });
const search = ref("");
const reference_id = ref("");

const handleWithdrawal = () => {};
</script>
