import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';

export default function Navbar() {
    return (
        <nav className='bg-gradient-to-r from-orange-500 via-orange-100 to-white shadow-lg'>
            <div className='container mx-auto flex justify-between items-center px-6 py-4'>

                <img src={logo} alt="IronEdge Logo" className="h-12 w-12 rounded-full border-2 border-orange-500" />

                <ul className='flex space-x-6 text-gray-800'>
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
