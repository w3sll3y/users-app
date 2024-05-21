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
    outline: none;
  }
`;

export const LoggoutButton = styled.button`
  position: absolute;
  right: 25px;
  top: 25px;

  background-color: #e84118;
  &:hover {
    background-color: #c23616;
    outline: none;
  }
`;