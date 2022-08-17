import React, { useState } from 'react';
import './App.css';
import { Home } from '../screens/Home';
import  {Inicio}  from '../screens/Inicio'

import {auth, db} from '../Firebase'
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore"



function App() {

  const [user, setUser] = useState(null);

  async function getRol(email) {
    const docuRef = doc(db, `datoUser/${email}`);
    const docuCifrada = await getDoc(docuRef);
    const info = docuCifrada.data().tipo;
    console.log(info)
    return info;
  }

  function setUserFirebase (usuarioFirebase){
    getRol(usuarioFirebase.email).then((rol) => {
      const dataUser = {
        email: usuarioFirebase.email,
        rol: rol,
      };
      setUser(dataUser);
    });
  }

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      if (!user) {
        
        setUserFirebase(usuarioFirebase);
      }
    } else {
      setUser(null);
    }
  })

  return <>{user ? <Inicio user={user} /> : <Home/>}</>
}

export default App;
