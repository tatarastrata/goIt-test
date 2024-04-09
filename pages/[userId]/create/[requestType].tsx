// [userId]/create/[requestType]

import React from 'react';
import { useRouter } from 'next/router';
import { IRoutingParams } from '../../../types/';
import { SubmitRequestForm } from '../../../components';
import { Container, Heading } from '@chakra-ui/react';

const RequestTypePage = () => {
  const router = useRouter();
  const { requestType }: IRoutingParams = router.query;

  if (typeof window === 'undefined') {
    return null;
  }

  return (
    <div>
      <Container>
        <Heading>
          Please, fill in the form to proceed with your {requestType}
        </Heading>
        <SubmitRequestForm />
      </Container>
    </div>
  );
};

export default RequestTypePage;
