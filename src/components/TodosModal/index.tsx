import React, { useRef } from 'react';

import withTheme from '@/decorators/withTheme';
import useClickOutside from '@/hooks/useClickOutside';
import { useSelectedDate } from '@/providers/SelectedDateProvider';

import { ModalProps } from './interfaces';
import { CloseButton, Error, ModalContainer, ModalHeader, Overlay } from './styled';
import TodoList from './TodoList';

function Modal({ isOpen, onClose }: ModalProps) {
  const modalRef = useRef();
  useClickOutside(modalRef, onClose);

  const { selectedDate } = useSelectedDate();

  if (!isOpen) {
    return null;
  }

  const Content = selectedDate ? <TodoList selectedDate={selectedDate} /> : <Error data-testid="todo-error">No date selected</Error>;

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

export default withTheme(Modal);
