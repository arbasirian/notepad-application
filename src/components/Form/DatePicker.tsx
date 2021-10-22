import React, { useState } from 'react';
import { useField } from 'formik';
import { DatePicker } from 'antd';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

import { Text } from 'components';

import StyleWrapper, { ShowPasswordBtn } from './form.style';

export default ({ formik, label, ...props }: any): JSX.Element => {
  const [field, meta] = useField(props);
  const { setFieldValue } = formik;

  const { error, touched, value } = meta;
  const { name, disabled, fielderror } = props;

  return (
    <>
      <StyleWrapper
        className={`input date-picker-input ${value ? 'hasValue' : ''} ${
          (touched && error) || fielderror ? 'hasError' : ''
        } ${disabled ? 'disabled' : ''}`}
      >
        {label && <label htmlFor={name}>{label}</label>}

        <DatePicker
          id={name}
          data-test-id={name}
          {...props}
          {...field}
          disabled={disabled}
          onChange={(val: any) => setFieldValue(name, val)}
        />

        {touched && error && (
          <div className="text-danger">
            <span className="text-danger--text">{error}</span>
          </div>
        )}

        {fielderror && (
          <div className="text-danger field-error">
            <span className="text-danger--text">{fielderror}</span>
          </div>
        )}
      </StyleWrapper>
      {props.description && (
        <Text
          color="gray1"
          fontSize="12px"
          width="100%"
          position="relative"
          top="-12px"
          right="16px"
        >
          {props.description}
        </Text>
      )}
    </>
  );
};
