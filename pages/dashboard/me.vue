<template>
  <div>
    <div class="d-flex align-center mb-6">
      <v-icon start size="x-large" color="primary" :icon="mdiAccount" />
      <h3 class="font-weight-black text-primary text-h6">Profile</h3>
    </div>

    <v-row>
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title class="subtitle-1 font-weight-bold"> Update your profile </v-card-title>
          <v-card-text>
            <v-form v-model="isValid.profile" @submit.prevent="updateProfile">
              <v-row justify="center">
                <v-col cols="12" class="mb-4 text-center">
                  <label for="profilepic">
                    <v-avatar size="120" color="grey" style="cursor: pointer">
                      <img v-if="form.avatar" :src="form.avatar" alt="" />
                      <v-icon v-else size="64" color="white">
                        {{ mdiAccount }}
                      </v-icon>
                    </v-avatar>
                    <p class="body-2 mt-2 mb-0">Click image to upload - not more than 1MB</p>
                  </label>
                  <input id="profilepic" type="file" accept="image/*" hidden @change="previewImage" />
                </v-col>
                <v-col cols="12">
                  <v-text-field v-model="form.name" color="primary" label="Full name" />
                </v-col>
                <v-col cols="12">
                  <v-text-field v-model="form.username" color="primary" label="Username" />
                </v-col>
                <v-col cols="12">
                  <v-text-field v-model="form.email" type="email" color="primary" label="Email address" />
                </v-col>
                <v-col cols="12">
                  <v-text-field v-model="form.password" color="primary" type="password" label="Password" />
                </v-col>
                <v-col cols="12">
                  <v-btn type="submit" color="primary" block size="large" flat :loading="loading.profile">
                    Update Profile
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="6">
        <v-card class="mb-8">
          <v-card-title class="subtitle-1 font-weight-bold"> Change Subscription Plan </v-card-title>
          <v-card-text>
            <v-form v-model="isValid.plan" @submit.prevent="upgradePlan">
              <v-row justify="center">
                <v-col cols="12">
                  <p>
                    You're currently on a
                    <b>Basic Package</b>. Your ROI is
                    <b>1.5%</b>
                  </p>
                  <p>Upgrade your subscription plan to a higher one to earn more</p>
                </v-col>
                <v-col cols="12">
                  <v-select
                    v-model="newPlan"
                    :items="['Basic', 'Premium']"
                    :rules="[(v) => !!v || 'Select a new plan']"
                    required
                  />
                </v-col>
                <v-col cols="12">
                  <v-btn
                    type="submit"
                    color="primary"
                    block
                    size="large"
                    flat
                    :loading="loading.plan"
                    :disabled="!isValid.plan"
                  >
                    Upgrade
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>

        <v-card>
          <v-card-title class="subtitle-1 font-weight-bold"> Change Password </v-card-title>
          <v-card-text>
            <v-form v-model="isValid.password" @submit.prevent="changePassword">
              <v-row dense justify="center">
                <v-col cols="12">
                  <v-text-field
                    v-model="password.old"
                    type="password"
                    label="Old Password"
                    :rules="[(v) => !!v || 'Old password is required']"
                    required
                  />
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="password.new"
                    :type="show ? 'text' : 'password'"
                    label="New Password"
                    :rules="[(v) => !!v || 'New password is required']"
                  >
                    <template #append-inner>
                      <v-icon @click="show = !show" :icon="show ? mdiEyeOff : mdiEye" />
                    </template>
                  </v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="password.confirm"
                    :type="show ? 'text' : 'password'"
                    label="Confirm Password"
                    :rules="[
                      (v) => !!v || 'Confirm password is required',
                      (v) => v === password.new || 'Confirm password does not match',
                    ]"
                  >
                    <template #append-inner>
                      <v-icon @click="show = !show" :icon="show ? mdiEyeOff : mdiEye" />
                    </template>
                  </v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-btn
                    type="submit"
                    color="primary"
                    block
                    size="large"
                    depressed
                    :loading="loading.password"
                    :disabled="!isValid.password"
                  >
                    Change Password
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { mdiAccount, mdiEye, mdiEyeOff } from "@mdi/js";

definePageMeta({ layout: "dashboard" });

const form = ref({ avatar: "", email: "", password: "", name: "", coupon: "", username: '', referral: "" });
const loading = ref({ profile: false, password: false, plan: false });
const isValid = ref({ profile: false, password: false, plan: false });
const password = ref({ old: "", new: "", confirm: "" });
const show = ref(false);
const newPlan = ref("");

const previewImage = () => {};
const updateProfile = () => {};
const changePassword = () => {};
const upgradePlan = () => {};
</script>
