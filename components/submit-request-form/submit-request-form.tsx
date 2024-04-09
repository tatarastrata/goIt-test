import React from 'react';
import { Box, Button, useToast } from '@chakra-ui/react';
import RequestForm from '../request-form';
import {
  RequestFormSchema,
  TRequestForm,
} from '../request-form/request-form-prop-types';
import {
  EDeliveryParcelType,
  ERequestKeys,
  ERequestType,
  IRoutingParams,
} from '../../types';
import router from 'next/router';
import { v4 as uuidv4 } from 'uuid';
import { useRequestContext } from '../../contexts/request-context';
import { useNavigation } from '../../utils';
import { Form, Formik } from 'formik';

const SubmitRequestForm: React.FC = () => {
  const { userId, requestType }: IRoutingParams = router.query;
  const { addRequest } = useRequestContext();
  const toast = useToast();
  const { goToMain } = useNavigation();

  const initialValues: TRequestForm =
    requestType === ERequestType.DELIVERY
      ? {
          [ERequestKeys.REQUEST_TYPE]: ERequestType.DELIVERY,
          [ERequestKeys.FROM_CITY]: '',
          [ERequestKeys.TO_CITY]: '',
          [ERequestKeys.PARCEL_TYPE]: EDeliveryParcelType.GADGET,
          [ERequestKeys.DISPATCH_DATE]: new Date(),
          [ERequestKeys.USER_ID]: userId || uuidv4(),
          [ERequestKeys.REQUEST_ID]: uuidv4(),
        }
      : {
          [ERequestKeys.REQUEST_TYPE]: ERequestType.ORDER,
          [ERequestKeys.FROM_CITY]: '',
          [ERequestKeys.TO_CITY]: '',
          [ERequestKeys.PARCEL_TYPE]: 'other',
          [ERequestKeys.DISPATCH_DATE]: new Date(),
          [ERequestKeys.DESCRIPTION]: '',
          [ERequestKeys.USER_ID]: userId || uuidv4(),
          [ERequestKeys.REQUEST_ID]: uuidv4(),
        };

  const handleSubmitNewRequest = (values: TRequestForm) => {
    if (!userId) return;
    addRequest(values);
    toast({
      status: 'success',
      duration: 3000,
      description: 'Your request is successfully submitted',
    });
    goToMain();
  };

  return (
    <Box>
      <Formik
        validationSchema={RequestFormSchema}
        initialValues={initialValues}
        onSubmit={handleSubmitNewRequest}
      >
        {(props) => (
          <Form>
            <RequestForm />
            <Button
              isDisabled={!props.isValid || !props.dirty}
              mt={4}
              colorScheme="teal"
              type="submit"
            >
              Submit your {requestType}
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default SubmitRequestForm;
