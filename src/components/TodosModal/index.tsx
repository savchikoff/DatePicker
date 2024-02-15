import React, { useRef } from 'react';
import TodoList from './TodoList';
import { ModalProps } from './types';
import { Overlay, ModalContainer, ModalHeader, CloseButton } from './styled';
import useClickOutside from '../../hooks/useClickOutside';

function Modal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) {
    return null;
  }

  const modalRef = useRef();
  useClickOutside(modalRef, onClose);

  return (
    <Overlay>
      <ModalContainer ref={modalRef}>
        <ModalHeader>
          <CloseButton onClick={onClose}>❌</CloseButton>
        </ModalHeader>
        <TodoList />
      </ModalContainer>
    </Overlay>
  );
};

export default Modal;
