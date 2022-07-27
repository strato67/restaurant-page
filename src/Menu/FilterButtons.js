import React from "react";
import Data from './menuItems'
import { Container, Button,ButtonGroup} from "react-bootstrap";

const FilterButtons = ({filterItem, setItems, menuItems})=>{

    return(
        <>
            <Container className="btnContainer">
                <ButtonGroup aria-label="Menu Items" size="lg" >
                <Button variant="dark" onClick={()=>setItems(Data)}>All</Button>
                    {menuItems.map((val,_id)=>{
                        return(
                            <Button variant="dark" key={_id} onClick={()=>filterItem(val)}>{val.charAt(0).toUpperCase() + val.slice(1)}</Button>
                        );
                    })}
                </ButtonGroup>
            </Container>

        </>

    );

}

export default FilterButtons;

