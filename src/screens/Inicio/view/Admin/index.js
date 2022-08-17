import React from 'react'
import { Button, Container, Form, Stack, Table } from 'react-bootstrap'
import InputGroup from 'react-bootstrap/InputGroup';
import { RiSearchEyeLine } from "react-icons/ri";
import getAllPedidos from './function/getAllPedidos';
import { AiOutlineQrcode } from "react-icons/ai";
import { RiMailSendFill } from "react-icons/ri";
import { ModalQr } from './components/Mdals/ModalQr';

export const Admin = () => {

  const [pedidos, setpedidos] = React.useState([]);

  const [isModalQr, setIsModalQr] = React.useState(false);

  const [emailUser, setEmailUser] = React.useState('')

  function actualizaEstadoPedidos(){
    //getAllPedidos()
    getAllPedidos().then((pedidos) => {
      setpedidos(pedidos);
    });
  }

  React.useEffect(() => {
    actualizaEstadoPedidos();
  }, [])

  return (
    <Container>
      <ModalQr isModalQr={isModalQr} setIsModalQr={setIsModalQr} emailUser={emailUser}/>
      <Form>
        <Stack direction='horizontal'>
          <InputGroup controlId='busqueda' className='w-75 m-3' size='lg'>
          <InputGroup.Text id="basic-addon1"><RiSearchEyeLine/></InputGroup.Text>
            <Form.Control type='text' placeholder='Buscar'/>
          </InputGroup>
          <Button variant="outline-success" type='submit'>
            Buscar
          </Button>
          <Button className='mx-3' variant="outline-danger">Borrar</Button>
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
              <Button onClick={() => {setIsModalQr(!isModalQr); setEmailUser(pedidos)}} className='mx-2' variant='info'><AiOutlineQrcode/></Button>
              <Button variant='success'><RiMailSendFill/></Button>
            </td>
          </tr>
        ))}
      </tbody>

    </Table>

    </Container>
  )
}
