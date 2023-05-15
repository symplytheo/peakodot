class ApiRequests {
  // // Initializer
  // constructor(XMLHttpRequest, store, errorhandler) {
  //   this.store = store // app store to dispatch snackbar for notifications
  //   this.instance = XMLHttpRequest // can be axios or ES6 fetch module
  //   this.ErrorHandler = errorhandler // function for handling instance error
  // }

  // processError(error) {
  //   const text = this.ErrorHandler(error)
  //   // Display error message in a snackbar
  //   this.store.commit('snackbar/show', { icon: 'error', text })
  // }

  // ================
  // ALL REQUESTS
  // ================

  // async login(payload) {
  //   try {
  //     const { data } = await this.instance.post('/auth/login', payload)
  //     return data
  //   } catch (err) {
  //     this.processError(err)
  //     return Promise.reject(err)
  //   }
  // }

  logUser() {
    console.log({ name: "Jane Doe", email: "anything@goes.com" });
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  const api = new ApiRequests();
  return {
    provide: { api },
  };
});
