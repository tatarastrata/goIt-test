import React, { useCallback, useMemo, useState } from 'react';
import {
  DESCRIPTION_LENGTH,
  ETableHeaders,
} from './all-users-requests-prop-types';
import {
  Table,
  TableContainer,
  Td,
  Th,
  Thead,
  Tbody,
  Tr,
  Badge,
  Heading,
  Text,
  HStack,
} from '@chakra-ui/react';
import { formatDate } from '../../utils';
import { ERequestType } from '../../types';
import { EditRequestButton, DeleteRequestButton } from '../../components';
import { useRequestContext } from '../../contexts/request-context';

const AllUsersRequests: React.FC = () => {
  const { userRequests } = useRequestContext();
  const requests = useMemo(() => Object.values(userRequests), [userRequests]);
  const [expandedDescriptions, setExpandedDescriptions] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleDescription = useCallback((requestId: string) => {
    setExpandedDescriptions((prevExpanded) => ({
      ...prevExpanded,
      [requestId]: !prevExpanded[requestId],
    }));
  }, []);

  const truncateDescription = (description: string, requestId: string) =>
    expandedDescriptions[requestId]
      ? description
      : description.length > DESCRIPTION_LENGTH
      ? `${description.substring(0, DESCRIPTION_LENGTH)}...`
      : description;

  if (requests?.length === 0) {
    return <Heading>No requests yet</Heading>;
  }

  return (
    <>
      <Heading mb={4}>All your requests:</Heading>
      <TableContainer my={4}>
        <Table variant="simple" colorScheme="teal" size="sm">
          <Thead>
            <Tr>
              {Object.values(ETableHeaders).map((header) => (
                <Th key={header}>{header}</Th>
              ))}
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {requests.map((request) => (
              <Tr key={request.requestId}>
                <Td>
                  <Badge variant="subtle" colorScheme="teal">
                    {request.type}
                  </Badge>
                </Td>
                <Td>{request.parcelType}</Td>
                <Td>
                  {request.fromCity} 🔜 <br />
                  {request.toCity}
                </Td>
                <Td>{formatDate(request.dispatchDate)}</Td>
                <Td whiteSpace="wrap">
                  {request.type === ERequestType.ORDER && (
                    <Text
                      align="left"
                      size="sm"
                      as="button"
                      onClick={() => toggleDescription(request.requestId)}
                    >
                      {truncateDescription(
                        request.description,
                        request.requestId,
                      )}
                    </Text>
                  )}
                </Td>
                <Td>
                  <HStack spacing={1}>
                    <EditRequestButton requestId={request.requestId} />
                    <DeleteRequestButton requestId={request.requestId} />
                  </HStack>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default AllUsersRequests;
