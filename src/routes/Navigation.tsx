import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { routes } from './routes';

import logo from '../assets/react.svg';

export const Navigation = () => {
  return (
    <BrowserRouter>
        <div className="main-layout">
            <nav>
                <img className="logo-img" src={ logo } alt="React Logo" />
                <ul>
                    { 
                        routes.map( (route, index) => (
                            <li key={ index }>
                                <NavLink to={ route.to } className={ ({ isActive }) => isActive ? 'nav-active' : '' } >{ route.name }</NavLink>
                            </li>
                        ))
                    }
                </ul>
            </nav>

            <Routes>
                {
                    routes.map( (route, index) => (
                        <Route key={ index } path={ route.path } element={ <route.Component /> } />
                    ))  
                }

                <Route path="/*" element={ <Navigate to="/lazy1" replace /> } />
            </Routes>

        </div>
    </BrowserRouter>
  )
}
