import axios from "axios";
import type { Endereco } from "~@types/endereco";

const API_URL = process.env.PLASMO_PUBLIC_API_URL;
const API_KEY = process.env.PLASMO_PUBLIC_API_KEY;

export const getEnderecoByCep = async (cep: string):Promise<Endereco> => {
    let endereco:Endereco = {rua: "", bairro: "", cidade: "", estado: ""};
    try{
        const response = await axios.get(API_URL + cep + API_KEY);
        const data = response.data;
        endereco = {
            rua: data.logradouro,
            bairro: data.bairro,
            cidade: data.localidade,
            estado: data.estado,
        }
    }catch(error){
        console.error(error);
    }finally{
        return endereco;
    }
    
}