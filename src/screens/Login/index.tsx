import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider/useAuth";
import { useState } from "react";

import * as Styled from './styles';

export const Login = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  async function handleLogin() {
    try {
      const response = await auth.authenticate(email, password);
      if (response === undefined) {
        navigate("/home");
        window.location.reload();
      }
    } catch (err) {
      console.log(err);
    }
  }

  function handleGoSignUp() {
    navigate("/signup");
  }

  return (
    <Styled.Container>
      <Styled.ContainerLoginForm>
        <Styled.TitleLogin>Login</Styled.TitleLogin>
        <Styled.FormLogin onSubmit={(e) => { handleLogin(); e.preventDefault(); }}>
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
              Login
            </Styled.ButtonSend>
            <Styled.ButtonSend
              type="submit"
              onClick={handleGoSignUp}
              outline
            >
              Cadastrar-se
            </Styled.ButtonSend>
          </Styled.ButtonsContainer>
        </Styled.FormLogin>
      </Styled.ContainerLoginForm>
    </Styled.Container>
  );
};
