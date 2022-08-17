import React from 'react';
import { Cover } from './components/Cover';
import { Navbarr } from './components/Navbarr';
import { History } from './components/History';
import { Formulario } from './components/Formulario';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { Footer } from './components/Footer';
import { Hr } from './components/Hr';

export const Home = () => {
  return (
    <React.Fragment>
      <Navbarr />
      <Cover />
      <History />
      <Hr/>
      <Formulario />
      <ToastContainer/>
      <Footer/>
      
    </React.Fragment>
  )
}
