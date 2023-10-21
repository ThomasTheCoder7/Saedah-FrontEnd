import { headers } from "utils/logicUtils";
import { load } from "utils/storageHandler";

export const logout = async () => {
  const token = await load("token");
  const logoutHeaders = {...headers, Authorization:`Token ${token}`}

  const request = await fetch("https://saedah.pythonanywhere.com/logout/", {
    method: "POST",
    headers: logoutHeaders,
  });

  const response = await request.json();
};
