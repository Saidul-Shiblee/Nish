import { doc, getDoc } from "firebase/firestore";
import { projectFirestore } from "./config";
const getImagesByGallery=async (galleryId)=>{
const docRef = doc(projectFirestore, "gallery", galleryId);
const docSnap = await getDoc(docRef);
if (docSnap.exists()) {
 return docSnap.data()
} else {
  throw new Error("No data found")
}
}

export default getImagesByGallery
