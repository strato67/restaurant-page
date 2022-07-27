import React,{ useState } from "react";
import { Container, Row } from "react-bootstrap";
import myData from './menuItems.js';
import CardGenerate from "./cardGenerate.js";
import FilterButtons from "./FilterButtons.js";
import '../styles/menu.css'

const MenuDisplay = () =>{
    const [item, setItem] = useState(myData);
    const menuItems = [...new Set(myData.map((Val) => Val.productType))];
    
    const filterItem = (category) =>{
        const newItem = myData.filter((newVal)=> newVal.productType === category);
        setItem(newItem);
    };
    
    return(
        <Container>
            <Container>
                <FilterButtons filterItem={filterItem} setItems={setItem} menuItems={menuItems}/>
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