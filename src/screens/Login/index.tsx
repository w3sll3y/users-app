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

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={(e) => { handleLogin(); e.preventDefault(); }}>
        <input type="text" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Entrar</button>
      </form>
    </>
  );
};
