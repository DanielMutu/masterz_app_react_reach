import React  from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Cards.css';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  import SignPayTransaction from "./AlgoSigner/SignPayTransaction";
  import ConnectAlgoSigner from "./AlgoSigner/ConnectAlgoSigner";


const Donate = () => {
/*
const userAccount = useRef();
const receipient  = useRef();
const amount = useRef();
*/
const SendTransaction = (ProjectID) => {
    alert("!!!!!" + ProjectID);  

    

}    

const card = [
        {
          image: "https://bit.ly/3BQdTqk",
          title: "Project 1",
          text: "Project description 2"
        }
];

const renderCards = (card, index) => {
            return (
              <Card key={index} id="cardID">
              <Card.Body>
              <InputGroup className="mb-3">
              <InputGroup.Text>Project ID   </InputGroup.Text>
                <Form.Control aria-label="ProjectID" />      
              <br></br>
              <InputGroup.Text>Amount   </InputGroup.Text>
              <Form.Control aria-label="Amount" />
                <br></br>
              </InputGroup>
              <Button variant="outline-secondary" id="button-addon2">
              Send Credits
              </Button>
              <br></br>
              </Card.Body>  
            </Card>
            );            
          };
          
          return <div className="grid">{card.map(renderCards)}</div>;    
}
export default Donate;