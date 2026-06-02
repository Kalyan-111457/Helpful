import axios from "axios";
import api from "./api";
import { UserModelCreate } from "@/types/user";

export async function CreateUser(data1:UserModelCreate) {

    try{
        const response=await api.post( "/User/CreateUser", data1);
        return response.data;
    }
    catch(error){

        if(axios.isAxiosError(error)){
            alert(error.message);
            alert(error.response?.data.message)
        }
        else{
            alert("Something went wrong");
        }
        throw error;
    } 
}


export async function GetAllUsers():Promise<UserModelCreate[]>{
    try{
        const response=await api.get("/User/GetAllUsers");
        return response.data
    }
    catch(error){
        if(axios.isAxiosError(error)){
            alert(error.message || error.response?.data.message)
        }
        else{
            alert("Something went wrimg");
        }
        return [];
    }

}


export async function deleteuser(id:number){
    try{
        const apiresponse=await api.post(`/User/deleteuser/${id}`);
        return apiresponse.data;
    }
    catch(error){
        if(axios.isAxiosError(error)){
            alert(error.message || error.response?.data.message);

        }
    }

}
