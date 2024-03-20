import axios from "axios";

let httpApi = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});
export default httpApi;
