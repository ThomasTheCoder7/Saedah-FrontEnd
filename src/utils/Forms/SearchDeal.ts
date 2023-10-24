import { load } from "utils/storageHandler";
import { URL, headers } from "../logicUtils";

export const searchDeal = async (
  query: string,
  setDeals: Function,
  setRefreshing: Function
) => {
  const token = await load("token");
  const getHeaders = { ...headers, Authorization: `Token ${token}` };

  const request = await fetch(`${URL}/search/?q=${query}`, {headers:getHeaders});
  const response = await request.json();
  if (request.status != 200) return;
  
  setDeals(response.deals);

  setRefreshing(false);
};
