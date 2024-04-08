import React from 'react';
import { IFormFieldPropTypes } from './form-field-prop-types';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { Field, FieldProps, useFormikContext } from 'formik';
import {
  ERequestFormFields,
  REQUEST_FORM_LABELS,
  TRequestForm,
} from '../request-form/request-form-prop-types';
import { DateDispatchPicker, SelectParcelType } from '../../components';

const FormField: React.FC<IFormFieldPropTypes> = ({
  fieldName,
}: IFormFieldPropTypes) => {
  const { errors, touched } = useFormikContext<TRequestForm>();
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
          {fieldName === ERequestFormFields.PARCEL_TYPE ? (
            <SelectParcelType {...field} />
          ) : fieldName === ERequestFormFields.DISPATCH_DATE ? (
            <DateDispatchPicker {...field} />
          ) : (
            <Input
              {...field}
              isDisabled={fieldName === ERequestFormFields.REQUEST_TYPE}
              _hover={{
                borderColor: '#38B2AC',
              }}
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
