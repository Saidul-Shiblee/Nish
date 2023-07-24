import { collection, getDocs } from "firebase/firestore";
import { projectFirestore } from "./config";

export async function getBlogs() {
  let blogs = [];
  const querySnapshot = await getDocs(collection(projectFirestore, "blogs"));
  querySnapshot.forEach((doc) => {
    blogs.push({ ...doc.data(), id: doc.id });
  });
  return new Promise((resolve, reject) => {
    resolve(blogs);
  });
}
