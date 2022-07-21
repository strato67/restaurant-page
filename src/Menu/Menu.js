import React from "react";
import { Container, Row, Button,ButtonGroup} from "react-bootstrap";
import myData from './menuItems.js';
import CardGenerate from "./cardGenerate.js";
import '../styles/menu.css'

const MenuDisplay = () =>{
    
    return(
        <Container>
            <Container className="btnContainer">
                <ButtonGroup aria-label="Menu Items" size="lg">
                    <Button variant="dark" >All</Button>
                    <Button variant="dark">Pizza</Button>
                    <Button variant="dark">Beverages</Button>
                    <Button variant="dark">Other</Button>
                </ButtonGroup>
            </Container>

            <Container className="menuContainer">
            
                <Row className="justify-content-left">
                    {CardGenerate(myData)}
                </Row>

            </Container>
        </Container>
        
    );
}

export default MenuDisplay;