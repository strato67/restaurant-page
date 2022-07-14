import React from "react";
import { Container,Card, Image, Row, Col} from "react-bootstrap";
import InteriorIMG from "./imgs/interior.jpg"
import SocialIcons from './ContactImages'
import './styles/contact.css';

const ContactDisplay = () =>{
    let socialArr = [];
    for(const key in SocialIcons){
        let obj = SocialIcons[key];
        socialArr.push(
            <Col xs={12} md={4}>
                <Container className="cInfo text-white">
                    <Container className="imgContainer">
                    <Image src={obj.path} alt={obj.description} fluid/>
                    </Container>
                    <p>{obj.description}</p>
                </Container>
            </Col>

        );
    }

    return(
    <Container className="cardMain">
        
        <Card className="bg-dark text-white">
        <Card.Img src={InteriorIMG} alt="Card image" className="backgroundimg" />
        <Card.ImgOverlay className="p-5 cardContainer">
            <Card.Title className="pb-3"><h1>Contact Us</h1></Card.Title>
           
                <Container fluid>
                    <Row className="justify-content-md-center">
                        {socialArr}
                    </Row>
                </Container>

        </Card.ImgOverlay>
        </Card>

    </Container>
    );

}

export default ContactDisplay;