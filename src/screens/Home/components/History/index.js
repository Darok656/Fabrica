import React from 'react'
import './History.css';
import historia from '../../../../img/historia.jpg'

export const History = () => {
    return (
        <React.Fragment>
        <div id='history' className='history-container'>
            <div className='history-img'>
                <img src={historia} alt='somos' />
            </div>
            <div className='desc'>
                <h3>¿Quiénes somos?</h3>
                <p>Somos una empresa que provee soluciones tecnológicas para artesanos 
                    dedicadosa la preparación de jabón casero mediante una máquina que 
                    automatiza el proceso de manera segura, eficaz y ecológica.</p>
                <h3>Nuestra Visión</h3>
                <p>Ser una opción viable para los artesanos en jabón casero del estado de
                    Querétaro, al garantizarles un proceso de fabricación seguro y
                    ecológico en un lapso de 10 años.</p>
            </div>
        </div>
        </React.Fragment>
    )
}
