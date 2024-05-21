import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { SignUpRequest } from "../../context/AuthProvider/utils";
import * as Styled from './styles';

export const SignUp = () => {
  const navigate = useNavigate();

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  async function handleSingup() {
    try {
      const response = await SignUpRequest(name, email, password);
      if (response?.id) {
        navigate("/login");
      }
    } catch (err) {
      console.log('23132', err);
    }
  }

  function handleGoLogin() {
    navigate("/login");
  }

  return (
    <Styled.Container>
      <Styled.ContainerLoginForm>
        <Styled.TitleLogin>SignUp</Styled.TitleLogin>
        <Styled.FormLogin onSubmit={(e) => { handleSingup(); e.preventDefault(); }}>
          <Styled.InputBox
            type="text"
            name="name"
            placeholder="Nome"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <Styled.InputBox
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <Styled.InputBox
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={e => setPassword(e.target.value)}
          />
          <Styled.ButtonsContainer>
            <Styled.ButtonSend
              type="submit"
            >
              Cadastrar-se
            </Styled.ButtonSend>
            <Styled.ButtonSend
              type="submit"
              onClick={handleGoLogin}
              outline
            >
              Voltar para login
            </Styled.ButtonSend>
          </Styled.ButtonsContainer>
        </Styled.FormLogin>
      </Styled.ContainerLoginForm>
    </Styled.Container>
  );
};
