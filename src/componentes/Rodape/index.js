import { Link } from "react-router-dom";
import style from "./Rodape.module.css";
import github from "./github.png";
import linkedin from "./linkedin.png";

function Rodape() {
    return (
        <footer className={style.rodape}>
            <span>Sistema de calculo feito por Rafael Koinski</span>
            <div className={style.imagem}>
                <Link to="https://www.linkedin.com/in/rafael-koinski-182905159/" >
                    <img src={linkedin} alt="Logo do linkedin"></img>
                </Link>
                <Link to="https://github.com/RafaKoinski" >
                    <img src={github} alt="Logo do github"></img>
                </Link>
            </div>
        </footer>
    )
}
export default Rodape;