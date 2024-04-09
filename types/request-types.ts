export enum EDeliveryParcelType {
  GADGET = 'gadgets',
  DRINK = 'drinks',
  CLOTHES = 'clothes',
  MEDICINES = 'medicines',
}

export enum ERequestType {
  ORDER = 'order',
  DELIVERY = 'delivery',
}

export enum ERequestKeys {
  REQUEST_TYPE = 'type',
  FROM_CITY = 'fromCity',
  TO_CITY = 'toCity',
  DISPATCH_DATE = 'dispatchDate',
  DESCRIPTION = 'description',
  PARCEL_TYPE = 'parcelType',
  USER_ID = 'userId',
  REQUEST_ID = 'requestId',
}

export interface ICommonRequest {
  fromCity: string;
  toCity: string;
  dispatchDate: Date;
  userId: string;
  requestId: string;
}

export interface IOrderRequest extends ICommonRequest {
  type: ERequestType.ORDER;
  parcelType: 'other';
  description: string;
}

export interface IDeliveryRequest extends ICommonRequest {
  type: ERequestType.DELIVERY;
  parcelType: EDeliveryParcelType;
}

export type TRequest = IOrderRequest | IDeliveryRequest;
