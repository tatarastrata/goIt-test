import React, { useEffect, useState } from 'react';
import { IMainPropTypes } from './main-prop-types';
import {
  Button,
  Container,
  Heading,
  Stack,
  useMediaQuery,
} from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';
import { ELocalStorageKeys } from '../../types/local-storage-types';
import { useNavigation } from '../../utils';

const Main: React.FC<IMainPropTypes> = () => {
  const { goToNewRequestPage, goToUserRequestsPage } = useNavigation();
  const [userId, setUserId] = useState<string>('');
  const [isSmallerThat440] = useMediaQuery('(max-width: 440px)');

  useEffect(() => {
    const currentUserId =
      localStorage.getItem(ELocalStorageKeys.USER_ID) || uuidv4();
    localStorage.setItem(ELocalStorageKeys.USER_ID, currentUserId);
    setUserId(currentUserId);
  }, []);

  return (
    <Container p={4}>
      <Heading mb={4}>What would you like to do?</Heading>
      <Stack direction={isSmallerThat440 ? 'column' : 'row'}>
        <Button onClick={() => goToNewRequestPage(userId)}>
          Place new request
        </Button>
        <Button onClick={() => goToUserRequestsPage(userId)}>
          Check all your requests
        </Button>
      </Stack>
    </Container>
  );
};

export default Main;
