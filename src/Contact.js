import React from "react";
import { Container,Card} from "react-bootstrap";
import InteriorIMG from "./imgs/interior.jpg"
import './styles/contact.css';
const ContactDisplay = () =>{

    return(
    <Container className="cardMain">
        <Card className="bg-dark text-white">
        <Card.Img src={InteriorIMG} alt="Card image" className="backgroundimg" />
        <Card.ImgOverlay>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
            </Card.Text>
            <Card.Text>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
        </Card>

    </Container>
    );


}

export default ContactDisplay;