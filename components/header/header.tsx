import React from 'react';
import { Box, HStack } from '@chakra-ui/react';
import { BackButton, LogoButton } from '../../components';

const Header: React.FC = () => {
  return (
    <header className={'pageHeader'}>
      <Box bg="gray.100">
        <HStack boxShadow="sm" p={4} justify={'space-between'} px="8vw">
          <BackButton />
          <LogoButton />
        </HStack>
      </Box>
    </header>
  );
};

export default Header;
