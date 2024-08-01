import React from 'react';
import talkingOnPhone from "../talkingOnPhone.png";
import Main from "../Main.png";
import { Link } from 'react-router-dom';
import logo from '../logo.png';
import Me from '../Me.jpg';
import Me2 from '../Me2.jpg';
import Me3 from '../Me3.png';
import Footer from './Footer';
import LetsTalk from './LetsTalk';

export default function Home() {
    return (
        <div className="bg-gray-50">
            <section className="relative bg-orange-200 h-screen flex items-center">
                <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12">
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
                            Be Ready <br />
                            <span className="bg-orange-500 text-white px-2 py-1 inline-block rounded-md">For Your</span>
                            <br /> Fitness
                        </h1>
                        <p className="text-lg text-gray-600 mb-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div className="flex justify-center lg:justify-start">
                            <Link to="/exercise" className="bg-gray-800 text-white font-bold py-2 px-6 rounded-full mr-4 transition duration-300 hover:bg-gray-900 ">
                                Exercises
                            </Link>
                            {/* <Link to="#watch-video" className="text-orange-500 font-bold py-2 px-6 rounded-full flex items-center transition duration-300 hover:text-orange-600">
                                <svg className="w-7 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-3.196m0 0a2.013 2.013 0 00-2.828 0m0 0L9 9m-2.756 1.587A4.992 4.992 0 004 14a5 5 0 105 5 4.992 4.992 0 00-1.587-3.757L9 13l-3.197 3.196a2.013 2.013 0 01-2.828 0m0 0L4.707 15"></path>
                                </svg>
                                Watch Video
                            </Link> */}
                        </div>
                    </div>
                    <div className="lg:w-1/2 mt-12 lg:mt-0 relative flex justify-center">
                        <div className="absolute w-72 h-72 lg:w-96 lg:h-96 bg-orange-500 rounded-full opacity-50 top-0 left-0 lg:left-12"></div>
                        <img src={Main} alt="Fitness" className="relative z-10 w-72 lg:w-96" />
                    </div>
                </div>
            </section>

            <section className="relative py-20 flex items-center">
                <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12">
                    <div className="lg:w-1/2 relative flex justify-center">
                        <div className="absolute w-72 h-72 lg:w-96 lg:h-96 bg-teal-500 rounded-full opacity-50 top-0 left-0 lg:left-12"></div>
                        <img src={logo} alt="Trainer" className="relative z-10 w-72 lg:w-96" />
                    </div>
                    <div className="lg:w-1/2 text-center lg:text-left mt-12 lg:mt-0">
                        <h2 className="text-5xl font-extrabold text-gray-800 mb-4">
                            Your Body Is A Work Of <br />
                            <span className="bg-orange-500 text-white px-2 py-1 inline-block rounded-md">Art In The Gym</span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <Link to="/contact" className="bg-gray-800 text-white font-bold py-2 px-6 rounded-full transition duration-300 hover:bg-gray-900">
                            Contact Us
                        </Link>
                    </div>
                    <div className="absolute bottom-0 right-0 lg:bottom-10 lg:right-10 bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4">
                        <img src={Me3} alt="User" className="w-16 h-16 rounded-full" />
                        <div>
                            <h3 className="text-xl font-bold text-gray-800">Khan Arman</h3>
                            <p className="text-gray-600">@khan.arman</p>
                            <p className="text-gray-600">987 Posts • 32k Followers</p>
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 lg:bottom-10 lg:left-10 bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4">
                        <div className="text-center">
                            <h3 className="text-xl font-bold text-orange-500">Our Satisfied Users</h3>
                            <div className="flex justify-center items-center space-x-2 mt-2">
                                <img src={talkingOnPhone} alt="User 1" className="w-10 h-10 rounded-full" />
                                <img src={talkingOnPhone} alt="User 2" className="w-10 h-10 rounded-full" />
                                <img src={talkingOnPhone} alt="User 3" className="w-10 h-10 rounded-full" />
                                <p className="text-lg font-bold text-gray-800">+10k</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="services" className="py-20 bg-gray-100">
                <div className="container mx-auto text-center px-6">
                    <h2 className="bg-orange-500 text-white px-2 py-1 inline-block rounded-md text-4xl font-bold mb-12">Our Features</h2>
                    <div className="flex flex-wrap justify-center">
                        <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
                            <div className="bg-white p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
                                <h3 className="text-2xl font-bold mb-4 text-orange-500">Personalized Workouts</h3>
                                <p className="text-gray-700">Customized workout plans tailored to your fitness level.</p>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
                            <div className="bg-white p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
                                <h3 className="text-2xl font-bold mb-4 text-orange-500">Track Progress</h3>
                                <p className="text-gray-700">Monitor your progress with our easy-to-use tracking tools.</p>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
                            <div className="bg-white p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
                                <h3 className="text-2xl font-bold mb-4 text-orange-500">Nutrition Plans</h3>
                                <p className="text-gray-700">Get nutrition plans to complement your workout routine.</p>
                            </div>
                        </div>
                        <Link to='/services' className='text-orange-500 font-semibold hover:underline'>More Services</Link>
                    </div>
                </div>
            </section>

            <section id="trainers" className="py-20 bg-orange-50">
                <div className="container mx-auto text-center px-6">
                    <h2 className="bg-orange-500 text-white px-2 py-1 inline-block rounded-md text-4xl font-bold mb-12">Meet Our Trainers</h2>
                    <div className="flex flex-wrap justify-center">
                        <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
                            <div className="bg-white p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
                                <img src={Me} alt="Trainer 1" className="w-32 h-32 rounded-full mx-auto mb-4" />
                                <h3 className="text-2xl font-bold mb-2 text-orange-500">Mr Bombastic</h3>
                                <p className="text-gray-700">Certified Personal Trainer</p>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
                            <div className="bg-white p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
                                <img src={talkingOnPhone} alt="Trainer 2" className="w-32 h-32 rounded-full mx-auto mb-4" />
                                <h3 className="text-2xl font-bold mb-2 text-orange-500">Bomba Fantastic</h3>
                                <p className="text-gray-700">Nutrition Specialist</p>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
                            <div className="bg-white p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
                                <img src={Me2} alt="Trainer 3" className="w-32 h-32 rounded-full mx-auto mb-4" />
                                <h3 className="text-2xl font-bold mb-2 text-orange-500">Mr Vanning</h3>
                                <p className="text-gray-700">Strength Coach</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <LetsTalk />
            <Footer />
        </div>
    );
}