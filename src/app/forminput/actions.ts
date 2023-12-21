'use server'

import { FormValues } from "./page"


const SendData =  async (data:FormValues) => {
    const initialData = await data;
    console.log(initialData);
    
    const msg1 = "successful ho gya";
    const msg2 = "error ho gya";

    if (!initialData) {
        
        return {"msg":msg2}
    }

    return {"msg":msg1}
}


export {SendData};