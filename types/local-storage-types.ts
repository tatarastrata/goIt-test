import { TRequest } from './request-types';

export enum ELocalStorageKeys {
  USER_REQUESTS = 'userRequests',
  USER_ID = 'userId',
  ALL_REQUESTS = 'allRequests',
}

export interface ILocalStorage {
  [ELocalStorageKeys.USER_REQUESTS]: Array<TRequest>;
  [ELocalStorageKeys.USER_ID]: string;
  [ELocalStorageKeys.ALL_REQUESTS]: {
    [userId: string]: Array<TRequest>;
  };
}
