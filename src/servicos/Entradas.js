import  axios  from "axios";


const entradasAPI = axios.create({baseURL: "http://localhost:8080/entradas"});

async function getEntradas() {
    const response = await entradasAPI.get('/')
    return response.data
}

export {
    getEntradas
}