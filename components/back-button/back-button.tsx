import React, { useMemo } from 'react';
import { Box, IconButton } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';
import { IRoutingParams } from '../../types';

const BackButton: React.FC = () => {
  const router = useRouter();
  const { userId }: IRoutingParams = router.query;

  const goBack = () => {
    router.back();
  };

  const isPresent = useMemo(() => !!userId, [userId]);

  return (
    <Box>
      {isPresent && (
        <IconButton
          variant="outline"
          colorScheme="teal"
          aria-label="Go back"
          icon={<ArrowBackIcon />}
          onClick={goBack}
        />
      )}
    </Box>
  );
};

export default BackButton;
