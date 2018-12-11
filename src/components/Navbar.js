import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import Logo from '../images/logo.png';



const Navbar = () => {
    return (
        <div>
            <nav className='navbar navbar-expand-md bg-dark'>
                <div className='navbar-header'>
                    
                    <Link to='/'>
                    <img className='image-circle' src={Logo} alt='' />
                    </Link>

                </div>

                <ul className='nav'>
                    <li className='nav-item'>
                        <NavLink to='/' className='nav-link'> Home </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/about' className='nav-link'> About </NavLink>
                    </li>
                    <li className='nav-item dropdown'>
                        <button className='nav-link dropdown-toggle' id='navbarDropdownMenuLink' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                            Services
                     </button>

                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <Link to='/websites' className='dropdown-item'> Websites </Link>
                        </div>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/contact' className='nav-link'> Contact </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar
