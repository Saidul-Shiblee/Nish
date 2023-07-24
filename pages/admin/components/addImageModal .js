import { useState } from "react";
import { Button, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import uid from "react-uuid";
import uploadFile from "../../../firebase/uploadFile";
import addImagesToGallery from "../../../firebase/addImagesToGallery";
import getFileProperty from "../../../utils/getFileProperty";
import chekForValidFileType from "../../../utils/checkForValidFileType";
import notify from "../../../utils/tostNotification";
function AddImageModal({ modal, toggleModal, galleryId,setGalleryId }) {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const types = ["image/png", "image/jpeg"];
  


  const resetForm =()=>{
    setFile(null)
    setLoading(false);
    setError(false);
    setGalleryId(null)
  }

  const addImages = async () => {
    try {
      setLoading(true);
      const fileInfo = [];
      file.forEach((f) => {
        const imageName = uid() + "." + f.name.split(".").pop();
        fileInfo.push({
          f,
          imageName,
          path: `galleryCoverPhoto`,
        });
      });
      const url = await uploadFile(fileInfo, setProgress);
      await addImagesToGallery(galleryId, [...url]);
      toggleModal();
      resetForm();
      setLoading(false);
      notify("Images added successfully", "success");
    } catch (error) {
      console.log(error);
    }
  };

    const handleFile = (e) => {
      let selectedFiles = [...e.target.files];
      let noOfFiles = selectedFiles.length;

      let fileTypes = getFileProperty(selectedFiles, "type");

      let supportedTypes = chekForValidFileType(types, fileTypes);
      if (!supportedTypes || !noOfFiles) {
        setError(true);
        return notify(
          "No file Selected or file type is not supported",
          "error"
        );
      }  else {
        setError(false);
        setFile([...selectedFiles]);
      }
    };
  return (
    <div>
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader
          toggle={() => {
            toggleModal();
            resetForm();
          }}
        >
          Add Images
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup row>
              <Label for="exampleFile" sm={12}>
                Images
              </Label>
              <Col sm={12}>
                <Input
                  onChange={handleFile}
                  accept="image/*"
                  id="exampleFile"
                  multiple
                  name="file"
                  type="file"
                />
              </Col>
            </FormGroup>
          </Form>
          
        </ModalBody>
        <ModalFooter>
          <Button
            disabled={!file || loading || error}
            style={{ position: "relative" }}
            onClick={addImages}
            color="primary"
          >
            Save
            {loading ? (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  transform: "translateX(-50%)",
                  left: "50%",
                  top: "10%",
                }}
              >
                <div
                  style={{ width: "30px", height: "30px" }}
                  class="spinner-border "
                  role="status"
                >
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : null}
          </Button>{" "}
          <Button
            color="secondary"
            onClick={() => {
              toggleModal();
              resetForm();
            }}
          >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default AddImageModal;







