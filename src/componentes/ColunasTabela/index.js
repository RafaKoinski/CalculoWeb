import LinhasTabela from "componentes/LinhasTabela";

function ColunasTabela({id, descricao, data, kmrodado, valor}) {
    return(
        <tr>
            <th scope="row">{id}</th>
            <LinhasTabela dado={descricao} />
            <LinhasTabela dado={data} />
            <LinhasTabela dado={`${kmrodado} km`} />
            <LinhasTabela dado={`R$${valor}`} />
        </tr>
    )
}
export default ColunasTabela;