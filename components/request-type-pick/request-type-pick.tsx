import React from 'react';
import { IRequestTypePickPropTypes } from './request-type-pick-prop-types';
import { Button, Container, Heading, HStack } from '@chakra-ui/react';
import { ERequestType } from '../../types/request-types';
import { useNavigation } from '../../utils';
import { IRoutingParams } from '../../types';
import { useRouter } from 'next/router';

const RequestTypePick: React.FC<IRequestTypePickPropTypes> = () => {
  const { gotToRequestTypePage } = useNavigation();
  const router = useRouter();
  const { requestType }: IRoutingParams = router.query;

  const handleOptionSelect = (option: ERequestType) => {
    gotToRequestTypePage(option);
  };

  return (
    <Container>
      <Heading mb={4}>What request would you like to place this time?</Heading>
      <HStack justify={'center'}>
        <Button
          isDisabled={!!requestType}
          onClick={() => handleOptionSelect(ERequestType.ORDER)}
        >
          Order
        </Button>
        <Button
          isDisabled={!!requestType}
          onClick={() => handleOptionSelect(ERequestType.DELIVERY)}
        >
          Delivery
        </Button>
      </HStack>
    </Container>
  );
};

export default RequestTypePick;
