
import { useFormik, FormikErrors } from 'formik';

import '../styles/styles.css';

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
}

const FormikBasicPage = () => {

    const validate = ( { firstName, lastName, email }: FormValues ) => {

        const errors: FormikErrors<FormValues> = {};

        if (!firstName) {
            errors.firstName = 'First Name is required';
        } else if (firstName.length >= 15) {
            errors.firstName = 'First Name must be 15 characters long or less';
        }

        if (!lastName) {
            errors.lastName = 'Last Name is required';
        } else if (lastName.length >= 20) {
            errors.lastName = 'Last Name must be 20 characters long or less';
        }

        if (!email) {
            errors.email = 'Email is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
            errors.email = 'Check for a valid email format';
        }

        return errors;  
    }

    const { handleChange, values, handleSubmit, errors, touched, handleBlur } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: values => {
            console.log(values);
        },
        validate
    });

    return (
        <div>
            <h1>Formik Basic Tutorial</h1>
            <form noValidate onSubmit={ handleSubmit }>
                <label htmlFor="firtName">First Name</label>
                <input 
                    type="text" 
                    name="firstName"
                    onBlur={ handleBlur }
                    onChange={ handleChange }
                    value={ values.firstName }
                />
                { touched.firstName && errors.firstName && <span>{ errors.firstName }</span>}

                <label htmlFor="lastName">Last Name</label>
                <input 
                    type="text" 
                    name="lastName"
                    onBlur={ handleBlur }
                    onChange={ handleChange }
                    value={ values.lastName }
                />
                { touched.lastName && errors.lastName && <span>{ errors.lastName }</span>}

                <label htmlFor="email">Email Address</label>
                <input 
                    type="email" 
                    name="email"
                    onBlur={ handleBlur }
                    onChange={ handleChange }
                    value = { values.email }
                />
                { touched.email && errors.email && <span>{ errors.email }</span>}

                <button type="submit">Submit</button>

            </form>
        </div>
    )
}

export default FormikBasicPage
