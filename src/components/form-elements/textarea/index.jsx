import { useField } from "formik"

const TextArea = (props) => {
    const [field, meta] = useField(props);
    return (
        <div className="form-group">
            <label htmlFor={props.id || props.name}>{props.label}</label>
            <textarea {...props} {...field}></textarea>
            {meta.touched && meta.error ? (
                <span className="error">{meta.error}</span>
            ) : null}
        </div>
    );
}

export default TextArea;