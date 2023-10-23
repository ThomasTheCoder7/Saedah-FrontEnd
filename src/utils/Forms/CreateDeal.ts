import { showMessage } from "react-native-flash-message";
import { headers, isEmpty } from "utils/logicUtils";
import { load, store } from "utils/storageHandler";
import axios, { AxiosError, AxiosResponse } from "axios";
export type Image = {
  uri: string;
  name: string;
  type: string;
};

function extractNumbers(text: string) {
  // Use a regular expression to find all numbers in the text
  const numbers = text.match(/-?\d+\.\d+/g);

  // Convert the matched strings to actual numbers
  const parsedNumbers = numbers?.map(Number);

  return parsedNumbers;
}

export type createData = {
  images: Image[];
  location: string | Object;
  isGeographic: boolean;
  title: string;
  description: string;
  price: string;
  expiryDate: Date;
  link?: string;
  longitude?: string;
  latitude?: string;
};

export const submitCreate = async (data: createData, navigation: any) => {
  const token = await load("token");
  const submitHeaders = {
    ...headers,
    Authorization: `Token ${token}`,
    "content-type": "multipart/form-data",
  };

  const formData = new FormData();
  data.images.map((image, index) => {
    //@ts-ignore
    formData.append(`photos`, {
      uri: image.uri,
      name: `${image.name}`,
      type: image.type,
    });
  });

  formData.append("title", data.title);
  formData.append("description", data.description);
  formData.append(
    "expiry_date",
    `${data.expiryDate.getFullYear()}-${data.expiryDate.getMonth()}-${data.expiryDate.getUTCDate()}`
  );
  formData.append("price", data.price);
  if (data.isGeographic && !isEmpty(data.location)) {
    formData.append("latitude", extractNumbers(data.location)[0]);
    formData.append("longitude", extractNumbers(data.location)[1]);
  } else {
    formData.append("link", data.link!);
  }
  try {
    const response: AxiosResponse = await axios.post(
      "https://saedah.pythonanywhere.com/deals/",
      formData,
      {
        headers: submitHeaders,
      }
    );

    if (response.status === 201) {
      navigation.reset({
        index: 0,
        routes: [{ name: "Main" }],
      });
    } else {
      showMessage({
        message: "Failed to post new Deal",
        type: "danger",
      });
    }
  } catch (error) {
    // Handle Axios errors here
    if (axios.isAxiosError(error)) {
      const axiosError: AxiosError = error;
      if (axiosError.response) {
        // Handle the response error (e.g., status code 4xx, 5xx)
        console.log("Response Error:", axiosError.response.data);
      } else if (axiosError.request) {
        // Handle network error (e.g., no internet connection)
        // console.error("Network Error:", axiosError.request);
      } else {
        // Handle other Axios errors (e.g., request setup error)
        console.error("Axios Error:", axiosError.message);
      }
    } else {
      // Handle non-Axios errors (e.g., other exceptions)
      console.error("Non-Axios Error:", error);
    }
  }
};
