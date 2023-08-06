import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';

import { RegisterPage } from '../03-forms/pages/RegisterPage';
import FormikBasicPage from '../03-forms/pages/FormikBasicPage';
import FormikYupPage from '../03-forms/pages/FormikYupPage';
import FormikComponents from '../03-forms/pages/FormikComponents';
import FormikAbstraction from '../03-forms/pages/FormikAbstraction';

import logo from '../assets/react.svg';

export const Navigation = () => {
  return (
    <BrowserRouter>
        <div className="main-layout">
            <nav>
                <img className="logo-img" src={ logo } alt="React Logo" />
                <ul>
                    <li>
                        <NavLink to="/register" className={ ({ isActive }) => isActive ? 'nav-active' : '' } >Register Page</NavLink>
                    </li>
                    <li>
                        <NavLink to="/formik-basic" className={ ({ isActive }) => isActive ? 'nav-active' : '' } >Formik Basic</NavLink>
                    </li>
                    <li>
                        <NavLink to="/formik-yup" className={ ({ isActive }) => isActive ? 'nav-active' : '' } >Formik Yup</NavLink>
                    </li>
                    <li>
                        <NavLink to="/formik-components" className={ ({ isActive }) => isActive ? 'nav-active' : '' } >Formik Components</NavLink>
                    </li>
                    <li>
                        <NavLink to="/formik-abstraction" className={ ({ isActive }) => isActive ? 'nav-active' : '' } >Formik Abstraction</NavLink>
                    </li>
                    <li>
                        <NavLink to="/users" className={ ({ isActive }) => isActive ? 'nav-active' : '' } >Users</NavLink>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="/register" element={ <RegisterPage/> } />
                <Route path="/formik-basic" element={ <FormikBasicPage /> } />
                <Route path="/formik-yup" element={ <FormikYupPage /> } />
                <Route path="/formik-components" element={ <FormikComponents /> } />
                <Route path="/formik-abstraction" element={ <FormikAbstraction /> } />
                <Route path="/users" element={ <h1>Users</h1> } />
                
                <Route path="/*" element={ <Navigate to="/" replace /> } />
            </Routes>

        </div>
    </BrowserRouter>
  )
}
