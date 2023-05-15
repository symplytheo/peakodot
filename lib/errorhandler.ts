export default function ErrorHandler(error: any) {
  let errMsg;

  //
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    const { data, status } = error.response;
    // set errmsg based on error.response.status code

    const { message, email, phone, password, detail } = data;

    errMsg = email ? email[0] : phone ? phone[0] : password ? password[0]: detail ? detail : message;

    switch (status) {
      case 400:
        errMsg = errMsg || "Invalid or missing credentials";
        break;
      case 401:
        errMsg = errMsg || Object.keys(data)[0] || "No valid authentication found";
        break;
      case 403:
        errMsg = errMsg || "Unauthorized request";
        break;
      case 404:
        errMsg = errMsg || "Requested data not found";
        break;
      case 405:
        errMsg = errMsg || "Requested method not allowed";
        break;
      case 409:
        errMsg = errMsg || "Main credentials already exist";
        break;
      case 422:
        errMsg = errMsg || "Invalid credentials";
        break;
      case 500:
        errMsg = errMsg || "Internal server error, try again later";
        break;
      case 501:
        errMsg = errMsg || "Network error, try again";
        break;
      case 502:
        errMsg = errMsg || "Network error, try again";
        break;
      case 503:
        errMsg = errMsg || "Network under maintenance, try again later";
        break;
      default:
        break;
    }
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    errMsg = "Internet connection error";
    // console.log(error.request)
  } else {
    // Something happened in setting up the request that triggered an Error
    errMsg = error.message;
  }

  return errMsg;
}
