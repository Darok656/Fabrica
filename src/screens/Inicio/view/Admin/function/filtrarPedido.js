
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../../../../Firebase';

async function filtrarPedido(stringBusqueda) {

    const docusFiltrados = [];


    const collectionRef = collection(db, "pedidos");
    const queryCorreo = query(collectionRef,
        where("correo", "==", stringBusqueda)
    );
    const queryNombre = query(collectionRef,
        where("nombre", "==", stringBusqueda)
    );
    const queryBodega = query(collectionRef,
        where("bodega", "==", stringBusqueda)
    );
    const queryStatus = query(collectionRef,
        where("status", "==", stringBusqueda)
    );

    const arraySnap = await Promise.all([getDocs(queryCorreo), getDocs(queryNombre), getDocs(queryBodega), getDocs(queryStatus)]);

        arraySnap.forEach((snapshot) => {
            snapshot.forEach((doc) => {
                docusFiltrados.push(doc.data());
            });
        });
        //console.log(docusFiltrados);
        return docusFiltrados;

}

export default filtrarPedido;
