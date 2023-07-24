import React, { useEffect } from "react";

import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Toast,
  ToastBody,
  ToastHeader,
  CardTitle,
} from "reactstrap";
import { useAuth } from "../../../context/authcontext";
import { useRouter } from "next/router";

const Example = (props) => {
  const { signin, currentUser } = useAuth();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();
  useEffect(()=>{
    if(currentUser){
       router.push({ pathname: "/admin/dashboard" });
    }
  },[])

  const loginHandler = async(ev) => {
    ev.preventDefault();
    if (!username || !password) {
      return;
    }
    try {
      await signin(username, password);
      router.push({ pathname: "/admin/dashboard" });
    } catch (error) {
      console.log(error.message)
    }
  };

  return (
    <Container style={{ height: "100vh" }}>
      <Row
        style={{
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Col xs="4" md="4">
          <Card className="shadow-sm">
            <CardBody>
              <CardTitle
                className="ml-auto d-flex align-items-center justify-content-center"
                tag="h5"
              >
                Login
              </CardTitle>
              <Form onSubmit={loginHandler}>
                <FormGroup className="pb-2 mr-sm-2 mb-sm-0">
                  <Label for="exampleEmail" className="mr-sm-2">
                    Email
                  </Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="something@idk.cool"
                    onChange={(ev) => setUsername(ev.currentTarget.value)}
                  />
                </FormGroup>
                <FormGroup className="pb-2 mr-sm-2 mb-sm-0">
                  <Label for="examplePassword" className="mr-sm-2">
                    Password
                  </Label>
                  <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="don't tell!"
                    onChange={(ev) => setPassword(ev.currentTarget.value)}
                  />
                </FormGroup>
                <Button type="submit" color="primary">
                  Login
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Example;
