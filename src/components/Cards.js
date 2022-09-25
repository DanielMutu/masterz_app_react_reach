import React  from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Cards.css';
import AlgoSigner from "./AlgoSigner";

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
    <Card style={{ width: '18rem' }} key={index}>
      <Card.Img variant="top" src={card.image} />
      <Card.Body>
        <Card.Title>{card.title}</Card.Title>
        <Card.Text>{card.text}</Card.Text>
        <Button variant="primary" onClick={AlgoSigner}>Login & Donate</Button>
      </Card.Body>
    </Card>
  );
  
};

return <div className="grid">{card.map(renderCards)}</div>;
};
export default Cards;