import React from 'react';
import { IEditRequestModalContentPropTypes } from './edit-request-modal-content-prop-types';
import {
  Button,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useToast,
} from '@chakra-ui/react';
import RequestForm from '../request-form';
import {
  RequestFormSchema,
  TRequestForm,
} from '../request-form/request-form-prop-types';
import { Form, Formik } from 'formik';
import { TRequest } from '../../types';
import { useRequestContext } from '../../contexts/request-context';

const EditRequestModalContent: React.FC<IEditRequestModalContentPropTypes> = ({
  quiteEditing,
}) => {
  const toast = useToast();
  const { selectedRequest, editRequest } = useRequestContext();

  if (selectedRequest === null) {
    return null;
  }

  const initialValues: TRequestForm = { ...selectedRequest };

  const handleSubmitEditedRequest = (values: TRequest) => {
    editRequest(values);
    toast({
      status: 'success',
      duration: 3000,
      description: 'Your request is successfully edited and resubmitted',
    });
    quiteEditing();
  };

  return (
    <ModalContent>
      <Formik
        validationSchema={RequestFormSchema}
        initialValues={initialValues}
        onSubmit={handleSubmitEditedRequest}
      >
        {(props) => (
          <Form>
            <ModalHeader>Edit {selectedRequest.type}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <RequestForm />
            </ModalBody>

            <ModalFooter mt={4}>
              <Button
                isDisabled={!props.isValid || !props.dirty}
                colorScheme="teal"
                type="submit"
                mr={3}
                size="sm"
              >
                Save changes
              </Button>
              <Button size="sm" variant="ghost" onClick={quiteEditing}>
                Quit editing
              </Button>
            </ModalFooter>
          </Form>
        )}
      </Formik>
    </ModalContent>
  );
};

export default EditRequestModalContent;
