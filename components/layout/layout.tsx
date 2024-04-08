import React, { ReactNode } from 'react';
import Header from '../header';
import { Box } from '@chakra-ui/react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box px={4} minH="100%">
      <Header />
      <main>
        <Box pt={24} minH="100%">
          {children}
        </Box>
      </main>
    </Box>
  );
};

export default Layout;
