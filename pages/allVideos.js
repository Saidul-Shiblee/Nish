import React, { useEffect, useState } from "react";
import {  Col, Container, Row } from "reactstrap";
import classNames from "classnames";
import { getVideos } from "../firebase/getVideos";
import LinesEllipsis from "react-lines-ellipsis";
import BannerImage from "../public/assets/images/music/hero1.jpg"
import Image from "next/image";


const AllVideos = (props) => {
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

 
  return (
    <>
      <section
        className="agency breadcrumb-section "
        style={{ position: "relative" ,marginBottom:"40px"}}
      >

          <Image
            fill
            style={{ objectFit: "cover" }}
            alt=""
            src={BannerImage}
          />
        
        <Container>
          <Row>
            <Col xs="12">
            
                <div
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
                   All Videos
                  </h2>
                  <h6
                    className="breadcrumb-text text-center"
                    style={{ color: "white" }}
                  >
                    
                  </h6>
                </div>
              
            </Col>
          </Row>
        </Container>
      </section>

      <Container fluid className={classNames("", { "is-open": props.isOpen })}>
        <div id="" className="">
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
              <Col
                style={{ paddingBottom: "20px" }}
                md={{ size: 10, offset: 1 }}
              >
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
      </Container>
    </>
  );}


export default AllVideos;
      
      