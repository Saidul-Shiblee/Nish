import React, { useEffect, useState } from 'react'
import { Card, CardTitle, Col, Container, Row } from "reactstrap";
import classNames from "classnames";
import NavBar from "../components/content/Navbar";
import AddGallaryModal from '../components/addGalleryModal';
import { getGalleries } from '../../../firebase/getGalleries';

import Image from 'next/image';
import { LuImagePlus } from "react-icons/lu";
import AddImageModal from '../components/addImageModal ';
import Link from 'next/link';

const AddGallery = (props) => {
const [modal, setModal] = useState(false);
const [modal1, setModal1] = useState(false);
const [galleris, setGalleris] = useState([]);
const [loading,setLoading]=useState(false)
const [galleryId,setGalleryId]=useState(null)
const toggleModal = () => setModal(!modal);
const toggleModal1 = () => setModal1(!modal1);


useEffect(()=>{
  setLoading(true)
  const fetchGalleries =async()=>{
     const g = await getGalleries();
     setGalleris(g)
     setLoading(false)
  }
  fetchGalleries()
},[])

useEffect(() => {
   let conetent_gallery=document.getElementById("content_gallery");
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
        {!loading && galleris.length > 0 && (
          <Row>
            <Col md={{ size: 10, offset: 1 }}>
              <Row className="d-flex justify-content-center">
                {galleris.map((item, index) => (
                  <Col
                    md="6"
                    lg="4"
                    className="my-3 d-flex justify-content-center"
                    key={item.id}
                  >
                    <Card
                      className="custom_card"
                      style={{
                        width: "270px",
                        height: "270px",
                      }}
                    >
                      <Image
                        fill
                        style={{ position: "absolute",objectFit:"cover" }}
                        alt="Card"
                        src={item.coverPhotoUrl}
                        className="rounded"
                      />
                      <div className="custom_overlay rounded">
                        <div className="custom_overlay_body">
                          <div
                            style={{
                              backgroundColor: "black",
                              width: "50px",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              height: "50px",
                              borderRadius: "100%",
                            }}
                          >
                            <LuImagePlus
                              size={30}
                              onClick={() => {
                                setGalleryId(item.id);
                                toggleModal1();
                              }}
                            />
                          </div>
                        </div>
                        <div className="custom_overlay_bottom rounded-bottom">
                          <Link
                            style={{
                              cursor: "pointer",
                            }}
                            target='_blank'
                            href={`/gallery/${item.id}`}
                          >
                            <CardTitle
                              style={{
                                color: "white",
                                textDecoration: "underline",
                              }}
                              tag="h5"
                            >
                              {item.tilte}
                            </CardTitle>
                          </Link>
                          <p style={{ color: "white" }}>
                            <span>Place:</span> {item.place}
                            <br />
                            <span>Date:</span> {item.date}
                            <br />
                          </p>
                        </div>
                      </div>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        )}
      </div>
      <AddGallaryModal
        modal={modal}
        toggleModal={toggleModal}
        setGalleris={setGalleris}
      />
      <AddImageModal
        modal={modal1}
        toggleModal={toggleModal1}
        setGalleryId={setGalleryId}
        galleryId={galleryId}
      />
    </Container>
  );
}
AddGallery.adminLayout = true;
AddGallery.requiredAuth = true;
export default AddGallery