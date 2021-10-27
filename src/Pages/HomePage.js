import { Container, Row, Col, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import routes from "../helpers/routes"


export const HomePage = () => {
    return (
        <Container>
            <Row>
                <Col xs={{span:12}} md={{span:6}}className="mb-5">
                    <h2>Bienvenidos al gestor de tareas</h2>
                    <p>Aqui podras gestionar tu proyecto</p>
                    <p>Marca tus tareas como terminadas, agrega, 
                        elimina o actualiza</p>
                    
                    <div>
                        <Link to={routes.login}> Ingresa </Link> o
                        <Button as={Link} to={routes.register} className="ml-1">Crea una cuenta</Button>
                    </div>

                </Col>
                <Col>
                    <img 
                    className="img-fluid"
                    src="/img/task-manager.svg"
                    alt="gestor-de-tareas"/>
                </Col>
                <p>Gestiona tu tiempo, mejora tu productividad</p>
            </Row>
        </Container>
    )
}
