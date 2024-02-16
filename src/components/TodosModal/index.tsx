import React, { useRef } from 'react';
import TodoList from './TodoList';
import { ModalProps } from './types';
import { Overlay, ModalContainer, ModalHeader, CloseButton, Error } from './styled';
import { useCalendar } from '../../providers/CalendarProvider';
import useClickOutside from '../../hooks/useClickOutside';

function Modal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) {
    return null;
  }

  const modalRef = useRef();
  useClickOutside(modalRef, onClose);

  const { selectedDate } = useCalendar();

  const Content = selectedDate ? <TodoList selectedDate={selectedDate} /> : <Error>No date selected</Error>;

  return (
    <Overlay>
      <ModalContainer ref={modalRef}>
        <ModalHeader>
          <CloseButton onClick={onClose}>❌</CloseButton>
        </ModalHeader>
        {Content}
      </ModalContainer>
    </Overlay>
  );
};

export default Modal;
