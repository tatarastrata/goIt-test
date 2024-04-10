import React, { useMemo, useState } from 'react';
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
  Button,
  IconButton,
} from '@chakra-ui/react';
import { formatDate } from '../../utils';
import { useRequestContext } from '../../contexts/request-context';
import { ITableSort, tableHeaders } from './all-users-requests-prop-types';
import { UpDownIcon } from '@chakra-ui/icons';
import { ERequestKeys, IOrderRequest } from '../../types';
import { compareAsc, compareDesc } from 'date-fns';

const AllUsersRequests: React.FC = () => {
  const { userRequests, addSelectedRequest } = useRequestContext();

  const requests = useMemo(() => Object.values(userRequests), [userRequests]);

  const [sorting, setSorting] = useState<ITableSort | null>();

  const handleSort = (key: ERequestKeys) => {
    if (sorting !== null && sorting?.key === key) {
      setSorting({
        key: sorting.key,
        isDesc: !sorting.isDesc,
      });
    } else {
      setSorting({
        key: key,
        isDesc: true,
      });
    }
  };

  const sortedRequests = useMemo(() => {
    if (!sorting || sorting.key === ERequestKeys.DESCRIPTION) {
      return requests;
    }

    return [...requests].sort((requestOne, requestTwo) => {
      const valueOne = (requestOne as IOrderRequest)[sorting.key];
      const valueTwo = (requestTwo as IOrderRequest)[sorting.key];

      if (sorting.key === ERequestKeys.DISPATCH_DATE) {
        return sorting.isDesc
          ? compareDesc(valueOne, valueTwo)
          : compareAsc(valueOne, valueTwo);
      }

      if (typeof valueOne === 'string' && typeof valueTwo === 'string') {
        return sorting.isDesc
          ? valueTwo.localeCompare(valueOne)
          : valueOne.localeCompare(valueTwo);
      }
      return 0;
    });
  }, [requests, sorting]);

  if (requests.length === 0) {
    return <Heading>No requests yet</Heading>;
  }

  return (
    <>
      <Heading mb={4}>All your requests:</Heading>
      <TableContainer my={4}>
        <Table variant="simple" colorScheme="teal" size="sm">
          <Thead>
            <Tr>
              {tableHeaders.map(({ key, value }) => (
                <Th key={key} onClick={() => handleSort(key)}>
                  {value}
                  <IconButton
                    size="s"
                    variant="link"
                    m={1}
                    aria-label="Sort table"
                    icon={<UpDownIcon />}
                  />
                </Th>
              ))}
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {sortedRequests.map((request) => (
              <Tr key={request.requestId}>
                <Td>
                  <Badge variant="subtle" colorScheme="teal">
                    {request.type}
                  </Badge>
                </Td>
                <Td>{request.fromCity}</Td>
                <Td>{request.toCity}</Td>
                <Td>{formatDate({ date: request.dispatchDate })}</Td>
                <Td>
                  <Button
                    size="sm"
                    onClick={() => addSelectedRequest(request.requestId)}
                  >
                    View details
                  </Button>
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
