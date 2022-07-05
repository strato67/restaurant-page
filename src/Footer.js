import React from "react";
import {Container ,Row, Col} from "react-bootstrap";
import GitIcon from './imgs/git.png';
import './styles/footer.css';

const Footer = ()=>{

    return(
    <Container className="gitcontainer">
        <Row className="gitIcon">
            <a href="https://github.com/strato67" target="_blank">
                <img src={GitIcon} alt="Github"/>
            </a>
                    
        </Row>
        <Row>Made by strato67</Row>



    </Container>
    );

}
export default Footer;