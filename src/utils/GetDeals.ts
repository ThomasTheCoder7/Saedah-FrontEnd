import axios from "axios";
import { headers } from "./logicUtils";
import { load } from "./storageHandler"


export const getDealsHome = async (setDeals:Function, setRefreshing:Function)=>{
    const token = await load('token');
    const getHeaders = {...headers, Authorization:`Token ${token}`}

    const response = await axios.get('https://saedah.pythonanywhere.com/home/',{headers:getHeaders})
    setDeals(response.data)
    setRefreshing(false)
}