// [id]/requests page;
import React from 'react';
import { AllUsersRequests } from '../../components';
import { Box, Heading } from '@chakra-ui/react';

const RequestsPage: React.FC = () => {
  return (
    <Box>
      <AllUsersRequests />
    </Box>
  );
};

export default RequestsPage;
