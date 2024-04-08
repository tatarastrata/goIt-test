import React from 'react';
import { ETableHeaders } from './all-users-requests-prop-types';
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
} from '@chakra-ui/react';
import { loadRequestsFromLocalStorage } from '../../utils';
import { ERequestType } from '../../types';
import { formatDate } from '../../utils';

const AllUsersRequests: React.FC = () => {
  const allRequests =
    typeof window !== 'undefined' ? loadRequestsFromLocalStorage() : [];

  console.log(allRequests);

  if (allRequests?.length === 0) {
    return <Heading>No requests yet</Heading>;
  }

  return (
    <>
      <Heading mb={4}>All your requests:</Heading>
      <TableContainer my={4}>
        <Table variant="simple">
          <Thead>
            <Tr>
              {Object.values(ETableHeaders).map((header) => (
                <Th key={header}>{header}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {allRequests.map((request, index) => (
              <Tr key={index}>
                <Td>
                  <Badge variant="subtle" colorScheme="teal">
                    {request.type}
                  </Badge>
                </Td>
                <Td>{request.parcelType}</Td>
                <Td>
                  {request.fromCity} 🔜 {request.toCity}
                </Td>
                <Td>{formatDate(request.dispatchDate)}</Td>
                <Td>
                  {request.type === ERequestType.ORDER && request.description}
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
