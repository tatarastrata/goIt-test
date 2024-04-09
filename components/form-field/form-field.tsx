import React, { useMemo } from 'react';
import { IFormFieldPropTypes } from './form-field-prop-types';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { Field, FieldProps, useFormikContext } from 'formik';
import {
  REQUEST_FORM_LABELS,
  TRequestForm,
} from '../request-form/request-form-prop-types';
import { DateDispatchPicker, SelectParcelType } from '../../components';
import { ERequestKeys } from '../../types';
import { useRouter } from 'next/router';

const FormField: React.FC<IFormFieldPropTypes> = ({
  fieldName,
}: IFormFieldPropTypes) => {
  const { errors, touched } = useFormikContext<TRequestForm>();
  const router = useRouter();
  const { pathname } = router;

  const inputSize = useMemo(
    () => (pathname.includes('create') ? 'md' : 'sm'),
    [pathname],
  );
  return (
    <Field name={fieldName}>
      {({ field }: FieldProps) => (
        <FormControl
          isInvalid={
            !!errors[fieldName as keyof TRequestForm] &&
            !!touched[fieldName as keyof TRequestForm]
          }
        >
          <FormLabel>{REQUEST_FORM_LABELS[fieldName]}</FormLabel>
          {fieldName === ERequestKeys.PARCEL_TYPE ? (
            <SelectParcelType {...field} />
          ) : fieldName === ERequestKeys.DISPATCH_DATE ? (
            <DateDispatchPicker {...field} />
          ) : (
            <Input
              {...field}
              isDisabled={fieldName === ERequestKeys.REQUEST_TYPE}
              variant="filled"
              size={inputSize}
            />
          )}
          {errors[fieldName as keyof TRequestForm] && (
            <FormErrorMessage>
              {`${errors[fieldName as keyof TRequestForm]}`}
            </FormErrorMessage>
          )}
        </FormControl>
      )}
    </Field>
  );
};

export default FormField;
