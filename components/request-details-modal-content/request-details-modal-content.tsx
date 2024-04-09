import React from 'react';
import { IRequestDetailsModalContentPropTypes } from './request-details-modal-content-prop-types';
import {
  Button,
  Divider,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useToast,
  VStack,
} from '@chakra-ui/react';
import { useRequestContext } from '../../contexts/request-context';
import { RequestDetails, SimilarRequests } from '../../components';

const RequestDetailsModalContent: React.FC<
  IRequestDetailsModalContentPropTypes
> = ({ openEditWindow }) => {
  const toast = useToast();
  const { selectedRequest, deleteRequest } = useRequestContext();

  if (selectedRequest === null) {
    return (
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>OOps, something went wrong</ModalBody>
      </ModalContent>
    );
  }

  const handleDeleteRequest = () => {
    deleteRequest(selectedRequest.requestId);
    toast({
      status: 'success',
      duration: 3000,
      description: 'Your request is successfully deleted',
    });
  };

  return (
    <ModalContent>
      <ModalHeader>Request Details</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <VStack spacing={2}>
          <RequestDetails />
          <Divider />
          <SimilarRequests />
        </VStack>
      </ModalBody>
      <ModalFooter>
        <Button size="sm" variant="ghost" onClick={openEditWindow}>
          Edit this request
        </Button>
        <Button size="sm" variant="ghost" onClick={handleDeleteRequest}>
          Delete this request
        </Button>
      </ModalFooter>
    </ModalContent>
  );
};

export default RequestDetailsModalContent;
