import { ELocalStorageKeys } from '../types/local-storage-types';
import { TRequest } from '../types/request-types';

export const saveRequestToLocalStorage = (
  userId: string,
  request: TRequest,
): void => {
  const storedUserRequests = localStorage.getItem(
    ELocalStorageKeys.USER_REQUESTS,
  );
  const storedAllRequests = localStorage.gerItem(
    ELocalStorageKeys.ALL_REQUESTS,
  );
  const userRequests = storedUserRequests ? JSON.parse(storedUserRequests) : [];
  const allRequests = storedAllRequests ? JSON.parse(storedAllRequests) : {};

  const updatedUserRequests = [...userRequests, request];
  const updatedAllRequests = {
    ...allRequests,
    [userId]: [...(allRequests[userId] || []), request],
  };
  localStorage.setItem(
    ELocalStorageKeys.USER_REQUESTS,
    JSON.stringify(updatedUserRequests),
  );
  localStorage.setItem(
    ELocalStorageKeys.ALL_REQUESTS,
    JSON.stringify(updatedAllRequests),
  );
  console.log(localStorage);
};

export const loadRequestsFromLocalStorage = (): Array<TRequest> => {
  const data = localStorage.getItem('userRequests');
  console.log(localStorage);
  return data ? JSON.parse(data) : {};
};
