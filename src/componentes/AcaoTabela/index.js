import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  style  from "./AcaoTabela.module.css";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
function AcaoTabela() {
    
   const [show, setShow] = useState(false);

   const ocultar = () => setShow(false);
   const mostrar = () => setShow(true);
    
    return(

        <td>
            <nav className={style.acao}>
                <Link className={style.link} onClick={mostrar}>
                    <FontAwesomeIcon className={style.icone} icon={faPen} />
                </Link>
                <Link className={style.link} href="#"><FontAwesomeIcon className={style.icone} icon={faTrashCan} /></Link>
            </nav>
               
            <Modal show={show} onHide={ocultar}>
                <Modal.Header>
                    <Modal.Title>Editar entradas</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Formulário ainda está por vir</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={ocultar}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={ocultar}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </td>
    )
}

export default AcaoTabela;