import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Cards=(props)=>{
	return (
		
		<div className="d-grid col-lg-3 col-md-6 col-sm-12 justify-content-center" > 
		<Card style={{ width: '18rem' }}>
		<Card.Img variant="top" src={props.imgUrl} />
		<Card.Body>
		  <Card.Title>{props.title}</Card.Title>
		  <Card.Text>{props.cardText}
		  </Card.Text>
		  <Button href={props.buttomUrl} variant="primary">{props.buttomLabel}</Button>
		</Card.Body>
	    </Card>
		</div>
	);
}	

export default Cards;