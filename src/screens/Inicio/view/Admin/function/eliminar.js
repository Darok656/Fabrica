import { db } from "../../../../../Firebase";
import { collection, deleteDoc, doc } from "firebase/firestore";


export const eliminar = async (id) => {
  const colleccionRef = collection(db, "pedidos");
  const docuRef = doc(colleccionRef, id);
  const eliminado = await deleteDoc(docuRef);
  return eliminado;
}
