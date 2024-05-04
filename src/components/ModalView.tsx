import { AddButton } from '@/atoms/AddButton';
import { Modal, Button } from 'flowbite-react';
import React, { useState, useEffect, ComponentType, Children } from 'react';

// Define your higher-order component function
export const withModal = <P extends object>(WrappedComponent: ComponentType<P>) => {
  // Return a new component
    return function ComponentWithToken(props: P) {
        const [openModal, setOpenModal] = useState(false);

        return (
            <>
                <AddButton handller={() => setOpenModal(true)}>{props?.children}</AddButton>
                <Modal show={openModal} onClose={() => setOpenModal(false)}>
                    <Modal.Header>{props?.title}</Modal.Header>
                    <Modal.Body>
                        <WrappedComponent {...props} />;
                    </Modal.Body>
                    <Modal.Footer className=" justify-end">
                        <Button onClick={props?.onClickHandler}>Create</Button>
                        <Button color="gray" onClick={() => setOpenModal(false)}>
                            Decline
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}