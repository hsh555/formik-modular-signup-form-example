import React from 'react';
import { useField } from 'formik';

const Input = (props) => {
    const [field, meta] = useField(props);
    return (
        <div className="form-group">
            <label htmlFor={props.id || props.name}>{props.label}</label>
            <input {...props} {...field} />
            {meta.touched && meta.error ? (
                <span className="error">{meta.error}</span>
            ) : null}
        </div>
    );
}

export default Input;