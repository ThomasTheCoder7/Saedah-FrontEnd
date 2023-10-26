import { showMessage } from "react-native-flash-message";
import { capitalizeString, headers, isEmpty } from "utils/logicUtils";
import { load, store } from "utils/storageHandler";
import axios, { AxiosError, AxiosResponse } from "axios";
import { err } from "react-native-svg/lib/typescript/xml";
import { Linking } from "react-native";
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
  link?: string;
  title: string;
  description: string;
  price: string;
  expiryDate: Date;
  longitude?: string;
  latitude?: string;
};

export const submitCreate = async (
  data: createData,
  navigation: any,
  setLoading: Function,
  t: Function
) => {
  const token = await load("token");
  const submitHeaders = {
    ...headers,
    Authorization: `Token ${token}`,
    "content-type": "multipart/form-data",
  };

  if (isEmpty(data.link) && !data.isGeographic) {
    showMessage({
      message: `${t("You must fill out the")} ${t("Link")} ${t("field")}`,
      type: "danger",
    });
    setLoading(false);
    return;
  }

  const errorMessages = [];

  for (const [key, val] of Object.entries(data)) {
    if (
      typeof val === "string" &&
      isEmpty(val) &&
      key != "location" &&
      key != "link"
    ) {
      errorMessages.push(
        `${t("You must fill out the")} ${t(capitalizeString(key))} ${t(
          "field"
        )}`
      );
      break;
    }
  }

  // Check if there are error messages, and if so, show them and return
  if (errorMessages.length > 0) {
    errorMessages.forEach((message) => {
      showMessage({ message, type: "danger" });
    });
    setLoading(false);
    return;
  }

  if (!data.isGeographic && isEmpty(data.link)) {
    const valid = await Linking.canOpenURL(data.link);
    if (!valid) showMessage({ message: "Invalid Link", type: "danger" });
    return;
  }
  let month = data.expiryDate.getMonth() < 9 ? `0${data.expiryDate.getMonth()+1}`:data.expiryDate.getMonth()+1
  
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
    `${data.expiryDate.getFullYear()}-${month}-${data.expiryDate.getUTCDate()}`
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
      setLoading(false);
      showMessage({
        message: "Failed to post new Deal",
        type: "danger",
      });
    }
  } catch (error) {
    setLoading(false);
    if (axios.isAxiosError(error)) {
      const axiosError: AxiosError = error;
      if (axiosError.response) {
        // Handle the response error (e.g., status code 4xx, 5xx)
        console.log("Response Error:", axiosError.response.data);
        showMessage({
          message: "You must fill out all the fields",
          type: "danger",
        });
      }
    } else {
      // Handle non-Axios errors (e.g., other exceptions)
      console.error("Non-Axios Error:", error);
    }
  }
};
