import Image from "next/image";
import React from "react";
import { Container, Row, Col } from "reactstrap";

import Placeholder from "../../public/assets/images/PlaceHolder.jpg";
const Breadcrumb = ({ list, title, loading, gallery }) => {
  return (
    <section
      className="agency breadcrumb-section "
      style={{ position: "relative" }}
    >
      {!loading ? (
        <Image
          fill
          style={{ objectFit: "cover" }}
          alt=""
          src={gallery?.coverPhotoUrl}
        />
      ) : (
        <Image fill style={{ objectFit: "cover" }} alt="" src={Placeholder} />
      )}
      <Container>
        <Row>
          <Col xs="12">
          { !loading ? <div
              className="rounded"
              style={{
                position: "relative",
                zIndex: "5",
                backgroundColor: "rgba(0, 0, 0, .25)",
                backdropFilter: "blur(5px)",
                maxWidth: "40%",
                maxHeight: "auto",
                left: "50%",
                transform: " translateX(-50%) translateY(-50%)",

                padding: "20px",
              }}
            >
              <h2
                className="breadcrumb-text text-center"
                style={{ color: "white" }}
              >
                {gallery?.tilte}
              </h2>
              <h6
                className="breadcrumb-text text-center"
                style={{ color: "white" }}
              >
                {gallery?.place}
              </h6>
            </div>:null}
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Breadcrumb;
