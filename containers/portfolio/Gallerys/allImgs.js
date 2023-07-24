import React, { Fragment, useState } from "react";
import Lightbox from "../../../CoolLightbox";
import Image from "next/image";

const AllImgFun = ({ className ,gallery, loading}) => {
    const [open,setOpen]=useState(false)
    const [currentImageIndex, setCurrentIndex] = useState(0);
  return (
    <Fragment>
      {gallery?.images?.length > 0 &&
        !loading &&
        gallery?.images?.map((item, i) => (
          <div className={className} key={i}>
            <div className="overlay">
              <div className="border-portfolio">
                <div
                  className="overlay-background"
                  onClick={() => setOpen(true)}
                >
                  <i aria-hidden="true" className="fa fa-plus"></i>
                </div>
                <div style={{
                      width: "312px",
                      height: "300px",
                      position:"relative"}}>
                  <Image
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                    alt=""
                    className="img-fluid blur-up lazyload"
                    src={item}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}

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

      {gallery?.images?.length > 0 && (
        <Lightbox
          currentImageIndex={currentImageIndex}
          setCurrentIndex={setCurrentIndex}
          isOpen={open}
          onClose={() => setOpen(false)}
          galleryTitle={gallery.tilte}
          images={gallery.images.map((url) => ({ src: url }))}
        />
      )}
    </Fragment>
  );
};

export default AllImgFun;
