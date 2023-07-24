import React, { useState } from "react";
import { RiDownload2Fill } from "react-icons/ri";
import styled from "styled-components";
import notify from "../../utils/tostNotification";
import { Spinner } from "reactstrap";

const ImageOverlay =  ({ images, currentImageIndex, galleryTitle }) => {
  const [loading,setLoading]=useState(false)
  const handleSave = async () => {
    setLoading(true)
    try {
       const imageBlob = await fetch(images[currentImageIndex].src).then(
         (res) => res.blob()
       );
       const downloadLink = document.createElement("a");
       downloadLink.href = URL.createObjectURL(imageBlob);
       downloadLink.download = `${galleryTitle}-image${currentImageIndex + 1}`;
       downloadLink.click();
    } catch (error) {
      notify('Something went wrong ,please try again later','error')
      
    }finally{
   setLoading(false);
    }
  };

  return (
    <OverlayContainer>
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          width: "4em",
          height: "4em",
          borderRadius: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {!loading && (
          <RiDownload2Fill
            onClick={handleSave}
            size="3em"
            style={{ color: "white" }}
          />
        )}
        {loading && <Spinner  style={{
          color: 'white'}}>Loading...</Spinner>}
      </div>
    </OverlayContainer>
  );
};

export default ImageOverlay;

const OverlayContainer = styled.div`
  position: absolute;
  top: 2%;
  right: 2%;`
