import { TRequest } from '../../types';
import * as Yup from 'yup';

export type TRequestForm = TRequest;

export enum ERequestFormFields {
  REQUEST_TYPE = 'type',
  FROM_CITY = 'fromCity',
  TO_CITY = 'toCity',
  DISPATCH_DATE = 'dispatchDate',
  DESCRIPTION = 'description',
  PARCEL_TYPE = 'parcelType',
  USER_ID = 'userId',
  REQUEST_ID = 'requestId',
}

export const REQUEST_FORM_LABELS: { [key: string]: string } = {
  [ERequestFormFields.DESCRIPTION]: 'Order description:',
  [ERequestFormFields.DISPATCH_DATE]: 'Dispatch date:',
  [ERequestFormFields.FROM_CITY]: 'From city:',
  [ERequestFormFields.TO_CITY]: 'To which city:',
  [ERequestFormFields.PARCEL_TYPE]: 'Parcel type:',
};

export const RequestFormSchema = Yup.object().shape({
  [ERequestFormFields.DESCRIPTION]: Yup.string(),
  [ERequestFormFields.DISPATCH_DATE]: Yup.date().required('Date is required'),
  [ERequestFormFields.FROM_CITY]: Yup.string().required(
    'From city is required',
  ),
  [ERequestFormFields.PARCEL_TYPE]: Yup.string().required(
    'Parcel type is required',
  ),
  [ERequestFormFields.REQUEST_TYPE]: Yup.string().required(
    'Request tye is required',
  ),
  [ERequestFormFields.TO_CITY]: Yup.string().required('To city is required'),
  [ERequestFormFields.USER_ID]: Yup.string().required('Required'),
});
