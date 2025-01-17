import LinhasTabela from "componentes/LinhasTabela";

function ColunasTabela({id, descricao, data, kmrodado, valor}) {
    return(
        <tr>
            <th scope="row">{id}</th>
            <LinhasTabela dado={descricao} />
            <LinhasTabela dado={data} />
            <LinhasTabela dado={kmrodado} />
            <LinhasTabela dado={valor} />
        </tr>
    )
}
export default ColunasTabela;