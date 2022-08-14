import React, { useState } from 'react';
import { Container, Col, Row }from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import './styles.css'


type ModalForItemProps = {
    name: string,
    imgUrl: string,
    description?: string
}


export function ModalForItem({ name, imgUrl, description} : ModalForItemProps) {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <div className="learn-more" onClick={handleShow}>
        Узнать больше
      </div>
     

      <Modal 
        show={show} 
        onHide={handleClose} 
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
      <Modal.Header style={{ borderBottom: '0'}} closeButton >
        <Modal.Title><h2 >{name}</h2></Modal.Title>
      </Modal.Header>
        <Modal.Body>
            <Container>
                <Row xs={1} md={2}>
                  <Col className="d-flex direction-column ">
                    <img src={imgUrl}  style={{ height: '200px', objectFit: 'contain'}}/>
                  </Col>
                  <Col className="d-flex direction-column">
                    <p>{description}</p>
                  </Col>
                </Row>
            </Container>
            </Modal.Body>
      </Modal>
    </>
  );
}