import React from 'react'
import { NavLink, Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div>
            <nav className='navbar navbar-expand-sm bg-dark'>
                <ul className='nav'>
                    <li className='nav-item'>
                        <NavLink to='/' className='nav-link'> Home </NavLink>
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
