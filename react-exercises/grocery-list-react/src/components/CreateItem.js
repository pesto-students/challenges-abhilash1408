import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class CreateItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Modal show = {this.props.showCreate}
          onHide = {this.props.handleClose} size="lg"
          aria-labelledby = "contained-modal-title-vcenter"
          centered
        >
        <Modal.Header closeButton>
          <Modal.Title>Create Grocery</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={this.props.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }


}

export default CreateItem;