import axios, { AxiosError } from "axios";
import { headers } from "./logicUtils";
import { load, store } from "./storageHandler";

export const getDealsHome = async (
  setDeals: Function,
  setRefreshing: Function
) => {
  const token = await load("token");
  const getHeaders = { ...headers, Authorization: `Token ${token}` };

  const request = axios.get("https://saedah.pythonanywhere.com/home/", {
    headers: getHeaders,
  }).then((response)=>{
    setDeals(response.data);
  });

  

  setRefreshing(false);
};
