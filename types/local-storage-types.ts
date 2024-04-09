import { TRequest } from './request-types';

export enum ELocalStorageKeys {
  USER_REQUESTS = 'userRequests',
  USER_ID = 'userId',
  SELECTED_REQUEST = 'selectedRequest',
}

export interface IUserRequests {
  [requestId: string]: TRequest;
}

export interface ILocalStorage {
  [ELocalStorageKeys.USER_REQUESTS]: IUserRequests;
  [ELocalStorageKeys.USER_ID]: string;
  [ELocalStorageKeys.SELECTED_REQUEST]: TRequest;
}
