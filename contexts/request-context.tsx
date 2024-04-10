import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  IRequestContextData,
  IRequestContextPropTypes,
} from './request-context-prop-types';
import {
  addSelectedRequestToLocalStorage,
  deleteRequestFromLocalStorage,
  loadUserRequestsFromLocalStorage,
  loadSelectedRequestFromLocalStorage,
  saveUserRequestToLocalStorage,
  loadAllUsersRequestsFromLocalStorage,
  saveAllUsersRequestToLocalStorage,
} from '../utils';
import { IUserRequests, TRequest, IAllUsersRequests } from '../types';

const RequestContext = createContext<IRequestContextData>({
  userRequests: {},
  allUsersRequests: {},
  deleteRequest: () => {},
  addRequest: () => {},
  editRequest: () => {},
  addSelectedRequest: () => {},
  selectedRequest: null,
});

export const useRequestContext = () => {
  const context = useContext(RequestContext);
  if (!context) {
    throw new Error();
  }
  return context;
};

const RequestContextProvider: React.FC<IRequestContextPropTypes> = ({
  children,
}) => {
  const [userRequests, setUserRequests] = useState<IUserRequests>({});
  const [allUsersRequests, setAllUsersRequests] = useState<IAllUsersRequests>(
    {},
  );
  const [selectedRequest, setSelectedRequest] = useState<TRequest | null>(null);

  useEffect(() => {
    const storedUserRequests = loadUserRequestsFromLocalStorage();
    setUserRequests(storedUserRequests);
    const storedAllUsersRequests = loadAllUsersRequestsFromLocalStorage();
    setAllUsersRequests(storedAllUsersRequests);
    const storedSelectedRequest = loadSelectedRequestFromLocalStorage();
    setSelectedRequest(storedSelectedRequest);
  }, []);

  const addRequest = (request: TRequest) => {
    saveUserRequestToLocalStorage(request);
    setUserRequests((prevUserRequests) => ({
      ...prevUserRequests,
      [request.requestId]: request,
    }));
    setAllUsersRequests((prevAllUsersRequests) => ({
      ...prevAllUsersRequests,
      [request.userId]: [
        ...(prevAllUsersRequests[request.userId] || []),
        request,
      ],
    }));
  };

  const deleteRequest = (requestId: string) => {
    deleteRequestFromLocalStorage(requestId);
    setSelectedRequest(null);
    setUserRequests((prevUserRequests) => {
      const updatedRequests = { ...prevUserRequests };
      delete updatedRequests[requestId];
      return updatedRequests;
    });
    setAllUsersRequests((prevAllUsersRequests) => {
      const updatedAllUsersRequests = { ...prevAllUsersRequests };
      for (const userId in updatedAllUsersRequests) {
        updatedAllUsersRequests[userId] = updatedAllUsersRequests[
          userId
        ].filter((request) => request.requestId !== requestId);
      }
      return updatedAllUsersRequests;
    });
  };

  const editRequest = (updatedRequest: TRequest) => {
    setUserRequests((prevUserRequests) => ({
      ...prevUserRequests,
      [updatedRequest.requestId]: updatedRequest,
    }));
    setAllUsersRequests((prevAllUsersRequests) => {
      const updatedAllUsersRequests = { ...prevAllUsersRequests };
      for (const userId in updatedAllUsersRequests) {
        updatedAllUsersRequests[userId] = updatedAllUsersRequests[userId].map(
          (request) =>
            request.requestId === updatedRequest.requestId
              ? updatedRequest
              : request,
        );
      }
      return updatedAllUsersRequests;
    });
    if (selectedRequest?.requestId === updatedRequest.requestId) {
      addSelectedRequest(updatedRequest.requestId);
    }
    saveUserRequestToLocalStorage(updatedRequest);
    saveAllUsersRequestToLocalStorage(updatedRequest);
  };

  const addSelectedRequest = (requestId: string | null) => {
    addSelectedRequestToLocalStorage(requestId);
    if (requestId === null) {
      setSelectedRequest(null);
      return;
    }
    const selectedRequest =
      userRequests[requestId] ||
      (allUsersRequests[requestId] && allUsersRequests[requestId][0]);
    setSelectedRequest(selectedRequest || null);
  };

  const contextValue: IRequestContextData = {
    userRequests,
    allUsersRequests,
    addRequest,
    deleteRequest,
    addSelectedRequest,
    selectedRequest,
    editRequest,
  };

  return (
    <RequestContext.Provider value={contextValue}>
      {children}
    </RequestContext.Provider>
  );
};

export { RequestContext, RequestContextProvider };
