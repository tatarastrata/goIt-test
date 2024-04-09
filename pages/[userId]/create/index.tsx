//redirect tp [userId]/requests;
import { Box } from '@chakra-ui/react';
import React from 'react';
import { RequestTypePick } from '../../../components';

const UserCreateNewRequest: React.FC = () => {
  return (
    <Box>
      <RequestTypePick />
    </Box>
  );
};

export default UserCreateNewRequest;
