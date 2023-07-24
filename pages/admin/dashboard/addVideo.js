import React, { useEffect, useState } from "react";
import {  Col, Container, Row } from "reactstrap";
import classNames from "classnames";
import NavBar from "../components/content/Navbar";
import { getVideos } from "../../../firebase/getVideos";
import AddVideoModal from "../components/addVideoModal";
import LinesEllipsis from "react-lines-ellipsis";

const AddVideo = (props) => {
  const [modal, setModal] = useState(false);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const toggleModal = () => setModal(!modal);
  useEffect(() => {
    setLoading(true);
    const fetchVideos = async () => {
      const v = await getVideos();
      setVideos(v);
      setLoading(false);
    };
    fetchVideos();
  }, []);

  useEffect(() => {
    let conetent_gallery = document.getElementById("content_gallery");
    if (!props.isOpen) conetent_gallery.style.marginLeft = "0px";
    if (props.isOpen) conetent_gallery.style.marginLeft = "250px";
  }, [props.isOpen]);

  return (
    <Container fluid className={classNames("", { "is-open": props.isOpen })}>
      <div id="content_gallery" className="content">
        <NavBar isOpen={props.isOpen} toggle={props.toggle} />
        <div
          className="my-4 d-flex justify-content-center "
          onClick={toggleModal}
        >
          <button className="custom_button rounded">Add Gallery</button>
        </div>
        {loading && (
          <div
            style={{ height: "100vh", marginTop: "100px" }}
            class="d-flex justify-content-center "
          >
            <div
              class="spinner-border"
              style={{ width: "50px", height: "50px" }}
              role="status"
            >
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
        {!loading && videos.length > 0 && (
          <Row>
            <Col style={{ paddingBottom: "20px" }} md={{ size: 10, offset: 1 }}>
              <Row className="d-flex justify-content-center gap-3">
                {videos.map((el) => (
                  <div
                    key={el.id}
                    className="card"
                    style={{
                      width: "300px",
                      height: "400px",
                      padding: "0px",
                    }}
                  >
                    <div
                      class="card-body"
                      style={{
                        padding: "0px",
                      }}
                    >
                      <iframe
                        className="rounded-top"
                        style={{
                          width: "300px",
                          height: "250px",
                        }}
                        src={`https://www.youtube.com/embed/${el.videoId}`}
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;fullscreen"
                      ></iframe>
                      <div style={{ padding: "5px 10px" }}>
                        <h5 class="card-title">{el.title}</h5>
                        <LinesEllipsis
                          text={el.description}
                          maxLine="3"
                          ellipsis="..."
                          trimRight
                          basedOn="letters"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </Row>
            </Col>
          </Row>
        )}
      </div>
      <AddVideoModal
        modal={modal}
        toggleModal={toggleModal}
        setVideos={setVideos}
      />
    </Container>
  );
};
AddVideo.adminLayout = true;
AddVideo.requiredAuth = true;
export default AddVideo;
