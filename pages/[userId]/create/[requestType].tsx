import React from 'react';
import { useRouter } from 'next/router';
import { IRoutingParams } from '../../../types/';
import { SubmitRequestForm } from '../../../components';
import { Heading } from '@chakra-ui/react';

const RequestTypePage = () => {
  const router = useRouter();
  const { requestType }: IRoutingParams = router.query;

  return (
    <div>
      <Heading>
        Please, fill in the form to proceed with your {requestType}
      </Heading>
      <SubmitRequestForm />
    </div>
  );
};

export default RequestTypePage;
