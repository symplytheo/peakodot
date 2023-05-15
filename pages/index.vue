<template>
  <v-sheet
    height="100vh"
    style="background-image: url('https://vojislavd.com/ta-template-demo/assets/img/coming-soon.jpg')"
  >
    <div class="py-8 px-2 px-md-8 fill-height text-white" style="background: #0008">
      <v-row class="fill-height text-center" no-gutters justify="center" align="center">
        <v-col cols="12" md="7" lg="6">
          <div
            class="d-inline-flex align-center text-decoration-none rounded-lg px-4 py-2 mb-8"
            style="background: #fff2"
            to="/"
          >
            <v-img src="/logo.png" alt="Logo" width="48" />
            <h1 class="text-white text-h5 font-weight-black">PEAKODOT</h1>
          </div>
          <h2 class="font-weight-black text-h4 text-md-h2">COMING SOON</h2>
          <v-row :dense="display.smAndDown" class="my-6 my-md-12">
            <v-col cols="3">
              <v-card color="#fff1" rounded="xl">
                <h5 class="text-white font-weight-black py-4 text-h4 text-md-h3 font-weight-black">{{ days }}</h5>
                <div class="bg-white text-subtitle-2 text-black py-2 justify-center font-weight-black">DAYS</div>
              </v-card>
            </v-col>
            <v-col cols="3">
              <v-card color="#fff1" rounded="xl">
                <h5 class="text-white font-weight-black py-4 text-h4 text-md-h3 font-weight-black">{{ hours }}</h5>
                <div class="bg-white text-subtitle-2 text-black py-2 justify-center font-weight-black">HRS</div>
              </v-card>
            </v-col>
            <v-col cols="3">
              <v-card color="#fff1" rounded="xl">
                <h5 class="text-white font-weight-black py-4 text-h4 text-md-h3 font-weight-black">{{ minutes }}</h5>
                <div class="bg-white text-subtitle-2 text-black py-2 justify-center font-weight-black">MINS</div>
              </v-card>
            </v-col>
            <v-col cols="3">
              <v-card color="#fff1" rounded="xl">
                <h5 class="text-white font-weight-black py-4 text-h4 text-md-h3 font-weight-black">{{ seconds }}</h5>
                <div class="bg-white text-subtitle-2 text-black py-2 justify-center font-weight-black">SECS</div>
              </v-card>
            </v-col>
          </v-row>
          <p class="mt-8 text-subtitle-2">FOR ENQUIRIES, PLEASE CONTACT SUPPORT</p>
          <p class="font-weight-bold text-h6">+234 805 173 8733</p>
        </v-col>
      </v-row>
    </div>
  </v-sheet>
</template>

<script setup lang="ts">
import { useDisplay } from "vuetify";

const display = ref(useDisplay());

const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);

onMounted(() => {
  // Set the date we're counting down to
  const countDownDate = new Date("May 20, 2023 08:00:00").getTime();
  // Update the count down every 1 second
  const x = setInterval(function () {
    // Get today's date and time
    const now = new Date().getTime();
    // Find the distance between now and the count down date
    const distance = countDownDate - now;
    // Time calculations for days, hours, minutes and seconds
    days.value = Math.floor(distance / (1000 * 60 * 60 * 24));
    hours.value = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    seconds.value = Math.floor((distance % (1000 * 60)) / 1000);
    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
    }
  }, 1000);
});
</script>
