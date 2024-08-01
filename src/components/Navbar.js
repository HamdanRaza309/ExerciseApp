import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className='bg-gradient-to-r from-orange-500 via-orange-100 to-white shadow-lg'>
            <div className='container flex justify-between items-center py-5'>
                <div className='flex items-center space-x-3'>
                    <img src={logo} alt="IronEdge Logo" className="h-12 w-12 rounded-full border-2 border-orange-500" />
                    <h4 className='text-2xl font-semibold text-gray-800'>IronEdge</h4>
                </div>
                <div className='md:hidden'>
                    <button onClick={toggleMenu} className='text-gray-800 focus:outline-none'>
                        <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path>
                        </svg>
                    </button>
                </div>

                <ul className={`md:flex md:space-x-3 text-gray-800 ${isOpen ? 'block' : 'hidden'}`}>
                    <li className='relative group'>
                        <Link to='/' className='text-lg font-semibold hover:text-orange-600 transition-colors duration-300'>
                            Home
                        </Link>
                        <span className='absolute bottom-0 left-0 w-full h-0.5 bg-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></span>
                    </li>
                    <li className='relative group'>
                        <Link to='/about' className='text-lg font-semibold hover:text-orange-600 transition-colors duration-300'>
                            About
                        </Link>
                        <span className='absolute bottom-0 left-0 w-full h-0.5 bg-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></span>
                    </li>
                    <li className='relative group'>
                        <Link to='/services' className='text-lg font-semibold hover:text-orange-600 transition-colors duration-300'>
                            Services
                        </Link>
                        <span className='absolute bottom-0 left-0 w-full h-0.5 bg-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></span>
                    </li>
                    <li className='relative group'>
                        <Link to='/specificExercises' className='text-lg font-semibold hover:text-orange-600 transition-colors duration-300'>
                            Specific Exercises
                        </Link>
                        <span className='absolute bottom-0 left-0 w-full h-0.5 bg-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></span>
                    </li>
                    <li className='relative group'>
                        <Link to='/blog' className='text-lg font-semibold hover:text-orange-600 transition-colors duration-300'>
                            Blog
                        </Link>
                        <span className='absolute bottom-0 left-0 w-full h-0.5 bg-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></span>
                    </li>
                    <li className='relative group'>
                        <Link to='/contact' className='text-lg font-semibold hover:text-orange-600 transition-colors duration-300'>
                            Contact Us
                        </Link>
                        <span className='absolute bottom-0 left-0 w-full h-0.5 bg-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></span>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
