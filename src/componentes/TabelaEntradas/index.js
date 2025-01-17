import { useEffect, useState } from "react";
import style from "./TabelaEntradas.module.css";
import ColunasTabela from "componentes/ColunasTabela";
import { getEntradas } from "Conexao/Entradas";

function Tabela() {

    const [entradas, setEntradas] = useState([])
//Para o useEffect, o segundo paramentro, que é uma lista "[]" e neste caso vazia, 
// indica que queremos fazer uma chamada quando a tela for carregada, 
// se tiver "[entradas]" seria toda vez que a lista de entradas fosse atualizada
    useEffect(() => {
        fetchEntradas()
    }, [])

    async function fetchEntradas() {
        const entradaAPI = await getEntradas()
        setEntradas(entradaAPI)
    }

    return (
        <div className={style.tabela}>
            <table className="table table-striped table-dark">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Descrição</th>
                        <th scope="col">Data</th>
                        <th scope="col">Km rodado</th>
                        <th scope="col">Valor</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody> 
                    {entradas.map((entrada) => {
                        return <ColunasTabela {...entrada} key={entrada.id} />
                    })}               
                </tbody>
            </table>
        </div>   
    )
}
export default Tabela;