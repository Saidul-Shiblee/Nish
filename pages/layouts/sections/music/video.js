import React, { useEffect, useState } from 'react';
import { Modal, ModalHeader, ModalBody, Spinner } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap'
import { getVideos } from '../../../../firebase/getVideos';

const Video = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(videos)
    useEffect(() => {
      setLoading(true);
      const fetchVideos = async () => {
        const v = await getVideos();
        setVideos(v);
        setLoading(false);
      };
      fetchVideos();
    }, []);

    const [modal, setModal] = useState();
    const toggle = () => {
        setModal(!modal)
    }
    return (
      <section
        id="event_video"
        className="music bg-video format bg-shadow-top-bottom p-0"
      >
        <Container>
          <Row>
            <Col md="6">
              <img
                alt=""
                className="img-fluid"
                src="/assets/images/music/singer.png"
              />
            </Col>
            <Col md="6">
              <div className="center-text">
                <div>
                  <div className="format-small-text">
                    <h6 className="gradient-text hash-video">#video</h6>
                  </div>
                  <div className="format-head-text">
                    <h3 className="about-font-header">{videos[0]?.title}</h3>
                  </div>
                  <div className="format-sub-text">
                    <p className="text-white sub-para">
                      {videos[0]?.description}
                    </p>
                  </div>
                  <div className="m-b-40">
                    <div className="link-horizontal">
                      <ul>
                        <li>
                          {!loading && videos.length > 0 && (
                            <a
                              className="button icon-btn d-flex"
                              href="#javascript"
                            >
                              <i
                                aria-hidden="true"
                                className="fa fa-play video-icon center-content m-0"
                                onClick={toggle}
                              ></i>
                              <div className="watch-now center-content">
                                <h6 className="watch" onClick={toggle}>
                                  Watch Now
                                </h6>
                              </div>
                            </a>
                          )}
                          {loading && (
                            <Spinner
                              style={{
                                color: "white",
                                width: "50px",
                                height: "50px",
                              }}
                            >
                              Loading...
                            </Spinner>
                          )}
                          <Modal
                            isOpen={modal}
                            toggle={toggle}
                            centered={true}
                            size="lg"
                          >
                            <ModalHeader
                              toggle={toggle}
                              className="modal-no-header close-up"
                            ></ModalHeader>
                            <ModalBody className="iframe-modal">
                              <iframe
                                className="mfp-iframe"
                                frameBorder="0"
                                allowFullScreen=""
                                src={`//www.youtube.com/embed/${videos[0]?.videoId}?autoplay=1`}
                              ></iframe>
                            </ModalBody>
                          </Modal>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="d-flex">
                    <a href="/allVideos" target='_blank'>
                      <h6 className="watch">
                        see all video
                        <i
                          aria-hidden="true"
                          className="fa fa-arrow-right m-l-15"
                        ></i>
                      </h6>
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
}


export default Video;