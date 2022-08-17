import React from 'react';
import cover from "../../../../img/cover.mp4"
import './Cover.css';
import Logo from "../../../../img/logo.png";

export const Cover = () => {
  return (
    <div className='cover-container'>
      <video className='video' src={cover} autoPlay loop muted />
      <div className='dialogo'>
      <h2>Crea tus propios jabones con: </h2>
      <br/>
      <img className='imgL' src={Logo} alt="Logo"/>
      </div>
    </div>
  )
}
