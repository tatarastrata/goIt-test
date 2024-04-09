// [id]/requests page;
import React from 'react';
import { AllUsersRequests, EditRequestModal } from '../../components';
import { Box } from '@chakra-ui/react';

const RequestsPage: React.FC = () => {
  return (
    <Box>
      <AllUsersRequests />
      <EditRequestModal />
    </Box>
  );
};

export default RequestsPage;
