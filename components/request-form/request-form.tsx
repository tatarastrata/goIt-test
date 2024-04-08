/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {
  ERequestFormFields,
  TRequestForm,
  RequestFormSchema,
} from './request-form-prop-types';
import { Box, Button, InputGroup, Stack, useToast } from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import { EDeliveryParcelType, ERequestType, IRoutingParams } from '../../types';
import { saveRequestToLocalStorage, useNavigation } from '../../utils';
import FormField from '../form-field';
import { v4 as uuidv4 } from 'uuid';

const RequestForm: React.FC = () => {
  const router = useRouter();
  const toast = useToast();
  const { goToMain } = useNavigation();
  const { userId, requestType }: IRoutingParams = router.query;

  const initialValues: TRequestForm =
    requestType === ERequestType.DELIVERY
      ? {
          [ERequestFormFields.REQUEST_TYPE]: ERequestType.DELIVERY,
          [ERequestFormFields.FROM_CITY]: '',
          [ERequestFormFields.TO_CITY]: '',
          [ERequestFormFields.PARCEL_TYPE]: EDeliveryParcelType.GADGET,
          [ERequestFormFields.DISPATCH_DATE]: new Date(),
          [ERequestFormFields.USER_ID]: userId || uuidv4(),
          [ERequestFormFields.REQUEST_ID]: uuidv4(),
        }
      : {
          [ERequestFormFields.REQUEST_TYPE]: ERequestType.ORDER,
          [ERequestFormFields.FROM_CITY]: '',
          [ERequestFormFields.TO_CITY]: '',
          [ERequestFormFields.PARCEL_TYPE]: 'other',
          [ERequestFormFields.DISPATCH_DATE]: new Date(),
          [ERequestFormFields.DESCRIPTION]: '',
          [ERequestFormFields.USER_ID]: userId || uuidv4(),
          [ERequestFormFields.REQUEST_ID]: uuidv4(),
        };

  const handleSubmitNewRequest = (values: TRequestForm) => {
    if (!userId) return;
    saveRequestToLocalStorage(userId, values);
    toast({
      status: 'success',
      duration: 9000,
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
            <Stack spacing={2}>
              {Object.keys(initialValues).map(
                (fieldName) =>
                  fieldName !== ERequestFormFields.USER_ID &&
                  fieldName !== ERequestFormFields.REQUEST_ID && (
                    <FormField
                      key={fieldName}
                      fieldName={fieldName as ERequestFormFields}
                    />
                  ),
              )}
            </Stack>
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

export default RequestForm;
