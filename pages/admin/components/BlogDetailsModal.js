import React from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";

function BlogDetailsModal({singleBlog,setSingleBlog,modal,toggleModal }) {

  return (
    <div>
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader
          toggle={() => {
            toggleModal();
            setSingleBlog(null);
          }}
        >
          {singleBlog?.title}
        </ModalHeader>
        <ModalBody>
          <p>{singleBlog?.description}</p>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default BlogDetailsModal;







