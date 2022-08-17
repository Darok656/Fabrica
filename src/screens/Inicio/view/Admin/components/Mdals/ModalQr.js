import React, { useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap';
import { IoCodeWorkingOutline } from "react-icons/io5";
import { AiOutlineClose, AiOutlineQrcode } from "react-icons/ai";
import { generarCode } from '../../function/generarCode';
import './modal.css';
import QRCode from "qrcode";
import { database, db } from '../../../../../../Firebase';
import { ref, set } from "firebase/database";
import { updateDoc, doc } from 'firebase/firestore';

export const ModalQr = ({ isModalQr, setIsModalQr, idUser, actualizaEstadoPedidos }) => {

    const [code, cambiaCode] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const codeGerete = async () => {
        await cambiaCode(generarCode());
    }

    const generarImg = async () => {
        try {
            const response = await QRCode.toDataURL(code);
            setImageUrl(response);
            addMaquina(code);
            console.log(idUser);
            actulizaStatus(idUser);
        } catch (error) {
            console.log(error);
        }
    }

    const addMaquina = async (id) => {
        await set(ref(database, 'maquinas/' + id), {
            id: id,
            encendido: 'OFF',
            depositos: 'Vacios'
        })
    }

    const actulizaStatus = async (id) => {
        const docRef = doc(db, "pedidos", id);
        await updateDoc(docRef, {
            status: 'proceso'
        })
    }

    return (
        <React.Fragment>
            {isModalQr && (
                <div className="Overlay">
                    <div className="contenedorModal">
                        <div className="ModalEncabezado">
                            <h3>Crear el QR</h3>
                        </div>
                        <Button
                            onClick={() => {setIsModalQr(false); cambiaCode(''); setImageUrl(''); actualizaEstadoPedidos();}}
                            className="close"
                            variant="outline-danger"
                        >
                            <AiOutlineClose />
                        </Button>

                        <Form onSubmit={codeGerete}>
                            <InputGroup className="mb-2">
                                <InputGroup.Text><IoCodeWorkingOutline /></InputGroup.Text>
                                <input
                                    type='text'
                                    disabled
                                    value={code}
                                />
                                <Button variant="outline-secondary" onClick={codeGerete}>
                                    Generar codigo
                                </Button>
                                <Button variant="outline-secondary" onClick={generarImg}>
                                <AiOutlineQrcode/>
                                </Button>
                            </InputGroup>
                        </Form>

                        {imageUrl ? (
                            <a href={imageUrl} download>
                                <img src={imageUrl} className='qrcodee' alt="img" />
                            </a>) : null}

                    </div>
                </div>

            )}
        </React.Fragment>

    )
}
