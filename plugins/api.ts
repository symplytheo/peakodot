import axios, { AxiosInstance } from "axios";
import ErrorHandler from "~/lib/errorhandler";

class ApiRequests {
  instance: AxiosInstance;
  // // Initializer
  constructor(XMLHttpRequest: AxiosInstance) {
    // this.store = store; // app store to dispatch snackbar for notifications
    this.instance = XMLHttpRequest; // can be axios or ES6 fetch module
  }

  processError(error: any) {
    const text = ErrorHandler(error);
    alert(text);
    // Display error message in a snackbar
    // this.store.commit("snackbar/show", { icon: "error", text });
  }

  // ================
  // ALL REQUESTS
  // ================

  async login(payload: any) {
    try {
      console.log({ payload });
      const { data } = await this.instance.post("/login", payload);
      return data;
    } catch (err) {
      this.processError(err);
      return Promise.reject(err);
    }
  }

  async register(payload: any) {
    try {
      console.log({ payload });
      const { data } = await this.instance.post("/user", payload);
      return data;
    } catch (err) {
      this.processError(err);
      return Promise.reject(err);
    }
  }

  async getProfile() {
    try {
      const { data } = await this.instance.get("/user");
      return data;
    } catch (err) {
      this.processError(err);
      return Promise.reject(err);
    }
  }

  logUser() {
    console.log({ name: "Jane Doe", email: "anything@goes.com" });
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  const Axios = axios.create({ baseURL: nuxtApp.$config.public.apiBase });
  const api = new ApiRequests(Axios);
  return {
    provide: { api },
  };
});
