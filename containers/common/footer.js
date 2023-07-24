import React from 'react'
import { Container, Row, Col } from 'reactstrap'
const Footer = () => (
    <>
        <footer className="resume copyright copyright-bg inner-pages-footer">
            <Container>
                <Row>
                    <Col xs="12">
                        <div className="link link-horizontal  text-center mb-3">
                            <img alt="" className="img-fluid" src="/assets/images/logo/5.png" />
                        </div>
                    </Col>
                    <Col xs="12">
                        <div className="link link-horizontal">
                            <ul className="justify-content-center">
                                <li><a className="copyright-text" href="#">About Me</a></li>
                                <li><a className="copyright-text" href="#">Gallery</a></li>
                                <li><a className="copyright-text" href="#">Video</a></li>
                                <li><a className="copyright-text" href="#">Blog </a></li>
                  
                            </ul>
                        </div>
                    </Col>
                    <Col xs="12">
                        <div className="text-center">
                            <div className="social-link link-horizontal">
                                <ul className="justify-content-center">
                                    <li>
                                        <a className="copyright-text" href="https://www.facebook.com/">
                                            <i aria-hidden="true" className="fa fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="copyright-text" href="https://twitter.com/">
                                            <i aria-hidden="true" className="fa fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="copyright-text" href="https://accounts.google.com/">
                                            <i aria-hidden="true" className="fa fa-google"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="copyright-text " href="https://www.instagram.com/">
                                            <i aria-hidden="true" className="fa fa-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
        <div className="agency copyright inner-page">
            <Container>
                <Row>
                    <Col sm="6">
                        <div className="link-horizontal">
                            <ul>
                                <li><a className="copyright-text" href="#">Privacy Policy</a></li>
                                <li><a className="copyright-text" href="#">Terms &amp; Conditions</a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col sm="6">
                        <div>
                            <h6 className="copyright-text text-white text-end">Copyright © 2023 Unice by <i aria-hidden="true" className="fa fa-heart"></i> pixelstrap
                            </h6>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
)

export default Footer
