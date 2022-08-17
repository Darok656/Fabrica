import { useState } from 'react'
import { collection, doc, setDoc, updateDoc } from "firebase/firestore";
//import { collection, addDoc } from "firebase/firestore";
import { db } from "../Firebase";

export const useForm = (inicialForm, validateForm) => {

     //insertar base de datos a Firebase
  const newPedidos = doc(collection(db, "pedidos"));
  const addPedido = async (pedidoObject) => {
    console.log(pedidoObject);
    await setDoc(newPedidos, pedidoObject);
    //no await addDoc(collection(db, "pedidos"), {pedidoObject});
    console.log(newPedidos.id);
    ingrsarid(newPedidos.id);
   

  };

  const ingrsarid = async (idpedido) =>{
    const newId = doc(db, "pedidos", idpedido);
    await updateDoc (newId, {
        id: idpedido
    }) 
  } 

    const [form, setForm] = useState(inicialForm);

    const [errors, setErrors] = useState({});

    const [loading, setLoading] = useState(false);

    const [response, setResponse] = useState(null);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleBlur = (e) => {
        handleChange(e);
        setErrors(validateForm(form));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validateForm(form));

        if(Object.keys(errors).length === 0) {
            //alert("Pedido solicitado. En un lapzo minimo de 7 dias habiles recoje tu pedido en la bodega seleccionada")
            setLoading(true);
            addPedido(form);
            setTimeout(() => {setLoading(false)}, 3000);
            console.log("aver")
            setResponse(true);
            setTimeout(() => {setForm(inicialForm)}, 1000);
            setTimeout(() => {setResponse(false)}, 10)
        }else {
            return ;
        }
    }

    return {
        form, errors, loading, response, handleChange, handleBlur, handleSubmit
    }

}
