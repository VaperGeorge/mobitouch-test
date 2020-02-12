import React from "react";
import DatePicker from "react-datepicker";

export const renderTextarea = ({ input, label, meta: { touched, error } }) => (
  <div className="form-group">
    <label>{label}</label>
    <div>
      <textarea
        className={`form-control ${touched && error ? "is-invalid" : ""}`}
        {...input}
        placeholder={label}
      ></textarea>
      {touched && error && <span className="invalid-feedback">{error}</span>}
    </div>
  </div>
);

export const renderField = ({
  input,
  label,
  type,
  meta: { touched, error }
}) => (
  <div className="form-group">
    <label>{label}</label>
    <div>
      <input
        className={`form-control ${touched && error ? "is-invalid" : ""}`}
        {...input}
        placeholder={label}
        type={type}
      />
      {touched && error && <span className="invalid-feedback">{error}</span>}
    </div>
  </div>
);

export const renderDatePicker = ({
  input: { onChange, value },
  label,
  meta: { touched, error }
}) => (
  <div className="form-group">
    <label>{label}</label>
    <div>
      <DatePicker
        className={`form-control ${touched && error ? "is-invalid" : ""}`}
        selected={!value ? null : new Date(value)}
        onChange={onChange}
        value={!value ? null : new Date(value)}
        name="date"
        type="date"
        dateFormat="dd.MM.yyyy"
      />
      {touched && error && <span className="invalid-feedback">{error}</span>}
    </div>
  </div>
);
