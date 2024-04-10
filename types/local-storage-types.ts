import { TRequest } from './request-types';

export enum ELocalStorageKeys {
  USER_REQUESTS = 'userRequests',
  USER_ID = 'userId',
  SELECTED_REQUEST = 'selectedRequest',
  ALL_USERS_REQUESTS = 'allUsersRequests',
}

export interface IUserRequests {
  [requestId: string]: TRequest;
}

export interface IAllUsersRequests {
  [userId: string]: Array<TRequest>;
}

export interface ILocalStorage {
  [ELocalStorageKeys.USER_REQUESTS]: IUserRequests;
  [ELocalStorageKeys.USER_ID]: string;
  [ELocalStorageKeys.SELECTED_REQUEST]: TRequest;
  [ELocalStorageKeys.ALL_USERS_REQUESTS]: IAllUsersRequests;
}
