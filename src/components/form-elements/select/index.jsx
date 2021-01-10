import { useField } from "formik"

const Select = (props) => {
    const [field, meta] = useField(props);
    return (
        <div className="form-group">
            <label htmlFor={props.id || props.name}>{props.label}</label>
            <select {...props} {...field} />
            {meta.touched && meta.error ? (
                <span className="error">{meta.error}</span>
            ) : null}
        </div>
    );
}

export default Select;