import React from 'react';
import { Formik, Form } from 'formik';

import { Box, Input } from 'components';

type Props = {
  onChange: (data: string) => void;
  initialvalue: string;
};

export default ({ onChange, initialvalue }: Props): JSX.Element => {
  return (
    <Formik
      initialValues={{
        description: initialvalue || '',
      }}
      validateOnMount
      onSubmit={() => {}}
      enableReinitialize
    >
      {(formik) => {
        return (
          <Box as={Form}>
            <Input
              formik={formik}
              label="Notepad Title"
              name="description"
              type="text"
              placeholder="My Notepad title ..."
              onChange={onChange}
            />
          </Box>
        );
      }}
    </Formik>
  );
};
