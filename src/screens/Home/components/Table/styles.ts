import styled from "styled-components";


export const ContainerView = styled.div`
  width: 45%;
  height: 80%;
  border-radius: 15px;

  background-color: white;
  overflow: auto;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const InputSearch = styled.input`
  padding: 10px;
  margin-bottom: 1rem;
  background-color: white;
  border: 0px solid;
  color: #2f3640;
  border-bottom-width: 1px;
  border-color: #40739e;
  outline: none;
  padding: 10px;
  border-radius: 5px;
`;