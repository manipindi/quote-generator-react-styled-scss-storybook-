import axios from "axios";

export const AxiosInstance = axios.create({
  baseURL: "https://api.quotable.io",
  // timeout: 1000,
  headers: {
    "Content-Type": "application/json",
    //'Authorization': 'token <your-token-here> -- https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token'
  },
});
