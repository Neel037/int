import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Image } from 'react-bootstrap';

function ProductDetailsModal(props) {
  const { item, onHide } = props;

  return (
    <div>
      <Modal
        show={props.show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Product Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-center'>
          {item && (
            <div>
              <Image width="16%" src='src/assets/Rectangle 1.png' fluid/>
              <h2 className=''>Products Title: {item.title}</h2>
              <h4>Products Price: {item.price}</h4>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ProductDetailsModal;




