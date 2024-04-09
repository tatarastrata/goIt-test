import React from 'react';
import {
  Button,
  Container,
  Heading,
  Stack,
  useMediaQuery,
} from '@chakra-ui/react';
import { ERequestType } from '../../types/request-types';
import { useNavigation } from '../../utils';
import { IRoutingParams } from '../../types';
import { useRouter } from 'next/router';

const RequestTypePick: React.FC = () => {
  const { gotToRequestTypePage } = useNavigation();
  const router = useRouter();
  const { requestType }: IRoutingParams = router.query;
  const [isSmallerThan400] = useMediaQuery('(max-width: 400px)');

  const handleOptionSelect = (option: ERequestType) => {
    gotToRequestTypePage(option);
  };

  return (
    <Container>
      <Heading mb={4}>What request would you like to place this time?</Heading>
      <Stack
        justify="flex-start"
        direction={isSmallerThan400 ? 'column' : 'row'}
      >
        <Button
          isDisabled={!!requestType}
          onClick={() => handleOptionSelect(ERequestType.ORDER)}
        >
          Send a parcel
        </Button>
        <Button
          isDisabled={!!requestType}
          onClick={() => handleOptionSelect(ERequestType.DELIVERY)}
        >
          Deliver me a parcel
        </Button>
      </Stack>
    </Container>
  );
};

export default RequestTypePick;
