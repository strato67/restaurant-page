import React,{ useState } from "react";
import { Container, Row, Button,ButtonGroup} from "react-bootstrap";
import myData from './menuItems.js';
import CardGenerate from "./cardGenerate.js";
import '../styles/menu.css'

const MenuDisplay = () =>{
    const [item, setItem] = useState(myData);
    const menuItems = [...new Set(myData.map((Val) => Val.category))];
    return(
        <Container>
            <Container className="btnContainer">
                <ButtonGroup aria-label="Menu Items" size="lg" >
                    <Button variant="dark" value={'all'}>All</Button>
                    <Button variant="dark" value={'pizza'}>Pizza</Button>
                    <Button variant="dark" value={'beverages'}>Beverages</Button>
                    <Button variant="dark">Other</Button>
                </ButtonGroup>
            </Container>

            <Container className="menuContainer">
            
                <Row className="justify-content-left">
                    <CardGenerate item={item}/>
                </Row>

            </Container>
        </Container>
        
    );
}

export default MenuDisplay;