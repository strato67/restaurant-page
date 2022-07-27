import React from "react";
import {Card, Col, Button} from "react-bootstrap";

const CardGenerate = ({item})=>{

    return(
        <>
            {item.map((val)=>{
                return(
                    <Col xs="auto" className="menuCard" key={val._id}>
                    <Card style={{ width: '18rem',height: '32rem' }}  className="bg-dark text-white">
                    <Card.Img variant="top" src={`${val.imgSource}`} />
                        <Card.Body>
                            <Card.Title>{val.name}</Card.Title>
                                <Card.Text>
                                    {val.description}
                                </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>

                );

            })}
        </>

    );

}   

export default CardGenerate;