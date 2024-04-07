import React, { useEffect, useState } from 'react';
import { IMainPropTypes } from './main-prop-types';
import { Button, Container, HStack } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';
import { ELocalStorageKeys } from '../../types/local-storage-types';
import { useNavigation } from '../../utils';

const Main: React.FC<IMainPropTypes> = () => {
  const { goToNewRequestPage } = useNavigation();
  const [userId, setUserId] = useState<string>('');

  useEffect(() => {
    const currentUserId =
      localStorage.getItem(ELocalStorageKeys.USER_ID) || uuidv4();
    localStorage.setItem(ELocalStorageKeys.USER_ID, currentUserId);
    setUserId(currentUserId);
  }, []);

  return (
    <Container p={4}>
      <HStack>
        <Button onClick={() => goToNewRequestPage(userId)}>
          Place new request
        </Button>
        <Button>Check all your requests</Button>
      </HStack>
    </Container>
  );
};

export default Main;
