import { collection, getDocs } from "firebase/firestore";
import { projectFirestore } from "./config";

export async function getVideos() {
  let videos = [];
  const querySnapshot = await getDocs(collection(projectFirestore, "videos"));
  querySnapshot.forEach((doc) => {
    videos.push({ ...doc.data(), id: doc.id });
  });
  return new Promise((resolve, reject) => {
    resolve(videos);
  });
}
