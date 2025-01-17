
import { Link } from "react-router-dom"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  style  from "./AcaoTabela.module.css";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";

function AcaoTabela() {
    
    return(
        <td>
            <nav className={style.acao}>
                <Link className={style.link} href="#"><FontAwesomeIcon className={style.icone} icon={faPen} /></Link>
                <Link className={style.link} href="#"><FontAwesomeIcon className={style.icone} icon={faTrashCan} /></Link>
            </nav>
        </td>
    )
}

export default AcaoTabela;