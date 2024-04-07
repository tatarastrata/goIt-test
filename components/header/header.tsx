import React from 'react';
import { IHeaderPropTypes } from './header-prop-types';
import { Box, Button } from '@chakra-ui/react';
import { useNavigation } from '../../utils';

const Header: React.FC<IHeaderPropTypes> = () => {
  const { goToMain } = useNavigation();
  return (
    <Box>
      <Button onClick={goToMain}>GoIt Requests</Button>
    </Box>
  );
};

export default Header;
