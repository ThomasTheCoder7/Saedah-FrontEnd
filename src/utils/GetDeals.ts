import axios, { AxiosError } from "axios";
import { headers } from "./logicUtils";
import { load, store } from "./storageHandler";

export const getDealsHome = async (
  setDeals: Function,
  setPage: Function,
  page: number | null,
  setRefreshing:Function|undefined = undefined
) => {
  const token = await load("token");
  const getHeaders = { ...headers, Authorization: `Token ${token}` };
  if (setRefreshing) {
    setPage(1);
  }
  const arg = page != null ? "?page=" + page : "";
  console.log(`https://saedah.pythonanywhere.com/home/${arg}`);

  const request = axios
    .get(`https://saedah.pythonanywhere.com/home/${arg}`, {
      headers: getHeaders,
    })
    .then((response) => {
      if (page != null && response.data.has_next_page) {
        setPage(page + 1);
      }
      
      setDeals((prev: any) => {
        if (!prev.deals || setRefreshing) return response.data;
        const deals = [...prev.deals,...response.data.deals];
        return { ...prev, deals: deals };
      });
      if (setRefreshing) setRefreshing(false);
    });

};
