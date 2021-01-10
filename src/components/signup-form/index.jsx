import { Form, Formik } from "formik";
import * as Yup from 'yup';
// form elements
import CheckBox from "../form-elements/checkbox";
import Input from "../form-elements/input";
import Select from "../form-elements/select";
import TextArea from "../form-elements/textarea";
// styles
import './style.css';

const SignUpForm = () => {
    const validationSchema = Yup.object({
        firstName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .min(2, 'Must be 2 characters or more')
            .required('Required'),
        lastName: Yup.string().
            max(20, 'Must be 20 characters or less').
            min(2, 'Must be 2 characters or more').
            required('Required'),
        email: Yup.string().
            email('Invalid email address')
            .required('Required'),
        password: Yup.string().
            min(6, 'Must be 6 characters or more')
            .required('Required'),
        skill: Yup.string()
            .required('Required'),
        aboutMe: Yup.string()
            .required('Required'),
    });

    return (
        <div className="container">
            <h2 className="form-header">Sign Up</h2>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    aboutMe: '',
                    rememberMe: false
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(`Congratulations ${values.firstName}. Sign Up Successfully Done.‍‍‍‍‍`);
                        setSubmitting(false);
                    }, 500);
                }}
            >
                {
                    ({ isSubmitting }) => (
                        <Form className="sign-up">
                            <Input
                                label="First Name"
                                type="text"
                                name="firstName"
                                placeholder="first name..."
                                className="input-text"
                            />
                            <Input
                                label="Last Name"
                                type="text"
                                name="lastName"
                                placeholder="last name..."
                                className="input-text"
                            />
                            <Input
                                label="Email"
                                type="text"
                                name="email"
                                placeholder="email..."
                                className="input-text"
                            />
                            <Input
                                label="Password"
                                type="password"
                                name="password"
                                placeholder="password..."
                                className="input-text"
                            />
                            <Select name="skill" label="Skill" className="input-text">
                                <option value="">your skill</option>
                                <option value="frontEnd">fron end</option>
                                <option value="backEnd">back end</option>
                                <option value="devOps">devops</option>
                            </Select>
                            <TextArea
                                label="About Me"
                                name="aboutMe"
                                placeholder="write something about yourself..."
                                className="input-text"
                            />
                            <CheckBox name="rememberMe">
                                remember me
                            </CheckBox>
                            <button type="submit" disabled={isSubmitting}>submit</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    );
}

export default SignUpForm;