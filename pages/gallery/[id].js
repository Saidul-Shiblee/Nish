import React, { useEffect, useState } from "react";
import ZoomGallery from "../layouts/sections/music/zoom-gallery";
import Breadcrumb from "../../containers/common/breadcrumb";
import { useRouter } from "next/router";
import getImagesByGallery from "../../firebase/getImagesByGalley"
const Gallery = () => {
const [gallery, setGallery] = useState(null);
const [loading, setLoading] = useState(false);
const router = useRouter();
const { id } = router.query;
useEffect(() => {
  const fetchImages = async () => {
    setLoading(true);
    try {
      const res = await getImagesByGallery(id);
      setGallery(res);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  fetchImages();
}, [id]);




  return (
    <div>
      <Breadcrumb
        gallery={gallery}
        loading={loading}
        list={["elements", "gallery"]}
        title={"elements with gallery"}
      />

      <ZoomGallery gallery={gallery} loading={loading}  />
    </div>
  );
};

export default Gallery;
