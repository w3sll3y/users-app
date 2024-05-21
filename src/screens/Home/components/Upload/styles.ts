import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  background-color: white;
  align-items: center;

  flex: 1;
  flex-direction: column;

  width: 100%;
  height: 100%;

  border-radius: 15px;
`;

export const FormInput = styled.form`
  display: flex;
  flex-direction: column;
  color: #000;
`;

export const InputButton = styled.input`
  margin-top: 5rem;
  display: flex;
`;

export const ButtonSend = styled.button<{ hasFile: boolean }>`
  margin-top: 5rem;

  background-color: #4cd137;
  cursor: ${props => props.hasFile ? 'pointer' : 'not-allowed'};
  pointer-events: ${props => props.hasFile ? 'visible' : 'none'};
  
  &:hover {
    background-color: #44bd32;
    border-color:#44bd32;
  }
`;

export const Title = styled.text`
  font-size: 18px;
  font-weight: bold;
  color: #000000;
  margin-top: 5rem;
`;
