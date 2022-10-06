import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className='text-center bg-gray-200 p-5'>
            <NavLink to='/home' className='mx-2 text-2xl focus:text-red-300'>Home</NavLink>
            <NavLink to='/resturant' className='mx-2 text-2xl focus:text-red-300'>Resturant</NavLink>
        </div>
    );
};

export default Navbar;