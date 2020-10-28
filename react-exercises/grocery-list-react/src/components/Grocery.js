import React from 'react';
import GroceryList from './GroceryList';
import Cart from './Cart';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import groceryItems from '../groceries';
import CreateItem from './CreateItem';


class GroceryComponent extends React.Component {

  state = {
    showCreate : false,
    groceryItems : []
  };

  constructor() {
    super();
  }

  handleShow = () => {
    if (!this.state.showCreate) this.setState({showCreate : true});
  }

  handleClose = () => {
    if (this.state.showCreate) this.setState({showCreate : false});
  }

  componentDidMount() {
    this.setState({groceryItems : groceryItems});
  }

  createGroceryItem = () => {

  }

  render() {
    return (
      <div>
        <Jumbotron className = 'header'>
          <h1>Grocerly</h1>
          <p>
            Shop for groceries with a virtual shopping cart.
          </p>
        </Jumbotron>
        <Container>
          <CreateItem showCreate = {this.state.showCreate} handleClose = {this.handleClose}/>
          <Row>
            <Col md='8'>
              <GroceryList items = {this.state.groceryItems} handleShow = {this.handleShow} handleClose = {this.handleClose}/>
            </Col>
            <Col md='4'>
              <Cart/>
            </Col>
          </Row>
        </Container>
        
      </div>
    );
  }

}

export default GroceryComponent;