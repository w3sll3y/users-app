import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  width: 100%;
  background-color: #273c75;
  position: relative;
  height: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ContainerList = styled.section`
  margin: 15rem 0;
  display: flex;
  flex-direction: column;
  position: relative;
  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

export const Name = styled.text`
  margin: 5px;
`;

export const ImportButton = styled.button`
  position: absolute;
  left: 25px;
  top: 25px;

  background-color: #353b48;
  &:hover {
    background-color: #2f3640;
    border-color:#2f3640;

  }
`;

export const LoggoutButton = styled.button`
  position: absolute;
  right: 25px;
  top: 25px;

  background-color: #e84118;
  &:hover {
    background-color: #c23616;
    border-color:#c23616;
  }
`;

export const ContainerView = styled.div`
  width: 40%;
  height: 40%;
  border-radius: 15px;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const ContainerModalUser = styled.div`
  width: 45%;
  height: 80%;
  overflow: auto;
  border-radius: 15px;
  background-color: white;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const ButtonAdd = styled.button`
  margin-bottom: 1rem;
  background-color: #4cd137;
  width: 11rem;
  &:hover {
    background-color: #44bd32;
    border-color:#44bd32;
  }
`;