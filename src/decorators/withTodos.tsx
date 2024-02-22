import React, { ComponentType, FC, useState } from "react";

import Button from "../components/Button";
import Modal from "../components/TodosModal";


const withTodos = <P extends object>(WrappedComponent: ComponentType<P>): FC<P> => {
    const [isTodoModalOpen, setIsTodoModalOpen] = useState(false);

    const handleModalOpen = () => {
        setIsTodoModalOpen(true);
    }

    const handleModalClose = () => {
        setIsTodoModalOpen(false);
    }

    function ComponentWithTodos(props: P) {
        return (
            <>
                <WrappedComponent {...props} isWithTodos />
                <Button label="Add todo" onClick={handleModalOpen} />
                <Modal isOpen={isTodoModalOpen} onClose={handleModalClose} />
            </>)
    }

    const displayName = WrappedComponent.displayName || WrappedComponent.name;
    ComponentWithTodos.displayName = `withTodos(${displayName})`;

    return ComponentWithTodos;
};

export default withTodos;