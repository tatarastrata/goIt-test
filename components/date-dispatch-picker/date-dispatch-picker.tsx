import React, { useMemo } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { TDateDispatchPickerPropTypes } from './date-dispatch-picker-prop-types';
import { Box, Input } from '@chakra-ui/react';
import { useFormikContext } from 'formik';
import { useRouter } from 'next/router';

const DateDispatchPicker: React.FC<TDateDispatchPickerPropTypes> = (props) => {
  const { setFieldValue } = useFormikContext();
  const handlePickDate = (value: Date) => {
    setFieldValue(props.name, value);
  };
  const router = useRouter();
  const { pathname } = router;

  const inputSize = useMemo(
    () => (pathname.includes('create') ? 'md' : 'sm'),
    [pathname],
  );

  return (
    <Box>
      <DatePicker
        selected={props.value}
        onChange={handlePickDate}
        minDate={new Date()}
        dateFormat="MMMM d, yyyy"
        customInput={
          <Input
            size={inputSize}
            variant="filled"
            _hover={{
              cursor: 'pointer',
            }}
          />
        }
      />
    </Box>
  );
};

export default DateDispatchPicker;
