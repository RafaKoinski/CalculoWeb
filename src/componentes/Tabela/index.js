import { useEffect, useState } from "react";
import style from "./Tabela.module.css";
import ColunasTabela from "componentes/ColunasTabela";
import { getEntradas } from "servicos/Entradas";

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
                        <th scope="col">Data</th>
                        <th scope="col">Ganhos</th>
                        <th scope="col">Gastos</th>
                        <th scope="col">Lucros</th>
                    </tr>
                </thead>
                <tbody> 
                    {entradas.map((entrada) => {
                        return <ColunasTabela {...entrada} key={entrada.id} />
                    })}
                    
                    <ColunasTabela id="2" data="07/12/24" gasto="R$21.48" ganhos="R$174.20" lucro="R$152.72" />
                    <ColunasTabela id="3" data="06/12/24" gasto="R$16.36" ganhos="R$118.87" lucro="R$102.51" />               
                </tbody>
            </table>
        </div>   
    )
}
export default Tabela;