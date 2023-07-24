import { getPlaiceholder } from "plaiceholder";
const getBlurredImages =async(images)=>{
  return await Promise.all(
   images.map(async (data, index) => {
      const { base64, img } = await getPlaiceholder(data.largeImageURL);
      return {
        ...img,
        base64: base64,
      };
    })
  ).then((value) => value)}

  export default getBlurredImages