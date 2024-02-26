import React, { MouseEvent,useRef } from 'react';

import withTheme from '@/decorators/withTheme';
import { useSelectedDate } from '@/providers/SelectedDateProvider';

import { ModalProps } from './interfaces';
import { CloseButton, Error, ModalContainer, ModalHeader, Overlay } from './styled';
import TodoList from './TodoList';

function Modal({ isOpen, onClose }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>();

  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  const { selectedDate } = useSelectedDate();

  if (!isOpen) {
    return null;
  }

  const Content = selectedDate ? <TodoList selectedDate={selectedDate} /> : <Error data-testid="todo-error">No date selected</Error>;

  return (
    <Overlay onClick={handleOverlayClick}>
      <ModalContainer ref={modalRef}>
        <ModalHeader>
          <CloseButton onClick={onClose}>❌</CloseButton>
        </ModalHeader>
        {Content}
      </ModalContainer>
    </Overlay>
  );
};

export default withTheme(Modal);
