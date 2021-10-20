import React from "react";
import { useField } from "formik";
import { Input } from "antd";

import StyleWrapper from "./form.style";

export default ({ formik, required, label, ...props }: any): JSX.Element => {
  const [field, meta] = useField(props);

  const { error, touched, value } = meta;
  const { className, name, fielderror, half } = props;

  return (
    <StyleWrapper
      className={`input text-input textarea${half ? " half-input" : ""} ${
        className ? className : ""
      } ${value ? "hasValue" : ""} ${
        (touched && error) || fielderror ? "hasError" : ""
      }`}
    >
      {label && (
        <label htmlFor={name}>
          {label} {required && <span className="req-sign">*</span>}
        </label>
      )}

      <Input.TextArea
        id={name}
        data-test-id={name}
        {...props}
        {...field}
        style={{ width: "100%" }}
        rows={5}
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
  );
};
