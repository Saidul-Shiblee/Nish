import { useState } from "react";
import { Button, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import uid from "react-uuid";
import uploadFile from "../../../firebase/uploadFile";
import addToDB from "../../../firebase/addtodb";
import { timestamp } from "../../../firebase/config";
import getFileProperty from "../../../utils/getFileProperty";
import chekForValidFileType from "../../../utils/checkForValidFileType";
import notify from "../../../utils/tostNotification";
function AddGallaryModal({ modal, toggleModal, setGalleris }) {
  const [title, setTitle] = useState("");
  const [place, setPlace] = useState("");
  const [date, setDate] = useState("");
  const [file, setFile] = useState(null);
  const [error,setError]=useState(false)
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const types = ["image/png", "image/jpeg"];

  const resetForm =()=>{
    setTitle("")
    setPlace("")
    setDate("")
    setFile(null)
    setLoading(false)
    setError(false)
  }

  const createGallery = async () => {
    try {
      setLoading(true)
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
      const galleryObj = {
        coverPhotoUrl: url[0],
        tilte: title,
        images: [],
        date: date,
        place: place,
        timestamp,
      };
      const insertedDocId=await addToDB("gallery", galleryObj);
      setGalleris((pv) => [...pv, { ...galleryObj, id: insertedDocId }]);
      toggleModal()
      resetForm()
      setLoading(false)
      notify("Gallery has been created successfully",'success')
    } catch (error) {
      console.log(error);
    }
  };

  const handleFile =(e)=>{
  let selectedFiles = [...e.target.files];
  let noOfFiles = selectedFiles.length;

  let fileTypes = getFileProperty(selectedFiles, "type");

   let supportedTypes = chekForValidFileType(types, fileTypes);
     if (!supportedTypes || !noOfFiles) {
        setError(true)
       return notify("No file Selected or file type is not supported",'error');
     } else if (noOfFiles>1) {
       setError(true);
       return notify("You can not select more than one file", "error");
     } else {
      setError(false)
      setFile([...selectedFiles]);
     }

  }
  return (
    <div>
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader
          toggle={() => {
            toggleModal();
            resetForm();
          }}
        >
          Add a gallery
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
                  placeholder="Gallery Title"
                  type="text"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="title" sm={12}>
                Place
              </Label>
              <Col sm={12}>
                <Input
                  value={place}
                  onChange={(e) => setPlace(e.target.value)}
                  id="place"
                  name="place"
                  placeholder="Place"
                  type="text"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="date" sm={12}>
                Date
              </Label>
              <Col sm={12}>
                <Input
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  id="date"
                  name="date"
                  placeholder=""
                  type="date"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleFile" sm={12}>
                Cover Photo
              </Label>
              <Col sm={12}>
                <Input
                  onChange={handleFile}
                  id="exampleFile"
                  name="file"
                  type="file"
                />
              </Col>
            </FormGroup>
          </Form>
          
        </ModalBody>
        <ModalFooter>
          <Button
            disabled={!title || !date || !place || !file || loading}
            style={{ position: "relative" }}
            onClick={createGallery}
            color="primary"
          >
            Save
           { loading? <div
              style={{
                width:"100%",
                height:"100%",
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
            </div>:null}
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
  )
}

export default AddGallaryModal;







