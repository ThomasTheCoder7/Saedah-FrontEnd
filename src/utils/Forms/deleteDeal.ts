import { load } from "utils/storageHandler";
import { URL, headers } from "../logicUtils";

export const deleteDeal = async (id: number, runAfterDelete:Function) => {
  const token = await load("token");
  const authHeaders = { ...headers, Authorization: `Token ${token}` };
  
  const request = await fetch(`${URL}/deal/${id}`, { method: "DELETE", headers:authHeaders});
  runAfterDelete();
  

};
