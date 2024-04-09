import React, { useMemo } from 'react';
import { TSelectParcelTypePropTypes } from './select-parcel-type-prop-types';
import { Box, Select } from '@chakra-ui/react';
import { EDeliveryParcelType, ERequestType } from '../../types';
import { useFormikContext } from 'formik';
import { TRequestForm } from '../request-form/request-form-prop-types';

const SelectParcelType: React.FC<TSelectParcelTypePropTypes> = (props) => {
  const {
    values: { type },
  } = useFormikContext<TRequestForm>();
  const isOrder = useMemo(() => type === ERequestType.ORDER, [type]);
  return (
    <Box>
      <Select
        {...props}
        isDisabled={isOrder}
        _hover={{
          borderColor: '#38B2AC',
          cursor: 'pointer',
        }}
      >
        {isOrder ? (
          <option value="other">other</option>
        ) : (
          Object.values(EDeliveryParcelType).map((type) => (
            <option value={type} key={type}>
              {type}
            </option>
          ))
        )}
      </Select>
    </Box>
  );
};

export default SelectParcelType;
