import { showMessage } from "react-native-flash-message";
import { headers, isEmpty } from "utils/logicUtils";
import { load, store } from "utils/storageHandler";
import axios from "axios";
export type Image = {
  uri: string;
  name: string;
  type: string;
};

function extractNumbers(text:string) {
  // Use a regular expression to find all numbers in the text
  const numbers = text.match(/-?\d+\.\d+/g);

  // Convert the matched strings to actual numbers
  const parsedNumbers = numbers?.map(Number)

  return parsedNumbers;
}


export type createData = {
  images: Image[];
  location: string | Object;
    isGeographic:boolean;
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
    formData.append(`photos`, {
      uri: image.uri,
      name: `image_${index}_${image.name}`,
      type: image.type,
    });
  });

  formData.append("title", data.title);
  formData.append("description", data.description);
  formData.append(
    "expiry_date",
    `${data.expiryDate.getFullYear()}-${
      data.expiryDate.getMonth()
    }-${data.expiryDate.getUTCDate()}`
  );
  formData.append("price", data.price);
  if(data.isGeographic){
  formData.append("latitude", extractNumbers(data.location)[0]);
  formData.append("longitude", extractNumbers(data.location)[1]);
  }else{
    formData.append('link', data.link!)
  }
  const request = await axios.post(
    "https://saedah.pythonanywhere.com/deals/",
    formData,
    { headers: submitHeaders }
  );

  console.log("request:", request);
  const response = await request.status;
  console.log(response);
  if (request.status == 400) {
    showMessage({
      message: "Failed to post new Deal",
      description: response.error,
      type: "danger",
    });
    return;
  }
  navigation.reset({
    index: 0,
    routes: [{ name: "Main" }],
  });
};
