import React from 'react';
import { IDeleteRequestButtonPropTypes } from './delete-request-button-prop-types';
import { IconButton, useToast } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { useRequestContext } from '../../contexts/request-context';

const DeleteRequestButton: React.FC<IDeleteRequestButtonPropTypes> = ({
  requestId,
}) => {
  const { deleteRequest } = useRequestContext();
  const toast = useToast();

  const handleDeleteRequest = () => {
    deleteRequest(requestId);
    toast({
      position: 'bottom-left',
      status: 'success',
      duration: 3000,
      description: 'Your request is successfully deleted',
    });
  };

  return (
    <IconButton
      onClick={handleDeleteRequest}
      size="xs"
      aria-label="delete"
      icon={<DeleteIcon />}
    />
  );
};

export default DeleteRequestButton;
