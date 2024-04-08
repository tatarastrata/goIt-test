import React from 'react';
import { HStack } from '@chakra-ui/react';
import { BackButton, LogoButton } from '../../components';

const Header: React.FC = () => {
  return (
    <header>
      <HStack boxShadow="sm" bg="gray.100" p={4} justify={'space-between'}>
        <BackButton />
        <LogoButton />
      </HStack>
    </header>
  );
};

export default Header;
