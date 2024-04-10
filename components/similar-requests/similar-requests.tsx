import React, { useMemo, useState } from 'react';
import {
  Box,
  Button,
  HStack,
  List,
  ListItem,
  Radio,
  RadioGroup,
  Text,
} from '@chakra-ui/react';
import { useRequestContext } from '../../contexts/request-context';
import { ERequestKeys, TRequest } from '../../types';
import { formatDate } from '../../utils';
import { sentenceCase } from '../../utils/sentenceCaseUtils';

const radios: Array<[string, string]> = [
  [ERequestKeys.REQUEST_TYPE, 'Request type'],
  [ERequestKeys.FROM_CITY, 'From city'],
  [ERequestKeys.TO_CITY, 'To city'],
  [ERequestKeys.DISPATCH_DATE, 'Dispatch date'],
];

const SimilarRequests: React.FC = () => {
  const [filterFactor, setFilterFactor] = useState<string>(radios[0][0]);
  const { selectedRequest, addSelectedRequest, allUsersRequests } =
    useRequestContext();

  const requestsToDisplay = useMemo(() => {
    return selectedRequest
      ? Object.values(allUsersRequests)
          .flatMap((innerArray) => innerArray)
          .filter(
            (request) =>
              request[filterFactor as keyof TRequest] ===
                selectedRequest[filterFactor as keyof TRequest] &&
              request.requestId !== selectedRequest.requestId,
          )
      : [];
  }, [allUsersRequests, filterFactor, selectedRequest]);

  return (
    <Box w="100%">
      <Text mb={4}>Similar requests among all users:</Text>
      <RadioGroup onChange={setFilterFactor} value={filterFactor} mb={2}>
        <HStack>
          {radios.map((radio) => (
            <Radio size="sm" key={radio[0]} value={radio[0]} colorScheme="teal">
              {radio[1]}
            </Radio>
          ))}
        </HStack>
      </RadioGroup>
      <List>
        {requestsToDisplay.map((request: TRequest) => (
          <ListItem fontSize="sm" key={request.requestId}>
            <Button
              onClick={() => addSelectedRequest(request.requestId)}
              variant="link"
              size="sm"
            >
              <Text>
                {sentenceCase(request.type)}
                {` from ${request.fromCity} to ${request.toCity} for `}
                {formatDate({ date: request.dispatchDate })}
              </Text>
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SimilarRequests;
