import { load } from "utils/storageHandler";
import { URL, headers } from "../logicUtils";

export const deleteDeal = async (id: number) => {
  const token = await load("token");
  const authHeaders = { ...headers, Authorization: `Token ${token}` };
  console.log(id);
  
  const request = await fetch(`${URL}/deal/${id}`, { method: "DELETE", headers:authHeaders});
    
  

};
