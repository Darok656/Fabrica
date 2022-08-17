import React from 'react'
import Prototipo from '../../../../img/1.png'
import { RiWhatsappFill } from "react-icons/ri";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import './footer.css'

export const Footer = () => {
  return (
    <footer className='footer'>
        <div className='prototipo'>
            <h2>El prototipo</h2>
            <div className='contenedorImg'>
                <img src={Prototipo} alt="prototipo" />
            </div>
        </div>
        <div className='footer-sns'>
            <h2>Contactanos en:</h2>
            <div className='sns-link'>
                <a href="https://es-la.facebook.com/UTEQro/">
                    <RiWhatsappFill/>
                </a>
                <a href="https://es-la.facebook.com/UTEQro/">
                    <FaFacebook/>
                </a>
                <a href="https://ca.linkedin.com/school/uteq/?trk=public_profile_school_profile-section-card_full-click">
                    <FaLinkedin/>
                </a>
            </div>
        </div>
        <div className='link'>
            <a href="https://www.uteq.edu.mx/"><h5 className='text-link'>Uteq.edu.com</h5></a>
        </div>
    </footer>
  )
}
