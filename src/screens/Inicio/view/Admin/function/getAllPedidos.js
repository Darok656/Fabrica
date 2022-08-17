import { db } from "../../../../../Firebase";
import { collection, getDocs } from "firebase/firestore";

export default async function getAllPedidos() {
    const pedos = [];
    const collectionRef = collection(db, "pedidos")
    const snapproduc = await getDocs(collectionRef);
    snapproduc.forEach((doc) => {
        pedos.push(doc.data());
    });
    return pedos;
}
