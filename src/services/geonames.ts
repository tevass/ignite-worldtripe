import axios from "axios";

export const geonames = axios.create({
  baseURL: "http://www.geonames.org/childrenJSON",
})