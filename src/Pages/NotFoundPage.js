import {Link} from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import routes from "../helpers/routes";

export const NotFoundPage = () => {
    return (
        <Container>
            <Row className="mt-5">
                <Col md={{span:4, offset:4}} className="text-center">
                    <img style={{ width: '100%' }} src="/img/404-not-found.svg" alt="Error404"/>
                    <h2>Te has perdido?</h2>
                    <p>
                        Vuelve al <Link to={routes.home}>Inicio</Link>
                    </p>
                </Col>
            </Row>
        </Container>
    )
}
