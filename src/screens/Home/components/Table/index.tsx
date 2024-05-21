import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import Modal from '@mui/material/Modal';
import { ModalUpdateUser } from '../ModalUpdateUser';

import * as Styled from './styles';

interface IUser {
  id: number;
  nome: string;
  idade: number;
  cpf: string;
  rg: string;
  data_nasc: string;
  sexo: string;
  signo: string;
  mae: string;
  pai: string;
  email: string;
  senha: string;
  cep: string;
  endereco: string;
  numero: number;
  bairro: string;
  cidade: string;
  estado: string;
  telefone_fixo: string;
  celular: string;
  altura: string;
  peso: number;
  tipo_sanguineo: string;
  cor: string;
  createdBy: number;
}

export function TableUsers(data: Array<IUser>) {

  const [users, setUsers] = useState<[IUser]>(data?.data);
  const [userEdit, setUserEdit] = useState();
  const token = localStorage.getItem('user');
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  async function handleEditItem(user: IUser) {
    setUserEdit(user);
    handleOpen()
  }

  async function handleRemoveItem(id: number) {
    const url = `http://localhost:3000/user/${id}`;
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
        'authorization': `Bearer ${JSON.parse(token).token}`
      },
    };
    axios.delete(url, config).then((response) => {
      console.log(response.data);
    });
    window.location.reload();
  }


  useEffect(() => {
    setUsers(data?.data)
  }, [data])

  return (
    <TableContainer component={Paper} >
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Styled.ContainerView>
          <ModalUpdateUser value={userEdit} />
        </Styled.ContainerView>
      </Modal>
      <Table style={{ backgroundColor: '#f5f6fa' }} sx={{ minWidth: 950 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: 'bold' }}>Nome</TableCell>
            <TableCell style={{ fontWeight: 'bold' }} align="right">CPF</TableCell>
            <TableCell style={{ fontWeight: 'bold' }} align="right">Peso&nbsp;(g)</TableCell>
            <TableCell style={{ fontWeight: 'bold' }} align="right">Idade&nbsp;(g)</TableCell>
            <TableCell style={{ fontWeight: 'bold' }} align="right">Nascimento&nbsp;(g)</TableCell>
            <TableCell style={{ fontWeight: 'bold' }} align="right">Deletar&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((item) => (
            <TableRow
              key={item.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell
                onClick={() => handleEditItem(item)}
                component="th" scope="row">
                {item.nome}
              </TableCell>
              <TableCell onClick={() => handleEditItem(item)} align="right">{item.cpf}</TableCell>
              <TableCell onClick={() => handleEditItem(item)} align="right">{item.peso}</TableCell>
              <TableCell onClick={() => handleEditItem(item)} align="right">{item.idade}</TableCell>
              <TableCell onClick={() => handleEditItem(item)} align="right">{item.data_nasc}</TableCell>
              <TableCell
                onClick={() => { if (window.confirm('Esta certo de deletar usuario?')) handleRemoveItem(item.id) }}
                align="center"><DeleteIcon sx={{ color: '#e84118' }} style={{ cursor: 'pointer' }} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}