import { showMessage } from "react-native-flash-message";
import { headers, isEmpty } from "utils/logicUtils";
import { store } from "utils/storageHandler";

export type loginData = {
  username: string;
  password: string;
};

export const submitLogin = async (data: loginData, navigation:any) => {


  if (isEmpty(data.username) || isEmpty(data.password)) {
    showMessage({
      message: "Failed to Login",
      description:"You must enter username or password",
      type: "danger",
    });
    return;
  }

  const request = await fetch("https://saedah.pythonanywhere.com/login/", {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data),
  });

  const response = await request.json();
  console.log(response);
  if(response.error){
    showMessage({
        message: "Failed to Login",
        description:response.error,
        type: "danger",
      });
    return;
  }
  store('token', response.token);
  navigation.reset({
    index: 0,
    routes: [{ name: "Main" }],
  })
  
};
