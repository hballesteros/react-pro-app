
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { MyTextInput } from '../components/MyTextInput';

import '../styles/styles.css';


const FormikAbstraction= () => {

    return (
        <div>
            <h1>Formik Abstraction</h1>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: ''
                }}
                onSubmit={ ( values ) => {
                    console.log(values);
                }}
                validationSchema={
                    Yup.object({
                        firstName: Yup.string()
                            .max(15, 'Must be 15 characters or less')
                            .required('Required'),
                        lastName: Yup.string()
                            .max(20, 'Must be 20 characters or less')
                            .required('Required'),
                        email: Yup.string()
                            .email('Invalid email address')
                            .required('Required'),
                        terms: Yup.boolean()
                            .oneOf([true], 'You must accept the terms and conditions'),
                        jobType: Yup.string()
                            .oneOf(['designer', 'developer', 'product'], 'Invalid Job Type')
                            .required('Required')
                        })
                    }
            >
                
                {
                    (formik) => (
                        <Form>

                            <MyTextInput label="First Name" name="firstName" placeholder="Hugo"/>
                            <MyTextInput label="Last Name" name="lastName" placeholder="Ballesteros" />
                            <MyTextInput label="Email Address" name="email" type="email" placeholder="huguichu@gmail.com" />

                            <label htmlFor="jobType">Job Type</label>
                            <Field as="select" name="jobType">
                                <option value="">Select a job type</option>
                                <option value="designer">Designer</option>
                                <option value="developer">Developer</option>
                                <option value="product">Product Manager</option>
                                <option value="other">Other</option>
                            </Field>
                            <ErrorMessage name="jobType" component="span" />

                            <label>
                                <Field type="checkbox" name="terms" />
                                Terms and conditions
                            </label>
                            <ErrorMessage name="terms" component="span" />

                            <button type='submit'>Submit</button>
                        </Form>
                    )
                }

            </Formik>

        </div>
    )
}

export default FormikAbstraction
