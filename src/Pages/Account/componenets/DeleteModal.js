import { Modal, Alert, Button } from "react-bootstrap";
import useAuth from '../../../Auth/useAuth'

export default function DeleteModal({isOpen, close}) {

    const {logout} = useAuth();
    const handleDelete = () => {
        //peticion http
        logout();
    }

    return (
        <Modal show={isOpen} onHide={close}>

            <Modal.Header closeButton>
                <Modal.Title> Eliminar Cuenta</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Alert variant="danger">
                    Estas seguro de que deseas eliminar permanentemenete tu cuenta? <b>Se perderan tus datos</b>
                </Alert>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondaty" onClick={close}>
                    cancelar
                </Button>
                <Button variant="danger" onClick={handleDelete}>
                    Eliminar cuenta
                </Button>
            </Modal.Footer>

        </Modal>
    )
}
