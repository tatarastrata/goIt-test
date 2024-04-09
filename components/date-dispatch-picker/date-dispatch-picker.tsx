import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { TDateDispatchPickerPropTypes } from './date-dispatch-picker-prop-types';
import { Box, Input } from '@chakra-ui/react';
import { useFormikContext } from 'formik';

const DateDispatchPicker: React.FC<TDateDispatchPickerPropTypes> = (props) => {
  const { setFieldValue } = useFormikContext();
  const handlePickDate = (value: Date) => {
    setFieldValue(props.name, value);
  };

  return (
    <Box>
      <DatePicker
        selected={props.value}
        onChange={handlePickDate}
        minDate={new Date()}
        dateFormat="MMMM d, yyyy"
        customInput={
          <Input
            _hover={{
              borderColor: '#38B2AC',
              cursor: 'pointer',
            }}
          />
        }
      />
    </Box>
  );
};

export default DateDispatchPicker;
