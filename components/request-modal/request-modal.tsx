import React, { useState } from 'react';
import { Modal, ModalOverlay } from '@chakra-ui/react';
import { useRequestContext } from '../../contexts/request-context';
import { EditRequestModalContent, RequestDetailsModalContent } from '..';

const RequestModal: React.FC = () => {
  const { selectedRequest, addSelectedRequest } = useRequestContext();
  const [isEdit, setIsEdit] = useState(false);

  if (selectedRequest === null) {
    return null;
  }

  const handleCloseModal = () => {
    addSelectedRequest(null);
    setIsEdit(false);
  };

  return (
    <Modal isOpen={selectedRequest !== null} onClose={handleCloseModal}>
      <ModalOverlay />
      {isEdit ? (
        <EditRequestModalContent quiteEditing={() => setIsEdit(false)} />
      ) : (
        <RequestDetailsModalContent openEditWindow={() => setIsEdit(true)} />
      )}
    </Modal>
  );
};

export default RequestModal;
