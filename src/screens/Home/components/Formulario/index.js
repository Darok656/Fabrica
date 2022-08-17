import React from "react";
import { Map } from "../Map";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./formulario.css";
import {
    BsPersonFill,
    BsPhoneFill,
    BsPaypal,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { AiFillAlert } from "react-icons/ai";
import { ImOffice } from "react-icons/im";
import Button from "react-bootstrap/Button";
import { useForm } from "../../../../Hooks/useForm";
import { Loader } from "../../../../Loader";
import { toast } from 'react-toastify'

const initialForm = {
    nombre: "",
    correo: "",
    telefono: "",
    status: "pendiente",
    bodega: ""
};

const validationsForm = (form) => {
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexTelefono = /^\(?(\d{3})\)?[-]?(\d{3})[-]?(\d{4})$/;
    let errors = {};

    if (!form.nombre.trim()) {
        errors.nombre = 'El campo nombre es requerido';
    } else if (!regexName.test(form.nombre.trim())) {
        errors.nombre = 'El campo nombre solo acepta letras y espacios en blanco'
    }

    if (!form.correo.trim()) {
        errors.correo = 'El campo correo es requerido';
    } else if (!regexEmail.test(form.correo.trim())) {
        errors.correo = 'Ingresa un correo valido'
    }

    if (!form.telefono.trim()) {
        errors.telefono = 'El campo telefono es requerido';
    } else if (!regexTelefono.test(form.telefono.trim())) {
        errors.telefono = 'Ingresa un numero de telefono valido'
    }

    if (!form.bodega.trim()) {
        errors.bodega = 'El campo bodega es requerido';
    }

    return errors;
};

export const Formulario = () => {

    //llamar al hoock
    const {
        form,
        errors,
        loading,
        response,
        handleChange,
        handleBlur,
        handleSubmit,
    } = useForm(initialForm, validationsForm);

    return (
        <React.Fragment>
            <div className="Form-container" id="pedidos">
                <div className="Formulario">
                    <h1>Adquiere tu primera maquina de jabon</h1>
                    <form onSubmit={handleSubmit} className="container">
                        <Row className="forms">
                            <Col>
                                <div className="form-group input-group">
                                    <div className="input-group-text bg-light">
                                        <BsPersonFill className="icon" />
                                    </div>
                                    <input
                                        type="text"
                                        required
                                        name="nombre"
                                        className="form-control"
                                        onBlur={handleBlur}
                                        placeholder="Nombre completo"
                                        onChange={handleChange}
                                        value={form.nombre}
                                    />
                                </div>
                                {errors.nombre && <p className="error"> <AiFillAlert /> {errors.nombre}</p>}
                            </Col>
                        </Row>
                        <Row className="forms">
                            <Col>
                                <div className="form-group input-group">
                                    <div className="input-group-text bg-light">
                                        <MdOutlineAlternateEmail className="icon" />
                                    </div>
                                    <input
                                        required
                                        type="email"
                                        name="correo"
                                        className="form-control"
                                        onBlur={handleBlur}
                                        placeholder="Correo"
                                        onChange={handleChange}
                                        value={form.correo}
                                    />
                                </div>
                                {errors.correo && <p className="error"> <AiFillAlert /> {errors.correo}</p>}
                            </Col>
                        </Row>
                        <Row className="forms">
                            <Col>
                                <div className="form-group input-group">
                                    <div className="input-group-text bg-light">
                                        <BsPhoneFill className="icon" />
                                    </div>
                                    <input
                                        required
                                        type="tel"
                                        name="telefono"
                                        className="form-control"
                                        onBlur={handleBlur}
                                        placeholder="Telefono"
                                        onChange={handleChange}
                                        value={form.telefono}
                                    />
                                </div>
                                {errors.telefono && <p className="error"> <AiFillAlert /> {errors.telefono}</p>}
                            </Col>
                        </Row>
                        <Row className="text">
                            <Col>
                                <p>
                                    Consulta las ubicaciones en el mapa{" "}
                                    <BsFillArrowRightCircleFill />
                                </p>
                            </Col>
                        </Row>
                        <Row className="forms">
                            <Col>
                                <div className="form-group input-group">
                                    <div className="input-group-text bg-light">
                                        <ImOffice className="icon" />
                                    </div>
                                    <input
                                        type="hidden"
                                        name="status"
                                        className="form-control"
                                        onBlur={handleBlur}
                                        value="pendiente"
                                        onChange={handleChange}
                                    />
                                    <select
                                        className="form-select"
                                        name="bodega"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={form.bodega}
                                    >
                                        <option>Seleciona una bodega</option>
                                        <option value="victoria">Plaza Victoria</option>
                                        <option value="antea">Plaza Antea</option>
                                        <option value="citadina">Plaza Citadina</option>
                                    </select>
                                </div>
                                {errors.bodega && <p className="error"> <AiFillAlert /> {errors.bodega}</p>}
                            </Col>
                        </Row>
                        <div className="container d-grid gap-2">
                            <Button
                                type="submit"
                                className="btn-block"
                                variant="outline-primary"
                            >
                                <BsPaypal /> Pagar
                            </Button>
                            {loading && <Loader/>}
                        </div>
                    </form>
                </div>

                <div className="Formulario-img">
                    <Map />
                </div>
            </div>
            {response && toast('Listo!!  Recoje tu pedido en 7 dias en la bodega seleccionada', {
                type: 'success',
                autoClose: 6200
            })}
        </React.Fragment>
    );
};
