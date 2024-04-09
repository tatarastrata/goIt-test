import React from 'react';
import { IEditRequestModalPropTypes } from './edit-request-modal-prop-types';
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
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

const EditRequestModal: React.FC<IEditRequestModalPropTypes> = () => {
  const toast = useToast();
  const { selectedRequest, editRequest, addSelectedRequest } =
    useRequestContext();

  if (selectedRequest === null) {
    return null;
  }

  const initialValues: TRequestForm = { ...selectedRequest };

  const handleCloseModal = () => {
    addSelectedRequest(null);
  };

  const handleSubmitEditedRequest = (values: TRequest) => {
    editRequest(values);
    toast({
      status: 'success',
      duration: 3000,
      description: 'Your request is successfully edited and resubmitted',
    });
    handleCloseModal();
  };

  return (
    <Modal isOpen={selectedRequest !== null} onClose={handleCloseModal}>
      <ModalOverlay />
      <Formik
        validationSchema={RequestFormSchema}
        initialValues={initialValues}
        onSubmit={handleSubmitEditedRequest}
      >
        {(props) => (
          <Form>
            <ModalContent>
              <ModalHeader>Edit {selectedRequest.type}</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <RequestForm />
              </ModalBody>

              <ModalFooter>
                <Button
                  isDisabled={!props.isValid || !props.dirty}
                  colorScheme="teal"
                  type="submit"
                  mr={3}
                >
                  Save changes
                </Button>
                <Button variant="ghost" onClick={handleCloseModal}>
                  Quit editing
                </Button>
              </ModalFooter>
            </ModalContent>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default EditRequestModal;
