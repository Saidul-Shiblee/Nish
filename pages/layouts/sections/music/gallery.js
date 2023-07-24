import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Placeholder from "../../../../public/assets/images/PlaceHolder.jpg";
import { Container, Row, Col } from "reactstrap";
import { getGalleries } from "../../../../firebase/getGalleries";
import Image from "next/image";
import Link from "next/link";

const LeftNavButton = (props) => {
  const { style, onClick } = props;
  return (
    <div
      className="slick-arrow"
      style={{
        ...style,
        display: "block",
        position: "absolute",
        bottom: "0",
        marginLeft: "43%",
        padding: "38px 38px 6px 38px",
      }}
      onClick={onClick}
    >
      <img
        src="/assets/images/music/gallery/gallery-icon/left.png"
        alt="arrow_left"
      />
    </div>
  );
};
const RightNavButton = (props) => {
  const { style, onClick } = props;
  return (
    <div
      className="slick-arrow"
      style={{
        ...style,
        display: "block",
        marginLeft: "48%",
        padding: "38px 38px 6px 38px",
      }}
      onClick={onClick}
    >
      <img
        src="/assets/images/music/gallery/gallery-icon/right.png"
        alt="arrow_left"
      />
    </div>
  );
};


const PlaceHolderGallery = [
  { coverPhotoUrl: Placeholder },
  { coverPhotoUrl: Placeholder },
  { coverPhotoUrl: Placeholder },
  { coverPhotoUrl: Placeholder },
];

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  swipeToSlide: true,
  centerMode: true,
  centerPadding: "0px",
  prevArrow: <LeftNavButton />,
  nextArrow: <RightNavButton />,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 575,
      settings: { slidesToShow: 1 },
    },
  ],
};

const Gallery = () => {
  const [galleris, setGalleris] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchGalleries = async () => {
    const g = await getGalleries();
    setGalleris(g);
    setLoading(false);
    };
    fetchGalleries();
  }, []);

  return (
    <section
      id="event_gallery"
      className="music gallery bg-gallery bg-shadow-top-bottom"
    >
      <Container>
        <Row>
          <Col md="10" className="offset-md-1">
            <div className="title title4">
              <div className="main-title">
                <h2>gallery Music</h2>
              </div>
              <div className="sub-title">
                <p>Latest Photo Our Music Event</p>
              </div>
            </div>
          </Col>
          <Col xs="12">
            <Slider
              className="gallery-slider"
              id="gallery-slider"
              {...settings}
            >
              {!loading &&
                galleris.length > 0 &&
                galleris.map((item, index) => {
                  return (
                    <div
                      className="item"
                      style={{
                        width: "472px",
                        height: "309px",
                      }}
                      key={index}
                    >
                      <div
                        style={{
                          width: "472px",
                          height: "309px",
                          position: "relative",
                        }}
                      >
                        <Image
                          fill
                          style={{
                            position: "absolute",
                            objectFit: "cover",
                          }}
                          alt="GalleryImage"
                          className="img-fluid blur-up lazyload"
                          src={item.coverPhotoUrl}
                        />
                      </div>

                      <div className="abs-center w-100 text-container">
                        <Link href={`/gallery/${item?.id}`} target="_blank">
                          <h3 className="text-white overlay-text text-center mb-2">
                            {item.tilte}
                          </h3>
                          <p className="text-white overlay-text text-center">
                            <span>{item.date}</span>
                          </p>
                        </Link>
                      </div>
                      <div className="overlay"></div>
                    </div>
                  );
                })}
              {loading &&
                PlaceHolderGallery.map((item, index) => {
                  return (
                    <div
                      className="item"
                      style={{
                        width: "482px",
                        height: "309px",
                      }}
                      key={index}
                    >
                      <div
                        className="img-fluid "
                        style={{
                          width: "482px",
                          height: "309px",
                          position: "relative",
                        }}
                      >
                        <Image
                          fill
                          style={{
                            position: "absolute",
                            objectFit: "cover",
                          }}
                          alt="GalleryImage"
                          src={item.coverPhotoUrl}
                        />
                      </div>

                      <div className="abs-center w-100 text-container"></div>
                      <div className="overlay"></div>
                    </div>
                  );
                })}
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Gallery;


