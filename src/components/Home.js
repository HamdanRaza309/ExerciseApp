import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell, faRunning, faHeart, faStar, faAppleAlt } from '@fortawesome/free-solid-svg-icons';
import Home1 from '../assets/images/home/Home1.png';
import Home2 from '../assets/images/home/Home2.png';
import Home3 from '../assets/images/home/Home3.png';
import Home4 from '../assets/images/home/Home4.png';
import Home5 from '../assets/images/home/Home5.png';
import Home6 from '../assets/images/home/Home6.png';
import Home7 from '../assets/images/home/Home7.png';
import Home8 from '../assets/images/home/Home8.jpg';
import Home9 from '../assets/images/home/Home9.avif';
import Footer from './Footer';
import LetsTalk from './LetsTalk';

const Home = () => {
    return (
        <div className="flex flex-col items-center pt-14">
            <header className="text-center mb-8">
                <h1 className="text-5xl font-bold mb-4 w-full max-w-2xl mx-auto">
                    Transform Your Fitness Journey with
                </h1>
                <span className="bg-orange-500 text-white text-5xl px-2 py-1 mb-10 inline-block rounded-md">
                    Our Gym
                </span>
                <p className="text-lg text-gray-600 w-full max-w-xl mx-auto mb-10">
                    We are a premier fitness center specializing in personalized training, state-of-the-art equipment, and holistic wellness. Let’s achieve your fitness goals together.
                </p>
                <Link to="/specificExercises" className="bg-gray-800 text-white font-bold py-2 px-6 rounded-full transition duration-300 hover:bg-gray-900">
                    Exercises
                </Link>
            </header>
            <div className="flex justify-center items-start">
                <div className="flex flex-col items-center">
                    <div className="flex">
                        <img src={Home1} alt="Gym Training" className="rounded shadow-md w-40 h-40 hover:transform hover:scale-110 duration-200" />
                        <img src={Home2} alt="Fitness Equipment" className="rounded shadow-md w-40 h-40 hover:transform hover:scale-110 duration-200" />
                    </div>
                    <div>
                        <img src={Home3} alt="Group Fitness Class" className="rounded shadow-md w-80 h-40 hover:transform hover:scale-110 duration-200" />
                    </div>
                </div>
                <div>
                    <img src={Home4} alt="Personal Trainer" className="rounded shadow-md w-80 max-h-80 hover:transform hover:scale-110 duration-200" />
                </div>
            </div>
            <div className="text-center mt-20 bg-orange-100 w-full p-10 m-0 rounded-lg shadow-md">
                <span className="bg-orange-500 text-white font-bold text-2xl px-2 py-1 mb-5 inline-block rounded-md">
                    Trusted By 12,000+ Members
                </span>
                <p className="text-lg text-gray-500 mb-8">
                    Our members love us! Here’s a few of the many who trust our gym:
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                    <div className="flex items-center justify-center px-6 py-3 font-extrabold text-2xl">
                        <FontAwesomeIcon icon={faDumbbell} className="text-orange-500 mr-2" />
                        <span>FitLife</span>
                    </div>
                    <div className="flex items-center justify-center px-6 py-3 font-extrabold text-2xl">
                        <FontAwesomeIcon icon={faRunning} className="text-orange-500 mr-2" />
                        <span>StrongBody</span>
                    </div>
                    <div className="flex items-center justify-center px-6 py-3 font-extrabold text-2xl">
                        <FontAwesomeIcon icon={faHeart} className="text-orange-500 mr-2" />
                        <span>PeakPerformance</span>
                    </div>
                    <div className="flex items-center justify-center px-6 py-3 font-extrabold text-2xl">
                        <FontAwesomeIcon icon={faStar} className="text-orange-500 mr-2" />
                        <span>ActiveZone</span>
                    </div>
                    <div className="flex items-center justify-center px-6 py-3 font-extrabold text-2xl">
                        <FontAwesomeIcon icon={faAppleAlt} className="text-orange-500 mr-2" />
                        <span>WellnessWorks</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center mt-20 w-full p-10 rounded-lg shadow-md bg-white">
                <div className=' flex-1 md:pr-8 text-center md:text-left p-20'>
                    <span className="bg-orange-500 text-white font-bold text-2xl px-4 py-2 mb-5 inline-block rounded-md">
                        Welcome to IronEdge
                    </span>
                    <h2 className='font-bold text-3xl md:text-4xl mb-4'>
                        Fitness is Not Just a Routine, It's a Lifestyle
                    </h2>
                    <p className="text-gray-700 mb-6">
                        At IronEdge, we believe that fitness is not just about working out; it's a way of life. Our state-of-the-art facility, experienced trainers, and diverse range of classes ensure that we have something for everyone, whether you’re a beginner or a fitness enthusiast.
                    </p>
                    <Link to='/about' className="text-orange-500 font-semibold hover:underline">
                        Learn More About Us
                    </Link>
                </div>
                <div className='flex justify-around flex-1 mt-6 md:mt-0'>
                    <img src={Home5} alt="Welcome to Our Gym" className="w-auto h-96" />
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center mt-20 w-full p-10 rounded-lg shadow-md bg-white">
                <div className='flex justify-around flex-1 md:flex-shrink-0'>
                    <img src={Home6} alt="Our Facilities" className="w-auto h-96" />
                </div>
                <div className='flex-1 md:pl-8 text-center md:text-left'>
                    <span className="bg-orange-500 text-white font-bold text-2xl px-4 py-2 mb-5 inline-block rounded-md">
                        Our Facilities
                    </span>
                    <h2 className='font-bold text-3xl md:text-4xl mb-4'>
                        State-of-the-Art Equipment and More
                    </h2>
                    <p className="text-gray-700 mb-6">
                        Our gym is equipped with the latest fitness machines and free weights, ensuring you have everything you need for a comprehensive workout. From high-energy spin classes to calming yoga sessions, our group fitness classes cater to all fitness levels and interests.
                    </p>
                    <Link to='/facilities' className="text-orange-500 font-semibold hover:underline">
                        Explore Our Facilities
                    </Link>
                </div>
            </div>


            <div className="text-center mt-20 bg-orange-50 w-full p-10 m-0 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold mb-4 w-full max-w-3xl mx-auto">What Our Lovely </h1>
                <span className="bg-orange-500 text-white text-5xl px-4 py-2 mb-10 inline-block rounded-md">
                    Clients Say
                </span>
                <div className="flex flex-wrap justify-center gap-8">
                    <div className="bg-white p-6 border-2 border-gray-50 rounded-lg w-full max-w-xs hover:shadow-xl hover:transform hover:scale-110 duration-200">
                        <p className="text-gray-700 mb-4">"This gym has completely transformed my fitness routine! The trainers are experts, and the variety of classes keeps me motivated. I've gained strength and confidence in just a few weeks!"</p>
                        <div className="flex items-center">
                            <img src={Home7} alt="Client" className="w-16 h-16 rounded-full mr-4" />
                            <div>
                                <h2 className="font-semibold text-lg">Ahmed Khan</h2>
                                <h3 className="text-gray-600">High-Intensity Exercise</h3>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-6 border-2 border-gray-50 rounded-lg w-full max-w-xs hover:shadow-xl hover:transform hover:scale-110 duration-200">
                        <p className="text-gray-700 mb-4">"I’ve never enjoyed working out as much as I do here. The trainers are very encouraging, and the gym has top-notch equipment. I feel stronger and healthier every day!"</p>
                        <div className="flex items-center">
                            <img src={Home8} alt="Client" className="w-16 h-16 rounded-full mr-4" />
                            <div>
                                <h2 className="font-semibold text-lg">Muhammad Ali</h2>
                                <h3 className="text-gray-600">Yoga and Tai Chi</h3>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-6 border-2 border-gray-50 rounded-lg w-full max-w-xs hover:shadow-xl hover:transform hover:scale-110 duration-200">
                        <p className="text-gray-700 mb-4">"This gym has exceeded my expectations! The fitness programs are tailored to my goals, and the atmosphere is incredibly motivating. I’m thrilled with my progress!"</p>
                        <div className="flex items-center">
                            <img src={Home9} alt="Client" className="w-16 h-16 rounded-full mr-4" />
                            <div>
                                <h2 className="font-semibold text-lg">Omar Hassan</h2>
                                <h3 className="text-gray-600">Strength Training</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <LetsTalk />
            <Footer />
        </div>
    );
}

export default Home;
