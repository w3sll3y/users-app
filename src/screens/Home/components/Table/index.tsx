import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';

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

  useEffect(() => {
    setUsers(data?.data)
  }, [data])

  return (
    <TableContainer component={Paper} >
      <Table style={{ backgroundColor: '#f5f6fa' }} sx={{ minWidth: 950 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: 'bold' }}>Nome</TableCell>
            <TableCell style={{ fontWeight: 'bold' }} align="right">CPF</TableCell>
            <TableCell style={{ fontWeight: 'bold' }} align="right">Peso&nbsp;(g)</TableCell>
            <TableCell style={{ fontWeight: 'bold' }} align="right">Idade&nbsp;(g)</TableCell>
            <TableCell style={{ fontWeight: 'bold' }} align="right">Nascimento&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((item) => (
            <TableRow
              key={item.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.nome}
              </TableCell>
              <TableCell align="right">{item.cpf}</TableCell>
              <TableCell align="right">{item.peso}</TableCell>
              <TableCell align="right">{item.idade}</TableCell>
              <TableCell align="right">{item.data_nasc}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}