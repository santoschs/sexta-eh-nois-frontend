import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function ModalComponent({
  show,
  setShow,
  title,
  handleButton,
  buttonText,
  children,
  btnVariant = 'primary',
}) {
  return (
    <Modal show={show} onHide={setShow}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button variant={btnVariant} onClick={handleButton}>
          {buttonText}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
