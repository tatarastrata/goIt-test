import React from 'react';
import { useRouter } from 'next/router';
import { IRoutingParams } from '../../../types/';
import { RequestTypePick } from '../../../components';

const RequestTypePage = () => {
  const router = useRouter();
  const { userId, requestType }: IRoutingParams = router.query;

  return (
    <div>
      <RequestTypePick />
      <h1>
        {requestType} Request Page for User ID: {userId}
      </h1>
      {/* Render content specific to the request type */}
    </div>
  );
};

export default RequestTypePage;
