//redirect tp [userId]/requests;
import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { RequestTypePick } from '../../../components';

const UserCreateNewRequest: React.FC = () => {
  return (
    <Box>
      <Text>Hello, user, please choose request type:</Text>
      <RequestTypePick />
    </Box>
  );
};

export default UserCreateNewRequest;
