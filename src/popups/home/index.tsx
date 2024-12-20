import { useEffect, useState } from "react";
import { MagnifyingGlass } from "@phosphor-icons/react"
import type { Endereco } from "~@types/endereco";
import { getEnderecoByCep } from "~util/viaCep/viaCepApi";
import { styles } from "./styles";
import Theme from "../themes"
import InputMask from "react-input-mask"

function Home() {
    const [cepInput, setCepInput] = useState<string>(''); //Variavel que armazena o valor do input
    const [endereco, setEndereco] = useState<Endereco | null>(null);
    const [maskedValue, setMaskedValue] = useState<string>('');
    const [renderResponse, setRenderResponse] = useState<boolean>(false);
    const theme = Theme;

    //Funçao responsavel por atualizar e armazenar o texto do input
    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setMaskedValue(value);
        setCepInput(value.replace(/\D/g, ''));
    }

    //Funcao responsavel por realizar o pedido para a API
    const handleButton = async () => {
        const endereco = await getEnderecoByCep(cepInput);
        if (!endereco) return; 
        setEndereco(endereco as Endereco);
    }
    //Funcao Responsavel por chamar a funcao handleButton, caso o usuario pressioanar Enter no input
    const pressEnterInCepInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") handleButton();
    }

    useEffect(() => {
        const renderEndereco = () => {
            if (endereco !== null){
                if (endereco.rua !== ''){
                    setRenderResponse(true);
                    return;
                }
                setRenderResponse(false);
                return
            }
            setRenderResponse(false)
        }
        renderEndereco();
    },[endereco])

    return (
        <div style={styles.container}>
            <div style={styles.titleContainer}>
                <div style={styles.title}>ViaCep Extension</div>
            </div>
            <div style={styles.inputContainer}>
                <InputMask
                    style={styles.styledInput}
                    value={maskedValue} 
                    name="cepInput"
                    mask="99.999-999"
                    placeholder="Digite Aqui o seu CEP"
                    onKeyDown={pressEnterInCepInput}
                    onChange={(text)=>{onChangeInput(text)}}
                />
                <button style={styles.styledButton} onClick={handleButton}>
                    <MagnifyingGlass size={20} color={theme.colors.primary}/>
                </button>
            </div>
            {renderResponse && (
                <div style={styles.responseContainerExtern}>
                    <div style={styles.responseTitleContainer}>
                        <div style={styles.responseTitle}>Resultados:</div>
                    </div>
                    <div style={styles.responseText}>
                        Rua: {endereco.rua}
                    </div>
                    <div style={styles.responseText}>
                        Bairro: {endereco.bairro}
                    </div>
                    <div style={styles.responseText}>
                        Cidade: {endereco.cidade}
                    </div>
                    <div style={styles.responseText}>
                        Estado: {endereco.estado}
                    </div>
                </div>
            )}
        </div>
    )
}
export { Home };