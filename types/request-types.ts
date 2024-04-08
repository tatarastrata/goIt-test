export enum EDeliveryParcelType {
  GADGET = 'gadget',
  DRINK = 'drink',
  CLOTHES = 'clothes',
  MEDICINES = 'medicines',
}

export enum ERequestType {
  ORDER = 'order',
  DELIVERY = 'delivery',
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
