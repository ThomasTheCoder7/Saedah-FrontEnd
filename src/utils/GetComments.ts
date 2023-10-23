import { load } from "./storageHandler"
import { URL, headers } from './logicUtils';






export const getComments = async(id:number, setComments:Function)=>{
    const token = await load('token');
    const AuthHeaders = {...headers, Authorization:`Token ${token}`}
    
    const request = await fetch(`${URL}/deal/${id}`, {method:'GET', headers:AuthHeaders})

    if(request.status != 200)return;

    const response = await request.json();
    await setComments(response.comments)
    
}