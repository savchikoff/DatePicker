import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Error = styled.h2`
  color: #FD1E1E;
`

export const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const ModalContainer = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 500px;
`;

export const CloseButton = styled.button`   
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
`;