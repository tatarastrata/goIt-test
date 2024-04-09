import React from 'react';
import { TRequestForm } from './request-form-prop-types';
import { HStack, Stack } from '@chakra-ui/react';
import { useFormikContext } from 'formik';
import FormField from '../form-field';
import { ERequestKeys } from '../../types';

const RequestForm: React.FC = () => {
  const { initialValues } = useFormikContext<TRequestForm>();

  return (
    <Stack spacing={4}>
      {Object.keys(initialValues).map(
        (fieldName) =>
          fieldName !== ERequestKeys.USER_ID &&
          fieldName !== ERequestKeys.REQUEST_ID &&
          fieldName !== ERequestKeys.DISPATCH_DATE &&
          fieldName !== ERequestKeys.PARCEL_TYPE && (
            <FormField key={fieldName} fieldName={fieldName as ERequestKeys} />
          ),
      )}
      <HStack>
        <FormField fieldName={ERequestKeys.DISPATCH_DATE} />
        <FormField fieldName={ERequestKeys.PARCEL_TYPE} />
      </HStack>
    </Stack>
  );
};

export default RequestForm;
