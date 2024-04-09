import { ERequestKeys, TRequest } from '../../types';
import * as Yup from 'yup';

export type TRequestForm = TRequest;

export const REQUEST_FORM_LABELS: { [key: string]: string } = {
  [ERequestKeys.DESCRIPTION]: 'Order description:',
  [ERequestKeys.DISPATCH_DATE]: 'Dispatch date:',
  [ERequestKeys.FROM_CITY]: 'From city:',
  [ERequestKeys.TO_CITY]: 'To which city:',
  [ERequestKeys.PARCEL_TYPE]: 'Parcel type:',
};

export const RequestFormSchema = Yup.object().shape({
  [ERequestKeys.DESCRIPTION]: Yup.string(),
  [ERequestKeys.DISPATCH_DATE]: Yup.date().required('Date is required'),
  [ERequestKeys.FROM_CITY]: Yup.string().required('From city is required'),
  [ERequestKeys.PARCEL_TYPE]: Yup.string().required('Parcel type is required'),
  [ERequestKeys.REQUEST_TYPE]: Yup.string().required('Request tye is required'),
  [ERequestKeys.TO_CITY]: Yup.string().required('To city is required'),
  [ERequestKeys.USER_ID]: Yup.string().required('Required'),
});
