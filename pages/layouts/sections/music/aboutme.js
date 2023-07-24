import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap'

const Aboutme = () => {
    const [modal, setModal] = useState();
    const toggle = () => {
        setModal(!modal)
    }
    return (
      <section
        id="about_me"
        className="music bg-about-me format bg-shadow-top-bottom "
      >
        <Container>
          <Row>
            <Col md="10" className="offset-md-1">
              <div className="title title4">
                <div className="main-title">
                  <h2>About Me</h2>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <img
                alt=""
                className="img-fluid"
                src="/assets/images/music/singer1.jpg"
              />
            </Col>
            <Col md="6">
              <div className="center-text">
                <div>
                  <div className="format-small-text">
                    <h3 className="gradient-text about-font-header">Zeed</h3>
                  </div>

                  <div className="format-sub-text">
                    <p className="text-white sub-para">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aut velit et quae asperiores rerum eligendi quia neque,
                      cupiditate eum sed quo ad ratione? Impedit ipsa eligendi
                      esse perferendis rem exercitationem. Fugiat dolorum
                      expedita fugit? Mollitia accusamus quibusdam illum
                      explicabo alias, quasi earum quaerat fuga ullam
                      perferendis harum nostrum natus aut officia, quae quidem
                      sed sit assumenda aliquam nemo excepturi minima. Ullam,
                      neque cum. Vel quis natus, vitae minima distinctio soluta
                      quam porro similique harum nisi corrupti libero. Illo,
                      provident unde? Optio dignissimos ducimus asperiores
                      officiis repellat provident ea quae magnam? Exercitationem
                      rem eligendi inventore quaerat numquam fuga eveniet ipsum
                      asperiores natus non, omnis ut, perferendis culpa
                      consectetur placeat rerum quasi, distinctio eos ipsa.
                      Nihil et alias natus deleniti a amet!
                    </p>
                  </div>
                  <div className="m-b-40">
                    <div className="link-horizontal">
                      <ul>
                        <li>
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
                                src="//www.youtube.com/embed/OeA2bX5vEaU?autoplay=1"
                              ></iframe>
                            </ModalBody>
                          </Modal>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
}


export default Aboutme;