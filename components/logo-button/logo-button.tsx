import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import { useNavigation } from '../../utils';

const LogoButton: React.FC = () => {
  const { goToMain } = useNavigation();

  return (
    <Box>
      <Button onClick={goToMain}>📦 GoIt Requests</Button>
    </Box>
  );
};

export default LogoButton;
