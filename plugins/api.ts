import axios, { AxiosInstance } from "axios";
import { Pinia } from "pinia";
import ErrorHandler from "~/lib/errorhandler";
import { useMainStore } from "~/store";
import { useToastStore } from "~/store/toast";

class ApiRequests {
  instance: AxiosInstance;
  errorhandler;
  toast;
  // // Initializer
  constructor(XMLHttpRequest: AxiosInstance) {
    this.instance = XMLHttpRequest; // can be axios or ES6 fetch module
    this.errorhandler = ErrorHandler;
    this.toast = useToastStore();
  }

  // Display error message in a snackbar
  processError(error: any) {
    const text = this.errorhandler(error);
    this.toast.error(text);
  }

  // set token for all requests
  setToken(token: string) {
    this.instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  // ================
  // ALL REQUESTS
  // ================

  async login(payload: any) {
    try {
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
      const { data } = await this.instance.post("/user/create-user", payload);
      return data;
    } catch (err) {
      this.processError(err);
      return Promise.reject(err);
    }
  }

  async getProfile() {
    try {
      const { data } = await this.instance.get("/user/current-user");
      return data;
    } catch (err) {
      this.processError(err);
      return Promise.reject(err);
    }
  }

  logUser() {
    this.toast.success("It fucking worked!");
    // console.log({ name: "Jane Doe", email: "anything@goes.com" });
  }
}

export default defineNuxtPlugin(({ $pinia, $config }) => {
  const Axios = axios.create({ baseURL: $config.public.apiBase });
  const store = useMainStore($pinia as Pinia);
  store.increaseBy(5);
  const api = new ApiRequests(Axios);
  return {
    provide: { api },
  };
});
