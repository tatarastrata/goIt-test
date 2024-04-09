import { ReactNode } from 'react';
import { IUserRequests, TRequest } from '../types';

export interface IRequestContextPropTypes {
  children: ReactNode;
}

export interface IRequestContextData {
  userRequests: IUserRequests;
  addRequest: (request: TRequest) => void;
  deleteRequest: (requestId: string) => void;
  editRequest: (request: TRequest) => void;
  addSelectedRequest: (requestId: string | null) => void;
  selectedRequest: TRequest | null;
}
