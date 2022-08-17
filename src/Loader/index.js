import React from 'react';
import { BallTriangle } from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './loader.css'

export const Loader = () => {
    return (
        <div className='contenedor'>
            <BallTriangle
                height={150}
                width={150}
                radius={5}
                color="#5271ff"
                ariaLabel="loading"
                wrapperClass={{}}
                wrapperStyle=""
            />
        </div>
    )
}
