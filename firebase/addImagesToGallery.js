import { doc, updateDoc,arrayUnion } from "firebase/firestore";
import { projectFirestore } from "./config";

const addImagesToGallery = async (postID, data) => {
  const docRef = doc(projectFirestore, "gallery", postID);
  await updateDoc(docRef,{images:arrayUnion(...data)});
};

export default addImagesToGallery;
