import React from 'react';
import {Container,Row,Col} from 'reactstrap'
const Copyright = () => (
  <div className="music copyright copyright-bg">
    <Container>
      <Row>
        <Col md="5" sm="12">
          <div className="link-horizontal">
            <ul>
              <li>
                <a className="copyright-text" href="#about_me">
                  About Me
                </a>
              </li>
              <li>
                <a className="copyright-text" href="#event_gallery">
                  Gallery
                </a>
              </li>
              <li>
                <a className="copyright-text" href="#event_video">
                  Video
                </a>
              </li>
              <li>
                <a className="copyright-text" href="#event_blog">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </Col>
        <Col md="2" sm="12">
          <div className="text-center">
            <div className="link-horizontal">
              <ul className="justify-content-center">
                <li>
                  <a
                    className="copyright-text op-text"
                    href="https://www.facebook.com/"
                  >
                    <i aria-hidden="true" className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="copyright-text op-text"
                    href="https://twitter.com/"
                  >
                    <i aria-hidden="true" className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="copyright-text op-text"
                    href="https://accounts.google.com/"
                  >
                    <i aria-hidden="true" className="fa fa-google"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="copyright-text op-text"
                    href="https://www.instagram.com/"
                  >
                    <i aria-hidden="true" className="fa fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Col>
        <Col md="5" sm="12">
          <div className="m-l-auto center-para">
            <p className="copyright-text text-white text-end op-text">
              © 2023 Nish
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Copyright;