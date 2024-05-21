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

export const InputType = styled.input`
  margin: 0 1rem  0.8rem; 
  background-color: red;
  display: flex;

  font-family: Verdana, Geneva, Tahoma, sans-serif;
  background-color: transparent;
  border: 0px solid;
  color: #2f3640;
  border-bottom-width: 1px;
  border-color: #40739e;
  outline: none;
  padding: 10px;
  border-radius: 5px;
`;

export const ButtonSend = styled.button<{ hasUser: boolean }>`
  margin-top: 5rem;
  margin-bottom: 5rem;
  background-color: #4cd137;
  cursor: ${props => props.hasUser ? 'pointer' : 'not-allowed'};
  pointer-events: ${props => props.hasUser ? 'visible' : 'none'};
  
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
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;


export const ContainerInput = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LabelContainer = styled.div`
  display: flex;
  margin-top: 0.8rem;
  position: relative;
  justify-content: space-around;
  flex-direction: column;
`;

export const LabelInput = styled.label`
  position: absolute; 
  top: -0.8rem; 
  left: 0.8rem; 
  display: flex;
  justify-content: center; 
  align-items: center;
  font-style: italic;
  color: #c23616;
`;