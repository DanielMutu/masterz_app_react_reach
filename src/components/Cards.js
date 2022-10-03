import React  from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Cards.css';
import AlgoSignerC from "./AlgoSigner/AlgoSigner";
import Donate from "./Donate";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Cards = () => {

const card = [
  {
    image:
      "https://bit.ly/3BQdTqk",
    title: "Project 1",
    text: "Project description 2"
  },
  {
    image:
      "https://bit.ly/3BQdTqk",
    title: "Project 2",
    text: "Project Description 3"
  },
  {
    image:
      "https://bit.ly/3BQdTqk",
    title: "Project 3",
    text: "Project Description 3"
  }
];


const renderCards = (card, index) => {
  return (
    <Card key={index} id="cardID">
      <Card.Img variant="top" src={card.image} />
      <Card.Body>
        <Card.Title>{card.title}</Card.Title>
        <Card.Text>{card.text}</Card.Text>
        <Link to="/Donate"><Button variant="primary" onClick={() => Donate("cardID")}>Donate</Button></Link>
      </Card.Body>  
    </Card>
   
  );
  
};

return <div className="grid">{card.map(renderCards)}</div>;

};
export default Cards;