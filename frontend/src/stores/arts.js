import { ref } from "vue";
import { crudAxios } from "../axiosInstances";

import {useRouter} from "vue-router";


export default function useArts(){
    const arts =ref([]);
    const art =ref([]);
    const errors= ref({});
    const router = useRouter();

// get all data 
    const getArts =async () =>{
        const response = await crudAxios.get("arts");
        arts.value = response.data.data;
    };
// get all data  by id

    const getArt = async (id)=>{
       const response= await crudAxios.get("arts/" + id);
        art.value =response.data.data;
    }
// store data
    const storeArt = async (data) => {
    try{
        await crudAxios.post("arts", data);
        await router.push({name: "ArtIndex"});

    }catch(error){
        if(error.response.status === 422){
            errors.value = error.response.data.errors;
        }
    }
}
// update data
    const updateArt = async (id) =>{
        try{
            await crudAxios.put("arts/" + id, art.value);
            await router.push({name: "ArtIndex"});
        }catch(error){
            if(error.response.status === 422){
            errors.value = error.response.data.errors;
            }
        }

    };
// delete data

    const destroyArt = async (id) =>{
        if(!window.confirm("are you sure")){
            return;
        }
          await crudAxios.delete("arts/" + id);
          await getArts();  
        
    };


    return {
        art,
        arts,
        getArts,
        getArt,
        storeArt,
        updateArt,
        destroyArt,
        errors,

    };
}