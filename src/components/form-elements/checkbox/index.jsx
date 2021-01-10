import { useField } from "formik"

const CheckBox = ({ children, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className="form-group">
            <label>
                <input type="checkbox" {...field} {...props} />
                {children}
            </label>
            {meta.touched && meta.error ? (
                <span className="error">{meta.error}</span>
            ) : null}
        </div>
    );
}

export default CheckBox;