import axios from "axios";

export default axios.create({
  baseURL: "https://traker-api.herokuapp.com",
});
