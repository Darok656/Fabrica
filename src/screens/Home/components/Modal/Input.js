import React from 'react';

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { BsPersonBadgeFill } from "react-icons/bs";

export const Input = () => {
  return (
   
    <Row className="forms">
                  <Col>
                    <div className="form-group input-group">
                      <div className="input-group-text bg-light">
                        <BsPersonBadgeFill className="icon" />
                      </div>
                      <input
                        required
                        type="text"
                        name="nombre"
                        id="nombre"
                        className="form-control"
                        placeholder='Nombre'
                      //onBlur={handleBlur}
                      //placeholder="Correo"
                      //onChange={handleChange}
                      //value={form.correo}
                      />
                    </div>
                    {/*errors.correo && <p className="error"> <AiFillAlert /> {errors.correo}</p>*/}
                  </Col>
                  <Col>
                    <div className="form-group input-group">
                      <div className="input-group-text bg-light">
                        <BsPersonBadgeFill className="icon" />
                      </div>
                      <input
                        required
                        type="text"
                        name="apellido"
                        id="apellido"
                        className="form-control"
                        placeholder='Apellido'
                      //onBlur={handleBlur}
                      //placeholder="Correo"
                      //onChange={handleChange}
                      //value={form.correo}
                      />
                    </div>
                    {/*errors.correo && <p className="error"> <AiFillAlert /> {errors.correo}</p>*/}
                  </Col>
                  <input type='hidden' name='tipo' id='tipo' className='form-control' value="usuario" />
                </Row>
  )
}
