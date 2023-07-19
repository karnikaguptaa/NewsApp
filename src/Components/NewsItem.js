import React, { PureComponent } from 'react'
import { Card } from 'react-bootstrap';

class NewsItem extends PureComponent {
  
    render() {
      let  {title, description, imageUrl, newsUrl} = this.props;
       return (
      <div><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <a href={newsUrl} target="_blank" className = "btn btn-sm btn-dark">Read more</a>
      </Card.Body>
    </Card></div>
    );
  }
}

export default NewsItem;