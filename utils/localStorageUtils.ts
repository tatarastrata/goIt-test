import {
  ELocalStorageKeys,
  IAllUsersRequests,
  IUserRequests,
} from '../types/local-storage-types';
import { TRequest } from '../types/request-types';

export const saveAllUsersRequestToLocalStorage = (request: TRequest): void => {
  if (typeof window !== 'undefined') {
    const storedAllUsersRequests = localStorage.getItem(
      ELocalStorageKeys.ALL_USERS_REQUESTS,
    );
    const allUsersRequests: IAllUsersRequests = storedAllUsersRequests
      ? JSON.parse(storedAllUsersRequests)
      : {};

    if (!allUsersRequests[request.userId]) {
      allUsersRequests[request.userId] = [];
    }

    allUsersRequests[request.userId].push(request);

    localStorage.setItem(
      ELocalStorageKeys.ALL_USERS_REQUESTS,
      JSON.stringify(allUsersRequests),
    );
  }
};

export const saveUserRequestToLocalStorage = (request: TRequest): void => {
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

export const loadUserRequestsFromLocalStorage = (): IUserRequests => {
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem(ELocalStorageKeys.USER_REQUESTS);
    return data ? JSON.parse(data) : {};
  }
  return {};
};

export const loadAllUsersRequestsFromLocalStorage = (): IAllUsersRequests => {
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem(ELocalStorageKeys.ALL_USERS_REQUESTS);
    return data ? JSON.parse(data) : {};
  }
  return {};
};

export const deleteRequestFromLocalStorage = (requestId: string) => {
  if (typeof window !== 'undefined') {
    const storedUserRequests = localStorage.getItem(
      ELocalStorageKeys.USER_REQUESTS,
    );
    addSelectedRequestToLocalStorage(null);

    if (storedUserRequests) {
      const userRequests: IUserRequests = JSON.parse(storedUserRequests);

      if (userRequests[requestId]) {
        delete userRequests[requestId];
        localStorage.setItem(
          ELocalStorageKeys.USER_REQUESTS,
          JSON.stringify(userRequests),
        );

        const storedAllUsersRequests = localStorage.getItem(
          ELocalStorageKeys.ALL_USERS_REQUESTS,
        );
        if (storedAllUsersRequests) {
          const allUsersRequests: IAllUsersRequests = JSON.parse(
            storedAllUsersRequests,
          );
          for (const userId in allUsersRequests) {
            allUsersRequests[userId] = allUsersRequests[userId].filter(
              (request: TRequest) => request.requestId !== requestId,
            );
          }
          localStorage.setItem(
            ELocalStorageKeys.ALL_USERS_REQUESTS,
            JSON.stringify(allUsersRequests),
          );
        }
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
