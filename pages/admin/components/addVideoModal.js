import { useState } from "react";
import { Button, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import addToDB from "../../../firebase/addtodb";
import { timestamp } from "../../../firebase/config";
import notify from "../../../utils/tostNotification";
function AddVideoModal({ modal, toggleModal, setVideos }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [videoId, setVideoId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error,setError]=useState('')


  const resetForm =()=>{
    setTitle("")
    setDescription("");
    setVideoId("");
    setLoading(false)
    setError('')
  }

  const addVideo = async () => {
    try {
      setLoading(true);

      const videoObj = {
        title,
        description,
        videoId,
        timestamp,
      };
      const insertedDocId = await addToDB("videos", videoObj);
      setVideos((pv) => [...pv, videoObj]);
      toggleModal();
      resetForm();
      setLoading(false);
      notify("Video has been created successfully", "success");
    } catch (error) {
      notify("Something went wrong", "error");
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
          Add a video
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup row>
              <Label for="title" sm={12}>
                Title
              </Label>
              <Col sm={12}>
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  id="title"
                  name="title"
                  placeholder="Video Title"
                  type="text"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="title" sm={12}>
                Description
              </Label>
              <Col sm={12}>
                <Input
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  id="descrition"
                  name="descrition"
                  placeholder="Video Descrition"
                  type="textarea"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="date" sm={12}>
                Video Id
              </Label>
              <Col sm={12}>
                <Input
                  value={videoId}
                  onChange={(e) => setVideoId(e.target.value)}
                  id="videoId"
                  name="videoId"
                  placeholder="Video Id"
                  type="text"
                />
              </Col>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            disabled={!title || !description || !videoId || loading}
            style={{ position: "relative" }}
            onClick={addVideo}
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

export default AddVideoModal;







