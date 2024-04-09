import { ELocalStorageKeys, IUserRequests } from '../types/local-storage-types';
import { TRequest } from '../types/request-types';

export const saveRequestToLocalStorage = (request: TRequest): void => {
  if (typeof window !== 'undefined') {
    const storedUserRequests = localStorage.getItem(
      ELocalStorageKeys.USER_REQUESTS,
    );
    const userRequests: IUserRequests = storedUserRequests
      ? JSON.parse(storedUserRequests)
      : {};

    userRequests[request.requestId] = request;

    localStorage.setItem(
      ELocalStorageKeys.USER_REQUESTS,
      JSON.stringify(userRequests),
    );
  }
};

export const loadRequestsFromLocalStorage = (): IUserRequests => {
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem(ELocalStorageKeys.USER_REQUESTS);
    return data ? JSON.parse(data) : {};
  }
  return {};
};

export const deleteRequestFromLocalStorage = (requestId: string) => {
  if (typeof window !== 'undefined') {
    const storedUserRequests = localStorage.getItem(
      ELocalStorageKeys.USER_REQUESTS,
    );

    if (storedUserRequests) {
      const userRequests: IUserRequests = JSON.parse(storedUserRequests);

      if (userRequests[requestId]) {
        console.log('deleting');
        delete userRequests[requestId];
        localStorage.setItem(
          ELocalStorageKeys.USER_REQUESTS,
          JSON.stringify(userRequests),
        );
      }
    }
  }
};

export const addSelectedRequestToLocalStorage = (
  requestId: string | null,
): void => {
  if (requestId === null) {
    localStorage.setItem(
      ELocalStorageKeys.SELECTED_REQUEST,
      JSON.stringify(null),
    );
    return;
  }

  if (typeof window !== 'undefined') {
    const storedUserRequests = localStorage.getItem(
      ELocalStorageKeys.USER_REQUESTS,
    );

    if (storedUserRequests) {
      const userRequests: IUserRequests = JSON.parse(storedUserRequests);

      if (userRequests[requestId]) {
        localStorage.setItem(
          ELocalStorageKeys.SELECTED_REQUEST,
          JSON.stringify(userRequests[requestId]),
        );
      }
    }
  }
};

export const loadSelectedRequestFromLocalStorage = (): TRequest | null => {
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem(ELocalStorageKeys.SELECTED_REQUEST);
    return data ? JSON.parse(data) : {};
  }
  return null;
};
