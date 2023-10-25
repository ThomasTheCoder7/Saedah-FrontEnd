import { load } from "utils/storageHandler";
import { URL, headers } from "../logicUtils";

export const searchDeal = async (
  query: string,
  setDeals: Function,
  setPage: Function,
  page: number | null,
  setRefreshing: Function | undefined = undefined
) => {
  const token = await load("token");
  const getHeaders = { ...headers, Authorization: `Token ${token}` };
  if (setRefreshing) {
    setPage(1);
  }
  const arg = page != null ? "&page=" + page : "";
  console.log(`${URL}/search/?q=${query}&${arg}`);
  const request = await fetch(`${URL}/search/?q=${query}${arg}`, {
    headers: getHeaders,
  });
  const response = await request.json();
  if (request.status != 200) return;
  // return;
  if (page != null && response?.has_next_page) {
    setPage(page + 1);
  }

  setDeals((prev: any) => {
    if (!prev.deals || setRefreshing) return response;
    const deals = [...prev.deals, ...response.deals];
    return { ...prev, deals: deals };
  });

  if (setRefreshing) setRefreshing(false);
};
