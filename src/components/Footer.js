import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <footer className="bg-gray-800 py-14 text-white w-full">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                    <div className="flex items-center space-x-4 mb-6 md:mb-0">
                        <img src={logo} alt="Gym Logo" className="h-20 w-auto" />
                        <div>
                            <h1 className="text-2xl font-bold">Your Fitness Gym</h1>
                            <p className="text-sm">Transforming Lives Through Fitness</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 mb-6 md:mb-0">
                        <Link to="/" className="text-white hover:text-orange-500">Home</Link>
                        <Link to="/about" className="text-white hover:text-orange-500">About Us</Link>
                        {/* <Link to="/services" className="text-white hover:text-orange-500">Services</Link>
                        <Link to="/trainers" className="text-white hover:text-orange-500">Trainers</Link> */}
                        <Link to="/contact" className="text-white hover:text-orange-500">Contact</Link>
                    </div>

                    <div className="flex space-x-4">
                        <Link to="https://facebook.com" className="text-white hover:text-orange-500">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </Link>
                        <Link to="https://twitter.com" className="text-white hover:text-orange-500">
                            <FontAwesomeIcon icon={faTwitter} />
                        </Link>
                        <Link to="https://instagram.com" className="text-white hover:text-orange-500">
                            <FontAwesomeIcon icon={faInstagram} />
                        </Link>
                        <Link to="https://linkedin.com" className="text-white hover:text-orange-500">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </Link>
                        <Link to="https://youtube.com" className="text-white hover:text-orange-500">
                            <FontAwesomeIcon icon={faYoutube} />
                        </Link>
                    </div>
                </div>
                <div className="border-t border-gray-700 pt-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">

                        <div className="text-center md:text-left mb-4 md:mb-0">
                            <p className="text-sm">KPK Swabi City, Maini</p>
                            <p className="text-sm"><a href="mailto:info@ironedge.com" className="text-orange-500 hover:underline">info@fitnessgym.com</a></p>
                            <p className="text-sm">Phone: +921234567890</p>
                        </div>

                        <p className="text-sm">&copy; 2024 IronEdge. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
