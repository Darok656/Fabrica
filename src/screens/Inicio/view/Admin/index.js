import React from 'react'
import { Button, Container, Form, Stack, Table } from 'react-bootstrap'
import InputGroup from 'react-bootstrap/InputGroup';
import { RiSearchEyeLine } from "react-icons/ri";
import getAllPedidos from './function/getAllPedidos';
import { AiOutlineQrcode } from "react-icons/ai";
import { RiMailSendFill } from "react-icons/ri";
import { MdOutlineCancel } from "react-icons/md";
import { ModalQr } from './components/Mdals/ModalQr';
import { updateDoc, doc } from 'firebase/firestore';
import { db } from '../../../../Firebase';
import { eliminar } from './function/eliminar';
import filtrarPedido from './function/filtrarPedido';

export const Admin = () => {

  const [pedidos, setpedidos] = React.useState([]);

  const [isModalQr, setIsModalQr] = React.useState(false);

  const [idUser, setEmailUser] = React.useState('')

  function actualizaEstadoPedidos(){
    //getAllPedidos()
    getAllPedidos().then((pedidos) => {
      setpedidos(pedidos);
    });
  }

  async function busquedaPedido (e) {
    e.preventDefault();
    const busqueda = e.target.busqueda.value;
    const newDocus = await filtrarPedido(busqueda);
    setpedidos(newDocus);
  } 

  const enviarPedido = async (id) => {
    const docRef = doc(db, "pedidos", id);
    await updateDoc(docRef, {
        status: 'enviado'
    })
}

  React.useEffect(() => {
    actualizaEstadoPedidos();
  }, [])

  return (
    <Container>
      <ModalQr isModalQr={isModalQr} setIsModalQr={setIsModalQr} idUser={idUser} actualizaEstadoPedidos={actualizaEstadoPedidos}/>
      <Form onSubmit={busquedaPedido}>
        <Stack direction='horizontal'>
          <InputGroup controlId='busqueda' className='w-75 m-3' size='lg'>
          <InputGroup.Text><RiSearchEyeLine/></InputGroup.Text>
            <Form.Control id='busqueda' type='text' placeholder='Buscar'/>
          </InputGroup>
          <Button variant="outline-success" type='submit'>
            Buscar
          </Button>
          <Button className='mx-3' variant="outline-danger" onClick={() => {
            const input = document.getElementById("busqueda");
            input.value = "";
            actualizaEstadoPedidos();
          }}>Borrar</Button>
        </Stack>
      </Form>

      <hr className='container' />

    <Table>

      <thead>
        <tr>
          <th>#</th>
          <th>Correo</th>
          <th>Nombre</th>
          <th>Telefono</th>
          <th>Bodega</th>
          <th>statud</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {pedidos && pedidos.map((pedidos, index) => (
          <tr key={index}>
            <td>{index +1}</td>
            <td>{pedidos.correo}</td>
            <td>{pedidos.nombre}</td>
            <td>{pedidos.telefono}</td>
            <td>{pedidos.bodega}</td>
            <td>{pedidos.status}</td>
            <td>
              {pedidos.status === 'pendiente' ? <Button onClick={() => {setIsModalQr(!isModalQr); setEmailUser(pedidos.id)}} variant='info'><AiOutlineQrcode/></Button> : null}
              {pedidos.status === 'proceso' ? <Button variant='success' onClick={() => {enviarPedido(pedidos.id); actualizaEstadoPedidos();}}><RiMailSendFill/></Button> : null}
              <Button variant='danger' onClick={() => {
                eliminar(pedidos.id).then(confirmacion => {
                  actualizaEstadoPedidos();
                });
                }} className='mx-2'><MdOutlineCancel/></Button>
              
            </td>
          </tr>
        ))}
      </tbody>

    </Table>

    </Container>
  )
}
