import { Field } from 'redux-form'
import s from './FormsControls.module.css'

export const TextValidation = ({ input, meta: { touched, error }, children }) => {
  const hasError = touched && error;
  return (
    <div className={s.formControl + " " + (hasError ? s.error : "")}>
      <div>{children}</div>
      <div>{error && <span>{error}</span>}</div>
    </div>
  );
};

export const Textarea = (props) => {
    const { input, meta, ...restProps } = props;
    return <TextValidation {...props} >
        <textarea {...input} {...restProps} />
    </TextValidation >
}

export const Input = (props) => {
    const { input, meta, ...restProps } = props;
    return <TextValidation {...props} >
        <input {...input} {...restProps} />
    </TextValidation >
}

export const createField = (validate, placeholder, name, components, props = {}, text = "") => (
  <div>
    <Field
      validate={validate}
      placeholder={placeholder}
      name={name}
      component={components}
      {...props}
    />
    {text}
  </div>
);