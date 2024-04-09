import { ERequestType } from './request-types';

export enum ERoutes {
  MAIN = '/',
  REQUESTS = '/requests',
  CREATE = '/create',
  ORDER = '/order',
  DELIVERY = '/delivery',
}

export interface IRoutingParams {
  userId?: string;
  requestType?: ERequestType;
}
