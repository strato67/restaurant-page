import React from "react";
import { Carousel, Button} from "react-bootstrap";
import DisplayImg from '../imgs/pizzaplace.png';
import '../styles/homeStyle.css';

const CarouselDisplay = ()=>{

    return(

        <Carousel indicators='false'>
            <Carousel.Item>
                <div className="shade">
                <img className="d-block w-100 mainImg" src={DisplayImg} alt="Restaurant Image"/>
                </div>
                
                <Carousel.Caption>
                <h3 className="homeTitle"><i>Mediocre pizza, questionable service, all the compromises.</i></h3>
                <a href="https://www.roblox.com/games/192800/Youre-Fired-Work-at-a-Pizza-Place" target="_blank">
                <Button variant="dark" size="lg" className="visitBtn">Visit Us</Button>
                </a>
                
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>


    );


}

export default CarouselDisplay;

