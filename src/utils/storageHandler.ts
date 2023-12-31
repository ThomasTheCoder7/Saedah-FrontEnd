import AsyncStorage from "@react-native-async-storage/async-storage";


type storageItem = 'language'| 'theme' | 'token';


export const store = async (item:storageItem, value:string|null)=> {
    if(value == null){
        await AsyncStorage.removeItem(item);
        console.log('removed', item, ':',value)
        return;
    }
    try{
        await AsyncStorage.setItem(item, value)
        console.log('saved', item, ':',value)
    }catch(e){
        console.log("ERROR: ",e)
    }
}


export const load = async(item:storageItem) =>{
    try{
        const data = await AsyncStorage.getItem(item)
        // console.log('loaded:', item, data)
        return data
    }catch(e){
        console.log("ERROR: ",e)
        return null
    }
}