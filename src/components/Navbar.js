import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import Logo from '../images/whitelogo.png';
import Burger from '../images/burger.png';

const Navbar = () => {

        return (
            <div>
                <nav className='navbar navbar-expand-md bg-dark '>

                    <div className='navbar-header'>
                        <Link to='/'>
                            <img className='image-circle' src={Logo} alt='' />
                        </Link>
                    </div>

                    <button id='toggler' className='navbar-toggler' data-toggle="collapse" data-target="#mainNavbarCollapse">
                        <img src={Burger} alt="submit" /> </button>

                    <div className='collapse navbar-collapse' id='mainNavbarCollapse'>
                        <ul className='nav'>
                            <li className='nav-item'>
                                <NavLink to='/' className='nav-link'> Home </NavLink>
                            </li>
                            <li className='nav-item '>
                                <NavLink to='/about' className='nav-link'> About </NavLink>
                            </li>
                            <li className='nav-item dropdown'>
                                <button className='nav-link dropdown-toggle' id='navbarDropdownMenuLink' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                                    Services
                                </button>

                                <div className='dropdown-menu' aria-labelledby='navbarDropdownMenuLink'>
                                    <Link to='/websites' className='dropdown-item'> Websites </Link>
                                    <Link to='/webapps' className='dropdown-item'> Web Apps </Link>
                                </div>
                            </li>
                            <li className='nav-item'>
                                <NavLink to='/contact' className='nav-link'> Contact </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );

    
}

export default Navbar
