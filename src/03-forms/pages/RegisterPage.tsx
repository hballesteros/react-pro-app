import { FormEvent } from 'react';
import { useForm } from '../hooks/useForms';

import '../styles/styles.css';

export const RegisterPage = () => {

    const { 
            formData, onChange, resetForm, isValidEmail,
            name, email, password, confirmPassword    
        } = useForm({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    
    const onSubmit = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData);
    };
   

    return (
        <div>
            <h1>Register Page</h1>

            <form noValidate onSubmit={ onSubmit }>

                <input 
                    type="text"
                    placeholder="Name"
                    name = "name"
                    value={ name }
                    onChange={ onChange }
                    className={ `${ name.trim().length <= 0 ? "has-error" : "" }` }
                />
                { name.trim().length <= 0 && <span>Este campo es necesario</span> }

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={ email }
                    onChange={ onChange }
                    className= { `${ !isValidEmail( email ) ? "has-error" : "" }` }
                />
                { !isValidEmail( email ) && <span>Email no es válido</span> }

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={ password }
                    onChange={ onChange }
                />
                { password.trim().length <= 0 && <span>Este campo es necesario</span> }
                { password.trim().length < 6 && password.trim().length > 0 && <span>la contraseña tiene que tener 6 letras</span> }

                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm password"
                    value={ confirmPassword }
                    onChange={ onChange }
                />
                { confirmPassword.trim().length <= 0 && <span>Este campo es necesario</span> }
                { confirmPassword.trim().length > 0 && password !== confirmPassword && <span>Las contraseñas no coinciden</span> }

                <button type="submit">Create</button>
                <button 
                    type="button"
                    onClick={ resetForm }
                >Reset Form</button>  

            </form>
        </div>
  )
}
