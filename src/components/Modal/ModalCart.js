import Modal from "react-bootstrap/Modal";

function ModalTemplate(props) {
  return (
    <>
      <Modal
        className="p-5"
        show={props.show}
        onHide={props.handleClose}
        size="lg"
      >
        {props.children}
      </Modal>
    </>
  );
}

export default ModalTemplate;
