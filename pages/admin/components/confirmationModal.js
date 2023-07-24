import React from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
const ConfirmationModal = ({
  confirmationMessage,
  modal,
  toggleModal,
  status=error,
  setConfirmationMessage,
  setStatus,
}) => {
  return (
    <div>
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader
          toggle={() => {
            toggleModal();
            setConfirmationMessage("");
            setStatus("");
          }}
        >
          Confirmation
        </ModalHeader>
        <ModalBody>
          <>
            <div style={{ textAlign: "center",marginBottom:"20px" }}>
              {status === "success" ? (
                <BsFillCheckCircleFill
                  style={{
                    width: "40px",
                    height: "40px",
                    color: "green",
                  }}
                />
              ) : status === "error" ? (
                <AiFillCloseCircle
                  style={{
                    width: "40px",
                    height: "40px",
                    color: "red",
                  }}
                />
              ) : null}
            </div>
            <p style={{textAlign: "center"}}>{confirmationMessage}</p>
          </>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ConfirmationModal;
