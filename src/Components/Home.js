
import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
    return(<Container>
        <Row>
            <Col className="d-flex justify-content-center">
                <Button variant="success">Autofill</Button>
            </Col>
        </Row>
    </Container>);
}

export default Home;