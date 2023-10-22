import { load } from "utils/storageHandler";
import { URL, headers } from "../logicUtils";

export const getProfile = async (setUserDetails:Function,profile_id = "") => {
  const token = await load("token");
  const AuthHeaders = { ...headers, Authorization: `Token ${token}` };

  const request = await fetch(`${URL}/profile/${profile_id}`, {
    headers: AuthHeaders,
    method: "GET",
  });

  const response = await request.json();
  if(request.status != 200){return;}
  console.log(response);
  
  setUserDetails(response.user)
};
