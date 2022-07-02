import React from "react";
import { Carousel, Container} from "react-bootstrap";
import DisplayImg from './imgs/pizzaplace.png';
import './styles/homeStyle.css';

const CarouselDisplay = ()=>{

    return(
        <Container>
                    <Carousel indicators='false'>
            <Carousel.Item>
                <img
                className="d-block w-100 mainImg"
                src={DisplayImg}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
        </Container>

    );


}

export default CarouselDisplay;

