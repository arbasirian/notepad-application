import React from 'react';
import { useField } from 'formik';
import { InputNumber } from 'antd';

import StyleWrapper from './form.style';

export default ({
  formik,
  required,
  label,
  className,
  min,
  precision,
  half,
  defaultValue,
  ...props
}: any): JSX.Element => {
  const [field, meta] = useField(props);
  const { error, touched, value } = meta;
  const { name, fielderror, desc } = props;
  const { setFieldValue } = formik;

  return (
    <StyleWrapper
      className={`input number-input ${value ? 'hasValue' : ''}${
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

      <InputNumber
        id={name}
        data-test-id={name}
        {...props}
        {...field}
        min={min ? min : null}
        defaultValue={defaultValue}
        precision={precision ? precision : 0}
        onChange={(val: any) => setFieldValue(name, val)}
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
