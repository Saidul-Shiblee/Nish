import axios from 'axios';
import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Input, Spinner } from 'reactstrap'
import ConfirmationModal from '../../../admin/components/confirmationModal';
const Footer = () => {
  
  const [email,setEmail]=useState("")
  const [name,setName]=useState("")
  const [msg,setMsg]=useState("")
  const [confirmationMessage,setConfirmationMessage]=useState("")
  const [status,setStatus]=useState("")
    const [modal, setModal] = useState();
  const [Loading,setLoading]=useState(false)

    const toggle = () => {
      setModal(!modal);
    };
  const handleSendEmail=async(e)=>{
    e.preventDefault()

    if(!email || !name || !msg){
      return
    }
    try {
      setLoading(true)
        const res = await axios.post("/api/sendEmail", {
          email,
          name,
          subject: `You have got a message from ${name}`,
          purpose: "send_msg",
          Message: msg,
        });
      setConfirmationMessage("We received your email,we will contact you shortly")
      setStatus('success')
    } catch (error) {
        setConfirmationMessage("Something went wrong ,please try again later");
         setStatus("error");
    }finally{
      setLoading(false)
      toggle()
      setName("")
      setMsg("")
      setEmail("")
    }
  }

  return (
    <footer id="event_footer" className="music bg-footer bg-shadow-top-bottom ">
      ,
      <Container>
        <Row>
          <Col sm="4">
            <div className="contact-details text-center">
              <h4 className="contact-heading gradient-text"> SHOW ADDRESS</h4>
              <h6 className="contact-sub-text"> Exllasa Mall</h6>
              <h6 className="contact-sub-text">City Mall, Marid.</h6>
            </div>
          </Col>
          <Col sm="4">
            <div className="contact-details text-center">
              <h4 className="contact-heading gradient-text"> CONTACT US</h4>
              <h6 className="contact-sub-text"> +09 56895689,</h6>
              <h6 className="contact-sub-text">+09 56895690.</h6>
            </div>
          </Col>
          <Col sm="4">
            <div className="contact-details text-center">
              <h4 className="contact-heading gradient-text"> DROP YOUR MAIL</h4>
              <h6 className="contact-sub-text"> Demo1@Gmail.Com</h6>
              <h6 className="contact-sub-text">Demo123@Gmail.Com.</h6>
            </div>
          </Col>
        </Row>

        <Form className="form-footer p-t-50">
          <Row>
            <Col lg="6" sm="6">
              <FormGroup className="form-group">
                <Input
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  placeholder="your name"
                  type="text"
                  required
                />
              </FormGroup>
            </Col>
            <Col lg="6" sm="6">
              <FormGroup className="form-group">
                <Input
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="your email"
                  type="text"
                  required
                />
              </FormGroup>
            </Col>
            <Col md="12">
              <FormGroup className="form-group">
                <textarea
                  value={msg}
                  onChange={(e) => {
                    setMsg(e.target.value);
                  }}
                  className="form-control"
                  placeholder="your message"
                  rows="6"
                  required
                ></textarea>
              </FormGroup>
            </Col>
            <div className="booking">
              <button
                disabled={Loading}
                style={{ position: "relative" }}
                onClick={handleSendEmail}
                className="btn btn-default btn-gradient m-0-auto"
              >
                send
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
            </div>
          </Row>
        </Form>
      </Container>
      <ConfirmationModal
        modal={modal}
        toggleModal={toggle}
        confirmationMessage={confirmationMessage}
        setConfirmationMessage={setConfirmationMessage}
        setStatus={setStatus}
        status={status}
      />
    </footer>
  );
}
 
;

export default Footer;