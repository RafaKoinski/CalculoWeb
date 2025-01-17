import Cabecalho from "componentes/Cabecalho";
import Rodape from "componentes/Rodape";
import CalculoProvider from "contextos/Calculo";
import Inicio from "pages/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Cabecalho />
            <CalculoProvider>
                <Routes>
                    <Route path="/" element={<Inicio />}></Route>
                </Routes>
            </CalculoProvider>
            <Rodape />
        </BrowserRouter>
    )
}

export default AppRoutes;