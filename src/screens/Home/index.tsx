import { useEffect, useState } from 'react';
import { GetUSers } from '../../context/AuthProvider/utils';

import Modal from '@mui/material/Modal';

import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider/useAuth';
import { TableUsers } from './components/Table';
import * as Styled from './styles';
import { UploadView } from './components/Upload';
import { ModalNewUser } from './components/ModalNewUser';

export function Home() {
  const token = localStorage.getItem('user');
  const auth = useAuth();
  const navigate = useNavigate();


  const [data, setData] = useState<[]>([]);
  const [open, setOpen] = useState(false);
  const [openModalUser, setOpenModalUser] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOpenModalUser = () => setOpenModalUser(true);
  const handleCloseModalUser = () => setOpenModalUser(false);

  async function getAllUsers() {
    const response = await GetUSers(JSON.parse(token).token);
    await setData(response)
  }

  async function handleLoggout() {
    auth.logout();
    navigate('/login');
    window.location.reload();
  }

  useEffect(() => {
    getAllUsers();
  }, [])

  return (
    <Styled.Container>
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
          <UploadView />
        </Styled.ContainerView>
      </Modal>

      <Styled.ImportButton onClick={handleOpen}>
        Importar JSON
      </Styled.ImportButton>

      <Styled.LoggoutButton onClick={handleLoggout}>
        Sair
      </Styled.LoggoutButton>

      <Styled.ContainerList>
        <Styled.ButtonAdd onClick={handleOpenModalUser}>
          Adicionar Usuario
        </Styled.ButtonAdd>
        <TableUsers data={data} />
      </Styled.ContainerList>

      <Modal
        open={openModalUser}
        onClose={handleCloseModalUser}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Styled.ContainerModalUser>
          <ModalNewUser />
        </Styled.ContainerModalUser>
      </Modal>
    </Styled.Container>
  )
}