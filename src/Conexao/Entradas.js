async function getEntradas() {
    const result = await fetch("http://localhost:8080/entradas")
    const conexao = await result.json();
    return conexao;
}

export {
    getEntradas
}