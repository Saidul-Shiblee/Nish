import { projectFirestore } from "./config";

const addToDB = async(collectionName, data) => {
const insertedDocRef= await projectFirestore.collection(collectionName).add(data);
   return insertedDocRef.id
};
export default addToDB;
