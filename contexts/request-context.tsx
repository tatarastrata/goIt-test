import React, { createContext, useContext, useState } from 'react';
import {
  IRequestContextData,
  IRequestContextPropTypes,
} from './request-context-prop-types';
import {
  addSelectedRequestToLocalStorage,
  deleteRequestFromLocalStorage,
  loadRequestsFromLocalStorage,
  loadSelectedRequestFromLocalStorage,
  saveRequestToLocalStorage,
} from '../utils';
import { ELocalStorageKeys, IUserRequests, TRequest } from '../types';

// Create the context
const RequestContext = createContext<IRequestContextData>({
  userRequests: {},
  deleteRequest: () => {},
  addRequest: () => {},
  editRequest: () => {},
  addSelectedRequest: () => {},
  selectedRequest: null,
});

// Custom hook to consume the context
export const useRequestContext = () => {
  const context = useContext(RequestContext);
  if (!context) {
    throw new Error();
  }
  return context;
};

// Provider component
const RequestContextProvider: React.FC<IRequestContextPropTypes> = ({
  children,
}) => {
  // Load initial user requests from local storage
  const [userRequests, setUserRequests] = useState(
    loadRequestsFromLocalStorage(),
  );
  const [selectedRequest, setSelectedRequest] = useState(
    loadSelectedRequestFromLocalStorage(),
  );

  // Function to add a request
  const addRequest = (request: TRequest) => {
    saveRequestToLocalStorage(request);
    setUserRequests((prevUserRequests) => ({
      ...prevUserRequests,
      [request.requestId]: request,
    }));
  };

  // Function to delete a request
  const deleteRequest = (requestId: string) => {
    deleteRequestFromLocalStorage(requestId);
    setUserRequests((prevUserRequests) => {
      const updatedRequests = { ...prevUserRequests };
      delete updatedRequests[requestId];
      return updatedRequests;
    });
  };

  //Function to edit a request
  const editRequest = (updatedRequest: TRequest) => {
    const storedUserRequests = localStorage.getItem(
      ELocalStorageKeys.USER_REQUESTS,
    );

    if (storedUserRequests) {
      const userRequests: IUserRequests = JSON.parse(storedUserRequests);

      if (userRequests[updatedRequest.requestId]) {
        // Update the request in local storage
        userRequests[updatedRequest.requestId] = updatedRequest;

        localStorage.setItem(
          ELocalStorageKeys.USER_REQUESTS,
          JSON.stringify(userRequests),
        );

        // Update the state to trigger re-render
        setUserRequests({ ...userRequests });
      }
    }
  };

  //Function to add a selectedRequest
  const addSelectedRequest = (requestId: string | null) => {
    addSelectedRequestToLocalStorage(requestId);
    const storedUserRequests = localStorage.getItem(
      ELocalStorageKeys.USER_REQUESTS,
    );

    if (requestId == null) {
      setSelectedRequest(null);
      return;
    }

    if (storedUserRequests) {
      const userRequests: IUserRequests = JSON.parse(storedUserRequests);
      const selectedRequest = userRequests[requestId];
      setSelectedRequest(selectedRequest);
    }
  };

  // Context value
  const contextValue: IRequestContextData = {
    userRequests,
    addRequest,
    deleteRequest,
    addSelectedRequest,
    selectedRequest,
    editRequest,
  };

  // Render the provider with context value and children
  return (
    <RequestContext.Provider value={contextValue}>
      {children}
    </RequestContext.Provider>
  );
};

export { RequestContext, RequestContextProvider };
