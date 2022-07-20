import React from "react";
import { Container,Card, Image, Row, Col, Button} from "react-bootstrap";
import myData from './menuItems.js';
import '../styles/menu.css'

const MenuDisplay = () =>{
    const CardGenerate = ()=>{
        let cardArr = [];
        myData.forEach(element => {
            cardArr.push(
                <Card style={{ width: '18rem',height: '30rem' }} key={element._id} className="bg-dark text-white">
                <Card.Img variant="top" src={`${element.imgSource}`} />
                <Card.Body>
                  <Card.Title>{element.name}</Card.Title>
                  <Card.Text>
                    {element.description}
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            )


        });
        return cardArr;
    }   
    
    return(
        <Container fluid className="menuContainer">
            <Row className="justify-content-md-center">
                {CardGenerate()}
            </Row>

        </Container>
    );
}

export default MenuDisplay;