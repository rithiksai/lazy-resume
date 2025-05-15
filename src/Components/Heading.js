import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Heading = () => {

    return(
        <Container>
            <Row>
                <Col className='d-flex justify-content-center'>
                    <Button className='flex-fill' variant="outline-info">Info</Button>
                </Col>
                <Col className='d-flex justify-content-center'>
                    <Button className='flex-fill' variant="outline-info">Info</Button>
                </Col>
            </Row>
        
        </Container>
    );
}

export default Heading;
