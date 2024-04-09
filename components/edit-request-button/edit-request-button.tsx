import React from 'react';
import { IEditRequestButtonPropTypes } from './edit-request-button-prop-types';
import { IconButton } from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
import { useRequestContext } from '../../contexts/request-context';

const EditRequestButton: React.FC<IEditRequestButtonPropTypes> = ({
  requestId,
}) => {
  const { addSelectedRequest } = useRequestContext();
  const handleSelectRequestForEdit = () => addSelectedRequest(requestId);
  return (
    <IconButton
      size="xs"
      aria-label="edit"
      icon={<EditIcon />}
      onClick={handleSelectRequestForEdit}
    />
  );
};

export default EditRequestButton;
