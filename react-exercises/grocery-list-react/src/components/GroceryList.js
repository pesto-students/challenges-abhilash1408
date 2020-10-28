import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import GroceryItem from './GroceryItem';


class GroceryListComponent extends React.Component {

  state = {};

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Card>
        <Card.Header className="d-flex justify-content-between align-items-center">
          <span>Groceries</span>
          <Button onClick={this.props.handleShow}>Add</Button>
        </Card.Header>
        <Card.Body>
          <ListGroup>
            {this.props.items.map(item =><ListGroup.Item  key = {item.id}><GroceryItem data={item}/></ListGroup.Item>)}
          </ListGroup>
        </Card.Body>
      </Card>
    );
  }
}

export default GroceryListComponent;