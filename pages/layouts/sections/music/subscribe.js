import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup, Spinner } from "reactstrap";
import ConfirmationModal from "../../../admin/components/confirmationModal";
import axios from "axios";
const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [status, setStatus] = useState("");
  const [modal, setModal] = useState();
  const [Loading, setLoading] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };
  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email || !name ) {
      return;
    }
    try {
      setLoading(true);
      const res = await axios.post("/api/sendEmail", {
        email,
        name,
        subject: `${name} just subscribed`,
        purpose: "subscribe",
        Message: "",
      });
      setConfirmationMessage(
        "You are successfull subscribed"
      );
      setStatus("success");
    } catch (error) {
      setConfirmationMessage("Something went wrong ,please try again later");
      setStatus("error");
    } finally {
      setLoading(false);
      toggle();
      setName("");
      setEmail("");
    }
  };

  return (
    <section id="event_subscribe" className="music booking bg-black pb-0">
      <Container>
        <Row>
          <Col md="10" className="offset-md-1">
            <div className="title title4">
              <div className="main-title">
                <h2>subscribe</h2>
              </div>
              <div className="sub-title">
                <p>we are waiting for you</p>
              </div>
              <div style={{ marginTop: "10px" }} className="subscribe-title ">
                <h6 className="subscribe-main">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been
                </h6>
              </div>
            </div>
          </Col>
        </Row>
        <Col xs="12" className="">
          <Form className="m-b-35 row ">
            <Col>
              <FormGroup className="form-group">
                <input
                  placeholder="YOUR NAME"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </FormGroup>
            </Col>

            <Col>
              <FormGroup className="form-group">
                <input
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="YOUR EMAIL"
                  type="text"
                  required
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup className="form-group">
                <button
                  disabled={Loading}
                  onClick={handleSubscribe}
                  style={{ width: "100%" }}
                  xs="12"
                  className="btn btn-default btn-gradient m-0-auto"
                >
                  subscribe
                  {Loading && (
                    <div
                      style={{
                        position: "absolute",
                        left: "50%",
                        transform: " translateX(-50%) translateY(-72%)",
                      }}
                    >
                      <Spinner
                        style={{
                          color: "white",
                        }}
                      >
                        Loading....
                      </Spinner>
                    </div>
                  )}
                </button>
              </FormGroup>
            </Col>
          </Form>
        </Col>
      </Container>
      <ConfirmationModal
        modal={modal}
        toggleModal={toggle}
        confirmationMessage={confirmationMessage}
        setConfirmationMessage={setConfirmationMessage}
        setStatus={setStatus}
        status={status}
      />
    </section>
  );
};

export default Subscribe;
