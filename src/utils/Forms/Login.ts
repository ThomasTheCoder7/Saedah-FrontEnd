import { showMessage } from "react-native-flash-message";
import { URL, headers, isEmpty } from "utils/logicUtils";
import { load, store } from "utils/storageHandler";

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


export const checkToken = async ()=>{
  const token = await load('token');
  const authHeaders = {...headers, Authorization:`Token ${token}`}


  const request = await fetch(`${URL}/home/`, {headers:authHeaders})

  const response = await request.json();


  if(response.detail == 'Invalid token' || request.status != 200){
    store('token', null);
    return null;
  }

  return token;
  
}