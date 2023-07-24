import React from "react";
import {  TabPane} from "reactstrap";
import AllImgFun from "./Gallerys/allImgs";


const Basic = ({ className, fluid  ,gallery,loading }) => {

  return (
    <section  className="portfolio-section fullwidth-portfolio masonray-sec zoom-gallery titles">
      <div className={fluid || "container"}>
        <TabPane
          className="row d-flex justify-content-center align-items-center"
          tabId="1"
        >
          <AllImgFun
            className={className}
            gallery={gallery}
            loading={loading}
          />
        </TabPane>
      </div>
    </section>
  );
};

export default Basic;
