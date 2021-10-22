import React from 'react';
import { Formik, Form, FormikHelpers } from 'formik';

import { Box, Flex, Submit, Input, TextArea, Button } from 'components';

import { AddButton } from './notepad.styles';
import { NoteNewModel } from 'types';

type Props = {
  onSubmit: (data: NoteNewModel) => Promise<any>;
  fielderror: any;
  initialData: any;
};

export default ({ onSubmit, fielderror, initialData }: Props): JSX.Element => {
  return (
    <Formik
      initialValues={{
        title: initialData?.title || '',
        content: initialData?.content || '',
      }}
      validateOnMount
      onSubmit={(formData, formikHelper: FormikHelpers<any>) => {
        onSubmit(formData)
          .then(() => formikHelper.resetForm())
          .catch((error) => console.log(error));
      }}
      enableReinitialize
    >
      {(formik) => {
        return (
          <Box as={Form} className="flex-1">
            <Input
              formik={formik}
              label=""
              name="title"
              type="text"
              placeholder="Enter note title ..."
              disabled={initialData?.title}
              fielderror={initialData?.title ? '' : fielderror?.title}
            />
            <TextArea
              formik={formik}
              label=""
              name="content"
              type="text"
              placeholder="Enter note ..."
            />
            {(!initialData?.title ||
              formik.values.content !== initialData?.content) && (
              <AddButton
                loading={false}
                as={Submit}
                type="green"
                formik={formik}
                label={initialData?.title ? 'Update Note' : 'Add Note'}
              />
            )}
          </Box>
        );
      }}
    </Formik>
  );
};
