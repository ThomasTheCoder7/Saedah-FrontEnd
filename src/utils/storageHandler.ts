import AsyncStorage from "@react-native-async-storage/async-storage";


type storageItem = 'language'| 'theme' | 'token';


export const store = async (item:storageItem, value:string)=> {
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
        console.log('loaded:',data)
        return data
    }catch(e){
        console.log("ERROR: ",e)
        return null
    }
}