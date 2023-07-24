import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import {getBlogs} from "../../../../firebase/getBlogs"
import { Container, Row, Col } from 'reactstrap'
import moment from 'moment';
import Image from 'next/image';
import LinesEllipsis from 'react-lines-ellipsis';
import Placeholder from "../../../../public/assets/images/PlaceHolder.jpg";
import BlogDetailsModal from '../../../admin/components/BlogDetailsModal';

var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    arrows: false,
    swipeToSlide: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 767,
            settings: { slidesToShow: 1 }
        },
        {
            breakpoint: 992,
            settings: { slidesToShow: 2 }
        }
    ]
};


const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [singleBlog, setSingleBlog] = useState(null);
  const toggleModal = () => setModal(!modal);

    useEffect(() => {
      setLoading(true);
      const fetchBlogs = async () => {
        const b = await getBlogs();
        setBlogs(b);
        setLoading(false);
      };
      fetchBlogs();
    }, []);

const PlaceHolderBlog = [
  { blogPhoto: Placeholder },
  { blogPhoto: Placeholder },
  { blogPhoto: Placeholder },
  { blogPhoto: Placeholder },
];

   return (
     <section
       id="event_blog"
       className="music blog bg-album bg-shadow-top-bottom pb-0"
     >
       <Container>
         <Row>
           <Col md="10" className="offset-md-1">
             <div className="title title4">
               <div className="main-title">
                 <h2>blog</h2>
               </div>
               <div className="sub-title">
                 <p>our new activities</p>
               </div>
             </div>
           </Col>
           <Col sm="12" md="12">
             <Slider
               className="owl-carousel owl-theme"
               id="blog-slider"
               {...settings}
             >
               {!loading &&
                 blogs.length > 0 &&
                 blogs.map((item, i) => {
                   return (
                     <div
                       className="item"
                       style={{
                         width: "482px",
                         height: "452px",
                       }}
                       key={item.id}
                     >
                       <div
                         style={{
                           width: "482px",
                           height: "452px",
                           position: "relative",
                         }}
                         className="img-container img-fluid"
                       >
                         <Image
                           fill
                           style={{
                             position: "absolute",
                             objectFit: "cover",
                           }}
                           
                           src={item.blogPhoto}
                         />
                         <div className="overlay"></div>
                         <div className="blog-info set-abs bottom-0">
                           <div className="center-text flex m-b-25">
                             <i
                               aria-hidden="true"
                               className="fa fa-user-o m-r-5"
                             ></i>
                             <h6 className="m-r-25 font-blog mb-0">admin</h6>
                             <i
                               aria-hidden="true"
                               className="fa fa-calendar-o m-r-5 "
                             ></i>
                             <h6 className="font-blog mb-0">
                               {moment(item.timestamp.toDate()).format("LLLL")}
                             </h6>
                           </div>
                           <h4
                             onClick={() => {
                               setSingleBlog(item);
                               toggleModal();
                             }}
                             className="blog-text custom_link"
                           >
                             {item.title}
                           </h4>
                           <LinesEllipsis
                             style={{ color: "white", marginBottom: "10px" }}
                             text={item.description}
                             maxLine="3"
                             ellipsis="..."
                             trimRight
                             basedOn="letters"
                           />
                         </div>
                       </div>
                     </div>
                   );
                 })}{" "}
               {loading &&
                 PlaceHolderBlog.map((item, i) => {
                   return (
                     <div
                       className="item"
                       style={{
                         width: "452px",
                         height: "452px",
                       }}
                       key={i}
                     >
                       <div
                         style={{
                           width: "452px",
                           height: "452px",
                           position: "relative",
                         }}
                         className="img-container"
                       >
                         <Image
                           fill
                           style={{
                             position: "absolute",
                             objectFit: "cover",
                           }}
                           className="img-fluid"
                           src={item.blogPhoto}
                         />
                         <div className="overlay"></div>
                         <div className="blog-info set-abs bottom-0"></div>
                       </div>
                     </div>
                   );
                 })}
             </Slider>
           </Col>
         </Row>
       </Container>

       <BlogDetailsModal
         modal={modal}
         toggleModal={toggleModal}
         setSingleBlog={setSingleBlog}
         singleBlog={singleBlog}
       />
     </section>
   );}


export default Blog;