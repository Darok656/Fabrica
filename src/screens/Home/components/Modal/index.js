import React, { useState } from "react";
import "./modal.css";
import Button from "react-bootstrap/Button";
import { AiOutlineClose } from "react-icons/ai";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { MdOutlineAlternateEmail, MdArrowForwardIos } from "react-icons/md";
import { AiFillGoogleCircle } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import { Input } from "./Input";
import { auth, db } from "../../../../Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export const Modal = ({ estado, cambiarEstado }) => {
  const [isRegistrando, setIsRegistrando] = useState(false);

  async function registrarUsuario(email, password, rol, nombre, apellido) {
    const infoUser = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    ).then((usuarioFirebase) => {
      return usuarioFirebase;
    });
    console.log(infoUser.user.email);
    const docuRef = await doc(db, `datoUser/${infoUser.user.email}`);
    setDoc(docuRef, {
      email: email,
      tipo: rol,
      nombre: nombre,
      apellido: apellido,
      maquinas: []
    });
  }

  async function loginEmailPassword(email, password) {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      return result;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  function submitHandler(e) {
    e.preventDefault();

    const email = e.target.elements.Correo.value;
    const password = e.target.elements.contrasenia.value;

    //console.log("submid", email, password, rol);

    if (isRegistrando) {
      //registart
      const rol = e.target.elements.tipo.value;
      const nombre = e.target.elements.nombre.value;
      const apellido = e.target.elements.apellido.value;
      registrarUsuario(email, password, rol, nombre, apellido);
    } else {
      //login
      loginEmailPassword(email, password);
    }
  }

  return (
    <React.Fragment>
      {estado && (
        <div className="Overlay">
          <div className="contenedorModal">
            <div className="ModalEncabezado">
              <h3>{isRegistrando ? "Registrate" : "Inicia sesión"}</h3>
            </div>
            <Button
              onClick={() => cambiarEstado(false)}
              className="close"
              variant="outline-danger"
            >
              <AiOutlineClose />
            </Button>
            <form onSubmit={submitHandler}>
              <label>Correo electronico</label>
              <Row className="forms">
                <Col>
                  <div className="form-group input-group">
                    <div className="input-group-text bg-light">
                      <MdOutlineAlternateEmail className="icon" />
                    </div>
                    <input
                      required
                      type="email"
                      name="Correo"
                      id="Correo"
                      className="form-control"
                      //onBlur={handleBlur}
                      //placeholder="Correo"
                      //onChange={handleChange}
                      //value={form.correo}
                    />
                  </div>
                  {/*errors.correo && <p className="error"> <AiFillAlert /> {errors.correo}</p>*/}
                </Col>
              </Row>
              <label>Contraseña</label>
              <Row className="forms">
                <Col>
                  <div className="form-group input-group">
                    <div className="input-group-text bg-light">
                      <RiLockPasswordFill className="icon" />
                    </div>
                    <input
                      required
                      type="password"
                      name="contrasenia"
                      id="contrasenia"
                      className="form-control"
                      //onBlur={handleBlur}
                      //placeholder="Correo"
                      //onChange={handleChange}
                      //value={form.correo}
                    />
                  </div>
                  {/*errors.correo && <p className="error"> <AiFillAlert /> {errors.correo}</p>*/}
                </Col>
              </Row>
              {isRegistrando && <Input />}
              <Row className="forms">
                <Col>
                  <div className="container d-grid gap-2">
                    <Button
                      type="submit"
                      variant="outline-info"
                      className="btn-block"
                    >
                      {isRegistrando ? "Registrate" : "Inicia sesión"}{" "}
                      <MdArrowForwardIos />
                    </Button>
                  </div>
                </Col>
                <Col>
                  <div className="container d-grid gap-2">
                    <Button type="submit" variant="outline-success">
                      Google <AiFillGoogleCircle />
                    </Button>
                  </div>
                </Col>
              </Row>
              <Row>
                <Button
                  variant="link"
                  onClick={() => setIsRegistrando(!isRegistrando)}
                >
                  {isRegistrando
                    ? "¿Ya tienes cuenta? Inicia sesión"
                    : "¿No tienes cuenta? Regístrate"}
                </Button>
              </Row>
            </form>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};
