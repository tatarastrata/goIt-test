import { ERequestKeys } from '../../types';

export enum ETableHeaders {
  REQUEST_TYPE = 'Request',
  FROM_CITY = 'From city',
  DESTINATION = 'Destination',
  DATE = 'Date',
}

export interface ITableHeader {
  key: ERequestKeys;
  value: ETableHeaders;
}

export const tableHeaders: Array<ITableHeader> = [
  { key: ERequestKeys.REQUEST_TYPE, value: ETableHeaders.REQUEST_TYPE },
  { key: ERequestKeys.FROM_CITY, value: ETableHeaders.FROM_CITY },
  { key: ERequestKeys.TO_CITY, value: ETableHeaders.DESTINATION },
  { key: ERequestKeys.DISPATCH_DATE, value: ETableHeaders.DATE },
];

export interface ITableSort {
  key: ERequestKeys;
  isDesc: boolean;
}
