import React from 'react';
import { Box, Grid, GridItem, Text } from '@chakra-ui/react';
import { useRequestContext } from '../../contexts/request-context';
import { formatDate } from '../../utils';
import { ERequestType } from '../../types';
import { v4 as uuidv4 } from 'uuid';

const paragraphAttributes = {
  fontSize: 'sm',
  mb: 1,
};

const RequestDetails: React.FC = () => {
  const { selectedRequest } = useRequestContext();

  const objectLiteral = {
    ['Request type:']: selectedRequest?.type,
    ['From city:']: selectedRequest?.fromCity,
    ['To city:']: selectedRequest?.toCity,
    ['Dispatch date:']: formatDate({
      date: selectedRequest?.dispatchDate,
      isExpanded: true,
    }),
    ['Parcel type:']: selectedRequest?.parcelType,
    ['Request comment:']:
      selectedRequest?.type === ERequestType.ORDER
        ? selectedRequest.description
        : null,
  };

  return (
    <Box w="100%">
      <Grid templateColumns={'repeat(3, 1fr)'} gap={2}>
        <GridItem colSpan={1}>
          {Object.entries(objectLiteral).map(([key, value]) => {
            if (value !== null) {
              return (
                <Text key={uuidv4()} {...paragraphAttributes}>
                  {key}
                </Text>
              );
            }
          })}
        </GridItem>
        <GridItem colSpan={2}>
          {Object.values(objectLiteral).map((value) => {
            if (value !== null) {
              return (
                <Text key={uuidv4()} {...paragraphAttributes}>
                  {value}
                </Text>
              );
            }
          })}
        </GridItem>
      </Grid>
    </Box>
  );
};

export default RequestDetails;
