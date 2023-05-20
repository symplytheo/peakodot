<template>
  <div>
    <div class="d-flex align-center mb-6">
      <v-icon start size="x-large" color="primary" :icon="mdiCashMultiple" />
      <h3 class="font-weight-black text-primary text-h6">Withdrawals</h3>
    </div>

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

      <v-col cols="12" order="3" class="mt-8">
        <v-card>
          <v-card-title class="subtitle-1 font-weight-bold pb-0"> Withdrawal History </v-card-title>
          <v-card-subtitle>
            Your withdrawal history since registration. Sorted from most recent to first.
          </v-card-subtitle>
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

const itemsPerPage = ref(10);

const headers = [
  { title: "Reference ID", key: "name" },
  { title: "Medium", key: "calories" },
  { title: "Amount", key: "fat" },
  { title: "Status", key: "status" },
  { title: "Date", key: "date" },
];

const desserts = [
  {
    name: "Frozen Yogurt",
    calories: 159,
    fat: 6.0,
    status: "Success",
    protein: 4.0,
    iron: "1",
  },
  {
    name: "Jelly bean",
    calories: 375,
    fat: 0.0,
    status: "Failed",
    protein: 0.0,
    iron: "0",
  },
  {
    name: "KitKat",
    calories: 518,
    fat: 26.0,
    status: "Pending",
    protein: 7,
    iron: "6",
  },
  {
    name: "Eclair",
    calories: 262,
    fat: 16.0,
    status: "Success",
    protein: 6.0,
    iron: "7",
  },
  {
    name: "Gingerbread",
    calories: 356,
    fat: 16.0,
    status: "Success",
    protein: 3.9,
    iron: "16",
  },
  {
    name: "Ice cream sandwich",
    calories: 237,
    fat: 9.0,
    status: "Success",
    protein: 4.3,
    iron: "1",
  },
  {
    name: "Lollipop",
    calories: 392,
    fat: 0.2,
    status: "Success",
    protein: 0,
    iron: "2",
  },
  {
    name: "Cupcake",
    calories: 305,
    fat: 3.7,
    status: "Failed",
    protein: 4.3,
    iron: "8",
  },
  {
    name: "Honeycomb",
    calories: 408,
    fat: 3.2,
    status: "Success",
    protein: 6.5,
    iron: "45",
  },
  {
    name: "Donut",
    calories: 452,
    fat: 25.0,
    status: "Failed",
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
