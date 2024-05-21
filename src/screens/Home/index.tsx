import { useEffect, useState } from 'react';
import { GetUSers } from '../../context/AuthProvider/utils';

import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider/useAuth';
import { TableUsers } from './components/Table';
import * as Styled from './styles';

export function Home() {
  const token = localStorage.getItem('user');
  const auth = useAuth();
  const navigate = useNavigate();
  const [data, setData] = useState<[]>([]);

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
      <Styled.ImportButton>
        Importar JSON
      </Styled.ImportButton>
      <Styled.LoggoutButton onClick={handleLoggout}>
        Sair
      </Styled.LoggoutButton>
      <Styled.ContainerList>
        <TableUsers data={data} />
      </Styled.ContainerList>
    </Styled.Container>
  )
}