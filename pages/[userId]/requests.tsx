// [id]/requests page;
import React from 'react';
import { AllUsersRequests, RequestModal } from '../../components';
import { Box } from '@chakra-ui/react';

const RequestsPage: React.FC = () => {
  return (
    <Box px="4vh">
      <AllUsersRequests />
      <RequestModal />
    </Box>
  );
};

export default RequestsPage;
