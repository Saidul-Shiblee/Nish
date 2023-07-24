import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import classNames from "classnames";
import NavBar from "../components/content/Navbar";
import Image from "next/image";
import { getBlogs } from "../../../firebase/getBlogs";
import AddBlogModal from "../components/addBlogModal";
import LinesEllipsis from "react-lines-ellipsis";
import { LuClock1 } from "react-icons/lu";
import moment from "moment/moment";
import BlogDetailsModal from "../components/BlogDetailsModal";

const AddBlog = (props) => {
  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);
  const [singleBlog, setSingleBlog] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const toggleModal = () => setModal(!modal);
  const toggleModal1 = () => setModal1(!modal1);

  useEffect(() => {
    setLoading(true);
    const fetchBlogs = async () => {
      const b = await getBlogs();
      setBlogs(b);
      setLoading(false);
    };
    fetchBlogs();
  }, []);

  useEffect(() => {
    let conetent_gallery = document.getElementById("content_gallery");
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
          <button className="custom_button rounded">Add Blog</button>
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
        {!loading && blogs.length > 0 && (
          <Row>
            <Col style={{ paddingBottom: "20px" }} md={{ size: 10, offset: 1 }}>
              <Row className="d-flex justify-content-center gap-3">
                {blogs.map((el, index) => (
                  <div
                    key={el.id}
                    className="card"
                    style={{
                      width: "300px",
                      height: "450px",
                      padding: "0px",
                    }}
                  >
                    <div
                      class="card-body"
                      style={{
                        padding: "0px",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          width: "300px",
                          height: "250px",
                        }}
                      >
                        <Image
                          fill
                          style={{ position: "absolute", objectFit: "cover" }}
                          alt="Card"
                          src={el.blogPhoto}
                          className="rounded-top img-fluid blur-up"
                        />
                      </div>

                      <div style={{ padding: "5px 10px", marginTop: "250px" }}>
                        <h4 class="card-title">{el.title}</h4>
                        <p class="card-title">
                          <LuClock1 style={{ marginRight: "5px" }} />

                          {el.timestamp
                            ? moment(el.timestamp.toDate()).format("LLLL")
                            : moment(el.timestamp).format("LLLL")}
                        </p>
                        <LinesEllipsis
                          text={el.description}
                          maxLine="3"
                          ellipsis="..."
                          trimRight
                          basedOn="letters"
                        />

                        <button
                          style={{ marginTop: "10px" }}
                          className="custom_button rounded"
                          onClick={() => {
                            setSingleBlog(el);
                            toggleModal1();
                          }}
                        >
                          Read More
                        </button>
                        {/* <p class="card-text">{el.description}</p> */}
                      </div>
                    </div>
                  </div>
                ))}
              </Row>
            </Col>
          </Row>
        )}
      </div>
      <AddBlogModal
        modal={modal}
        toggleModal={toggleModal}
        setBlogs={setBlogs}
      />
      <BlogDetailsModal
        modal={modal1}
        toggleModal={toggleModal1}
        setSingleBlog={setSingleBlog}
        singleBlog={singleBlog}
      />
    </Container>
  );
};
AddBlog.adminLayout = true;
AddBlog.requiredAuth = true;
export default AddBlog;


 ;