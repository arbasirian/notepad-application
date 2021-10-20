import React from 'react';
import { useField } from 'formik';
import { Select } from 'antd';

import StyleWrapper from './form.style';

export default ({
  formik,
  disabled,
  label,
  required,
  options,
  defaultValue = '',
  ...props
}: any): JSX.Element => {
  const [field, meta] = useField(props);

  const { setFieldValue } = formik;
  const { error, touched, value } = meta;
  const { className, name, fieldError, onChange, half } = props;

  const handleOnChange = (name: any, option: any) => {
    setFieldValue(name, option);
    if (!!onChange) onChange(option);
  };

  React.useEffect(() => {
    setFieldValue(name, defaultValue);
  }, [defaultValue]);
  return (
    <StyleWrapper
      className={`input select-input${half ? ' half-input' : ''} ${
        className ? className : ''
      } ${
        value || value === false || value === true || defaultValue
          ? 'hasValue'
          : ''
      } ${(touched && error) || fieldError ? 'hasError' : ''} ${
        disabled ? 'disabled' : ''
      }`}
    >
      {label && (
        <label htmlFor={name}>
          {label} {required && <span className="req-sign">*</span>}
        </label>
      )}

      <Select
        id={name}
        data-test-id={name}
        {...props}
        {...field}
        disabled={disabled}
        defaultValue={defaultValue}
        getPopupContainer={(trigger) => trigger.parentNode}
        onChange={(option) => handleOnChange(name, option)}
      >
        {options.map(({ key, title }: any) => (
          <Select.Option key={key} title={title} value={key}>
            {title}
          </Select.Option>
        ))}
      </Select>

      {touched && error && (
        <div className="text-danger">
          <span className="text-danger--text">{error}</span>
        </div>
      )}
      {fieldError && (
        <div className="text-danger field-error">
          <span className="text-danger--text">{fieldError}</span>
        </div>
      )}
    </StyleWrapper>
  );
};
