import React from 'react';
import { useField } from 'formik';
import { Input } from 'antd';

import StyleWrapper from './form.style';

export default ({
  formik,
  required,
  label,
  className,
  half,
  defaultValue,
  placeholder,
  ...props
}: any): JSX.Element => {
  const [field, meta] = useField(props);

  const { error, touched, value } = meta;
  const { name, fielderror, onChange, desc } = props;

  if (!!onChange) onChange(value, name);

  return (
    <StyleWrapper
      className={`input text-input${half ? ' half-input' : ''}${
        value || value === 0 || defaultValue ? ' hasValue' : ''
      } ${className ? className : ''}${
        (touched && error) || fielderror ? ' hasError' : ''
      }`}
    >
      {label && (
        <label htmlFor={name}>
          {label} {required && <span className="req-sign">*</span>}
        </label>
      )}

      <Input
        id={name}
        data-test-id={name}
        {...props}
        {...field}
        defaultValue={defaultValue}
        placeholder={placeholder}
        autoComplete="add"
        autofill="add"
      />

      {desc && <div className="input-desc">{desc}</div>}

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
  );
};
