import React from "react";
import {Container ,Row} from "react-bootstrap";
import GitIcon from './imgs/git.png';
import './styles/footer.css';

const Footer = ()=>{

    return(
    <Container className="my-3">
        <Row className="justify-content-center">
            <a href="https://github.com/strato67" target="_blank" className="iconContainer">
                <img src={GitIcon} alt="Github" className="gitIcon"/>
            </a>
                    
        </Row>
        <Row className="justify-content-center gitlabel mt-2">Made by strato67</Row>

    </Container>
    );

}
export default Footer;