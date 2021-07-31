import axios from "axios";
import { API_URL } from "./apiUtils";

const baseUrl = API_URL + "/projects/";

export const getProjects = async () => {
  let res = await axios.get(baseUrl);
  return res.data;
};
