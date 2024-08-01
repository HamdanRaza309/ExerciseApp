import React from 'react';
import { Link } from 'react-router-dom';
import About1 from '../About1.png';
import About2 from '../About2.png';
import About3 from '../About3.png';
import About4 from '../About4.png';
import About5 from '../About5.png';
import Footer from './Footer';
import LetsTalk from './LetsTalk';

export default function About() {
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
                            <Link to="/exercise" className="bg-gray-800 text-white font-bold py-2 px-6 rounded-full mr-4 transition duration-300 hover:bg-gray-900">
                                Exercises
                            </Link>
                        </div>
                    </div>
                    <div className="lg:w-1/2 mt-12 lg:mt-0 relative flex justify-center">
                        <div className="absolute w-72 h-72 lg:w-96 lg:h-96 bg-orange-500 rounded-full opacity-50 top-0 left-0 lg:left-12"></div>
                        <img src={About1} alt="Fitness" className="relative z-10 w-72 lg:w-96" />
                    </div>
                </div>
            </section>

            <section className="relative py-20 flex items-center">
                <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12">
                    <div className="lg:w-1/2 relative flex justify-center">
                        <div className="absolute w-72 h-72 lg:w-96 lg:h-96 bg-teal-500 rounded-full opacity-50 top-0 left-0 lg:left-12"></div>
                        <img src={About2} alt="Trainer" className="relative z-10 w-72 lg:w-96" />
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
                </div>
            </section>

            <section id="services" className="py-20 bg-gray-100">
                <div className="container mx-auto text-center px-6">
                    <h2 className="bg-orange-500 text-white px-2 py-1 inline-block rounded-md text-4xl font-bold mb-12">Our Features</h2>
                    <div className="flex flex-wrap justify-center">
                        {['Personalized Workouts', 'Track Progress', 'Nutrition Plans'].map((feature, index) => (
                            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
                                <div className="bg-white p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
                                    <h3 className="text-2xl font-bold mb-4 text-orange-500">{feature}</h3>
                                    <p className="text-gray-700">
                                        {feature === 'Personalized Workouts' && 'Customized workout plans tailored to your fitness level.'}
                                        {feature === 'Track Progress' && 'Monitor your progress with our easy-to-use tracking tools.'}
                                        {feature === 'Nutrition Plans' && 'Get nutrition plans to complement your workout routine.'}
                                    </p>
                                </div>
                            </div>
                        ))}
                        <Link to='/services' className='text-orange-500 font-semibold hover:underline'>More Services</Link>
                    </div>
                </div>
            </section>

            <section id="trainers" className="py-20 bg-orange-50">
                <div className="container mx-auto text-center px-6">
                    <h2 className="bg-orange-500 text-white px-2 py-1 inline-block rounded-md text-4xl font-bold mb-12">Meet Our Trainers</h2>
                    <div className="flex flex-wrap justify-center">
                        {[
                            { name: 'Mr Vanning', title: 'Strength Coach', img: About3 },
                            { name: 'Bomba Fantastic', title: 'Nutrition Specialist', img: About4 },
                            { name: 'Rambo Jambo', title: 'Cardio Expert', img: About5 }
                        ].map((trainer, index) => (
                            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
                                <div className="bg-white p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
                                    <img src={trainer.img} alt={trainer.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
                                    <h3 className="text-2xl font-bold mb-2 text-orange-500">{trainer.name}</h3>
                                    <p className="text-gray-700">{trainer.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <LetsTalk />
            <Footer />
        </div>
    );
}
