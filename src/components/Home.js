import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React  from "react";
import Cards from "./Cards";
import Menu from './Menu'
import './Home.css';

const Home = () => {

    return(
        <React.Fragment> 
        <Menu></Menu>
        <p class="title">TITLE PROJECT</p>
        <Container>
            <Row>
                <Col xs><Cards/></Col>
            </Row>
        </Container>
        </React.Fragment>
    );
};


export default Home;

