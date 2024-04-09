/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {
  ERequestFormFields,
  TRequestForm,
  RequestFormSchema,
} from './request-form-prop-types';
import { Box, Button, Stack, useToast } from '@chakra-ui/react';
import { Form, Formik, useFormikContext } from 'formik';
import { useRouter } from 'next/router';
import { EDeliveryParcelType, ERequestType, IRoutingParams } from '../../types';
import { useNavigation } from '../../utils';
import FormField from '../form-field';
import { v4 as uuidv4 } from 'uuid';
import { useRequestContext } from '../../contexts/request-context';

const RequestForm: React.FC = () => {
  const router = useRouter();
  const { initialValues } = useFormikContext<TRequestForm>();

  return (
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
  );
};

export default RequestForm;
