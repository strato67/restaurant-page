import React from "react";
import {Card, Col, Button} from "react-bootstrap";

const CardGenerate = (arr)=>{
    let cardArr = [];
    arr.forEach(element => {
        cardArr.push(
            <Col xs="auto" className="menuCard" key={element._id}>
                <Card style={{ width: '18rem',height: '32rem' }}  className="bg-dark text-white">
                    <Card.Img variant="top" src={`${element.imgSource}`} />
                    <Card.Body>
                    <Card.Title>{element.name}</Card.Title>
                    <Card.Text>
                        {element.description}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Col>

        )

    });
    return cardArr;
}   

export default CardGenerate;