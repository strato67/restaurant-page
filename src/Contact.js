import React from "react";
import { Container,Card, ListGroup, Row, Col} from "react-bootstrap";
import InteriorIMG from "./imgs/interior.jpg"
import './styles/contact.css';
const ContactDisplay = () =>{

    return(
    <Container className="cardMain">
        <Card className="bg-dark text-white">
        <Card.Img src={InteriorIMG} alt="Card image" className="backgroundimg" />
        <Card.ImgOverlay className="p-5">
            <Card.Title className="pb-3"><h1>Contact Us</h1></Card.Title>
            <Card.Text>
                <Container fluid>
                    <Row>
                        <Col>(666)-666-6666</Col>
                        <Col>pizzaplace@pizza.com</Col>
                        <Col>Sunday to Saturday from 12am - 12pm</Col>
                    </Row>
                    <Row>
                        <Col>Instagram</Col>
                        <Col>Facebook</Col>
                        <Col>Twitter</Col>
                    </Row>
                </Container>

            </Card.Text>
            
        </Card.ImgOverlay>
        </Card>

    </Container>
    );


}

export default ContactDisplay;