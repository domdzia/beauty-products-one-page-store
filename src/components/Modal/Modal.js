import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalTemplate(props) {
  return (
    <>
      <Modal show={props.show} onHide={props.handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.body}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary">Order</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalTemplate;
