import { Button, Modal } from "react-bootstrap";
import React from "react";

const Confirm = (props) => {
    const {heading, body, closeButton, okButton} = props;
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="border-0">
        <Modal.Title id="contained-modal-title-vcenter">
          {heading}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          {body}
        </p>
      </Modal.Body>
      <Modal.Footer className="border-0">
        <Button variant='secondary' onClick={props.onHide}>{closeButton}</Button>
        <Button variant='danger' onClick={props.onConfirm}>{okButton}</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Confirm;
