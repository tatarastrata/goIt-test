import React, { useMemo, useState } from 'react';
import { Modal, ModalOverlay } from '@chakra-ui/react';
import { useRequestContext } from '../../contexts/request-context';
import { EditRequestModalContent, RequestDetailsModalContent } from '..';

const RequestModal: React.FC = () => {
  const { selectedRequest, addSelectedRequest, userRequests } =
    useRequestContext();
  const [isEdit, setIsEdit] = useState(false);

  const handleCloseModal = () => {
    addSelectedRequest(null);
    setIsEdit(false);
  };

  const isModalOpen = useMemo(
    () =>
      !!selectedRequest?.requestId && Object.entries(userRequests).length > 0,
    [selectedRequest?.requestId, userRequests],
  );

  if (selectedRequest === null) {
    return null;
  }

  return (
    <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
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
