import { showMessage } from "react-native-flash-message";
import { capitalizeString, headers, isEmpty } from "utils/logicUtils";
import { store } from "utils/storageHandler";
import { loginData, submitLogin } from "./Login";

export type registerData = {
  fullname: string;
  email: string;
  username: string;
  password: string;
};

export const submitRegister = async (
  data: registerData,
  navigation: any,
  setLoading: Function
) => {
  if (
    isEmpty(data.username) ||
    isEmpty(data.password) ||
    isEmpty(data.email) ||
    isEmpty(data.fullname)
  ) {
    showMessage({
      message: "Failed to Register",
      description: "You must enter Email, Username and password",
      type: "danger",
    });
    setLoading(false);
    return;
  }

  if (data.username.length <= 4) {
    showMessage({
      message: "Failed to Register",
      description: "Username must be at least 5 characters long",
      type: "danger",
    });
    setLoading(false);

    return;
  }

  if (data.password.length <= 6) {
    showMessage({
      message: "Failed to Register",
      description: "Password must be at least 6 characters long",
      type: "danger",
    });
    setLoading(false);

    return;
  }

  const request = await fetch("https://saedah.pythonanywhere.com/register/", {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data),
  });

  const response = await request.json();
  console.log(request.status);
  if (request.status == 400) {
    showMessage({
      message: "Failed to register",
      description: `${
        response.email != undefined
          ? "\n" + capitalizeString(response.email)
          : ""
      }${
        response.username != undefined
          ? "\n" + capitalizeString(response.username)
          : ""
      }${
        response.fullname != undefined
          ? "\n" + capitalizeString(response.fullname)
          : ""
      }${
        response.password != undefined
          ? "\n" + capitalizeString(response.password)
          : ""
      } `,
      type: "danger",
    });
    setLoading(false);
    return;
  }
  const loginData: loginData = {
    username: data.username,
    password: data.password,
  };
  await submitLogin(loginData, navigation);
  setLoading(false);
};
