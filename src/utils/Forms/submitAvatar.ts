import { Image } from "./CreateDeal";
import { headers } from "../logicUtils";
import { load } from "utils/storageHandler";
import axios, { AxiosResponse } from "axios";

export const submitAvatar = async (image: Image) => {
  const token = await load("token");
  const submitHeaders = {
    ...headers,
    Authorization: `Token ${token}`,
    "content-type": "multipart/form-data",
  };

  const formData = new FormData();
  //@ts-ignore
  formData.append("avatar", image);
  const response: AxiosResponse = await axios.post(
    "https://saedah.pythonanywhere.com/profile/uploadimage/",
    formData,
    {
      headers: submitHeaders,
    }
  );
  
};
