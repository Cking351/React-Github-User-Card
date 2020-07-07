import React from 'react';
import './card.css'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  
function GitCard(props) {
    return (
        <div className='container'>
      <Card>
        <CardImg top width="30%" src={props.data.avatar_url}/>
        <CardBody>
        <CardTitle>{props.data.name}</CardTitle>
          <CardSubtitle>{props.data.location}</CardSubtitle>
          <CardText>{props.data.bio}</CardText>
          <a href="https://github.com/Cking351"><Button>Click here to see this repo</Button></a>
        </CardBody>
      </Card>
    </div>
    )
}

export default GitCard;