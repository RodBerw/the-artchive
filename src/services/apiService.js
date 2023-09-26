import axios from "axios";

export async function Get(url){
    try{
        const response = await axios.get(url);
        return response.data;
    }catch(error){
        console.error("Erro ao buscar dados: ", error)
    }
}

export async function Post(url, data=null){
    
}

export async function Put(url, data=null){
    
}

export async function Delete(url, data=null){
    
}