import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';
import { MyTextInput } from '../components';

export const RegisterFormikPage = () => {

    return (
        <div>
            <h1>Register Formik Page</h1>

            <Formik 
                initialValues={{
                    name: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                }}
                onSubmit={ ( values ) => {
                    console.log(values);
                }}
                onReset={ () => 
                    console.log('Reset Form')
                }
                validationSchema={
                    Yup.object({
                        name: Yup.string()
                            .min(2, 'Must be 2 characters or more')
                            .max(15, 'Must be 15 characters or less')
                            .required('Required'),
                        email: Yup.string()
                            .email('Invalid email address')
                            .required('Required'),
                        password: Yup.string()
                            .min(6, 'Must be 6 characters or more')
                            .required('Required'),
                        confirmPassword: Yup.string()
                            .oneOf([Yup.ref('password') ], 'Passwords must match')
                            .required('Required')
                        })  
                }
            
            >
                {(formik) => (
                    <Form>
                        <MyTextInput label="Name" name="name" placeholder="Hugo" />
                        <MyTextInput label="Email Address" name="email" type="email" placeholder="hugo@gmail.com" />
                        <MyTextInput label="Password" name="password" type="password" placeholder="******" />   
                        <MyTextInput label="Confirm Password" name="confirmPassword" type="password" placeholder="******" />    
                        <button type="submit">Create</button>
                        <button 
                            type="button"
                            onClick={ formik.handleReset }
                        >Reset Form</button>
                    </Form>
                )}
            </Formik>

        </div>
  )
}
