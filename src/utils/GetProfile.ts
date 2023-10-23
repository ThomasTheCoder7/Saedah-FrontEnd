import { load } from "utils/storageHandler";
import { URL, headers } from "./logicUtils";

export const getProfile = async (
  setUserDetails: Function,
  setLoading: (isLoading: boolean) => void,
  userDetails: any,
  profile_id = ""
) => {
  const token = await load("token");
  const AuthHeaders = { ...headers, Authorization: `Token ${token}` };

  const request = await fetch(`${URL}/profile/${profile_id}`, {
    headers: AuthHeaders,
    method: "GET",
  });
  let response;
  try {
    response = await request.json();
    if (request.status != 200) {
      return;
    }

    if (!deepEqual(response.user, userDetails)) {
      // Update the userDetails only if they are different
      setLoading(true);
      setUserDetails(response.user);
    }
    
    setLoading(false);
  } catch (err) {
    return;
  }
};

function deepEqual(object1: any, object2: any) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    const val1 = object1[key];
    const val2 = object2[key];
    const areObjects = isObject(val1) && isObject(val2);
    if (
      (areObjects && !deepEqual(val1, val2)) ||
      (!areObjects && val1 !== val2)
    ) {
      return false;
    }
  }

  return true;
}

function isObject(object: any) {
  return object != null && typeof object === "object";
}
