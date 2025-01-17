import Cabecalho from "componentes/Cabecalho";
import Rodape from "componentes/Rodape";
import Inicio from "pages/Inicio";
import Recebidos from "pages/Recebidos";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Cabecalho />
            <Routes>
                <Route path="/" element={<Inicio />}></Route>
                <Route path="/Recebidos" element={<Recebidos />}></Route>
            </Routes>
            <Rodape />
        </BrowserRouter>
    )
}

export default AppRoutes;