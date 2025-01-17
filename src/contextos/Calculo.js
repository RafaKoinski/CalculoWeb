import { createContext, useState } from "react";

export const CalculoContext = createContext();
CalculoContext.displayName = "Calculo";

export default function CalculoProvider({ children }) {
    const [calculo, setCalculo] = useState([]);

    return (
        <CalculoContext.Provider 
            value={{ calculo, setCalculo }}>
            {children}
        </CalculoContext.Provider>
    )
}