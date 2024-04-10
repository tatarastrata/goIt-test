import { ReactNode } from 'react';
import { IAllUsersRequests, IUserRequests, TRequest } from '../types';

export interface IRequestContextPropTypes {
  children: ReactNode;
}

export interface IRequestContextData {
  userRequests: IUserRequests;
  allUsersRequests: IAllUsersRequests;
  addRequest: (request: TRequest) => void;
  deleteRequest: (requestId: string) => void;
  editRequest: (request: TRequest) => void;
  addSelectedRequest: (requestId: string | null) => void;
  selectedRequest: TRequest | null;
}
