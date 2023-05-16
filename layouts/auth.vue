<template>
  <v-app>
    <v-sheet min-height="100vh" color="green-lighten-5">
      <v-container class="fill-height">
        <v-row justify="center" align="center" class="fill-height" no-gutters>
          <v-col cols="12" md="6" lg="5">
            <div class="d-flex justify-center mb-2">
              <nuxt-link class="d-inline-flex align-center text-decoration-none" to="/">
                <v-img src="/logo.png" alt="Logo" width="48" />
                <h1 class="text-black text-h6 font-weight-black">PEAKODOT</h1>
              </nuxt-link>
            </div>
            <!--  -->
            <slot />
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <!--  -->
    <app-snackbar />
  </v-app>
</template>
