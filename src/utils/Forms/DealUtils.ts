import axios from "axios";
import { showMessage } from "react-native-flash-message";
import { URL, headers } from "utils/logicUtils";
import { load } from "utils/storageHandler";


export const likeDeal = async (id: string) => {
  const token = await load("token");
  const AuthHeaders = { ...headers, Authorization: `Token ${token}` };

  const request = await fetch(`${URL}/deal/${id}/like/`, {
    headers: AuthHeaders,
    method: "POST",
  });

  const response = await request.json();
  // console.log(response);

  if (response.error) {
    showMessage({ message: response.error, type: "danger" });
    return;
  }
};

export const vote = async (id: string, type: "upvote" | "downvote") => {
  const token = await load("token");
  const AuthHeaders = { ...headers, Authorization: `Token ${token}` };

  const request = await fetch(`${URL}/deal/${id}/${type}/`, {
    headers: AuthHeaders,
    method: "POST",
  });

  const response = await request.json();
  if (response.error) {
    showMessage({ message: response.error, type: "danger" });
    return;
  }
};

export const follow = async (profile_id:string) => {
    const token = await load("token");
    const AuthHeaders = { ...headers, Authorization: `Token ${token}` };
    // console.log(profile_id);
    
    const request = await fetch(`${URL}/profile/${profile_id}/follow/`, {
      headers: AuthHeaders,
      method: "POST",
    }); 

    const response = await request.json();
    // console.log(response)
    if (response.error) {
      showMessage({ message: response.error, type: "danger" });
      return;
    }
};
