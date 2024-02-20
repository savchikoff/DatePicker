import styled from "styled-components";

const s8 = ({ theme }) => theme.sizes.s8;
const s16 = ({ theme }) => theme.sizes.s16;
const s20 = ({ theme }) => theme.sizes.s20;
const white = ({ theme }) => theme.colors.white;
const darkGrey = ({ theme }) => theme.colors.darkGrey;
const red = ({ theme }) => theme.colors.red;

export const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${darkGrey};
`;

export const Error = styled.h2`
  color: ${red};
`

export const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const ModalContainer = styled.div`
  background: ${white};
  padding: ${s20};
  border-radius: ${s8};
  width: 500px;
`;

export const CloseButton = styled.button`   
  background: none;
  border: none;
  cursor: pointer;
  font-size: ${s16};
`;