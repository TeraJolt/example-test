import axios from "axios";
import type { Endereco } from "~@types/endereco";

const API_URL = process.env.PLASMO_PUBLIC_API_URL;
const API_KEY = process.env.PLASMO_PUBLIC_API_KEY;

export const getEnderecoByCep = async (valor: string):Promise<Endereco | boolean> => {
    let endereco:Endereco = {rua: "", bairro: "", cidade: "", estado: ""};
    try{
        let cep = valor.replace(/\D/g, '');
        if (cep === "") return false;
        let validaCep = /^[0-9]{8}$/;
        if (!validaCep.test(cep)) return false;
        const response = await axios.get(API_URL + cep + API_KEY);
        const data = response.data;
        endereco = {
            rua: data.logradouro,
            bairro: data.bairro,
            cidade: data.localidade,
            estado: data.estado,
        }
        return endereco;
    }catch(error){
        return false;
    }
    
}