import { collection, getDocs } from "firebase/firestore";
import { projectFirestore } from "./config";

export async function getGalleries() {
  let galleris=[]
  const querySnapshot = await getDocs(collection(projectFirestore, "gallery"));
  querySnapshot.forEach((doc) => {
        galleris.push({...doc.data(),id:doc.id});
  });
  return new Promise((resolve, reject) => {
    resolve(galleris);
  });
}
