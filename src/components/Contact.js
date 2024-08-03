import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Contact = () => {
    return (
        <div className="relative w-full">
            <div className="w-full h-96 bg-orange-200 flex items-center justify-center text-center text-white rounded-b-lg">
                <div className="p-4 md:p-6 max-w-2xl">
                    <blockquote className="text-xl md:text-3xl font-bold italic">
                        "The journey of a thousand miles begins with a single step. Start your fitness journey with us today!"
                    </blockquote>
                </div>
            </div>

            <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg my-5">
                <span className="bg-orange-500 text-3xl text-white text-center px-2 py-1 inline-block rounded-md p-5 m-5">Get in Touch with Us</span>
                <div className="mb-10">
                    <h2 className="text-xl font-semibold mb-4">We’d Love to Hear from You!</h2>
                    <ul className="list-disc list-inside pl-5 space-y-4">
                        <li>
                            <strong className="font-semibold">Schedule a Tour</strong><br />
                            Book a visit to our gym to see our facilities and equipment firsthand.
                        </li>
                        <li>
                            <strong className="font-semibold">Ask About Membership</strong><br />
                            Get details about our membership plans, special offers, and pricing.
                        </li>
                        <li>
                            <strong className="font-semibold">Personal Training Inquiry</strong><br />
                            Learn more about our personal training programs and meet our trainers.
                        </li>
                    </ul>
                    <h2 className="text-xl font-semibold mt-8 mb-4">Contact Information</h2>
                    <address className="space-y-4">
                        <p><strong className="font-semibold">Gym Location</strong><br />123 Fitness Ave, Workout City, FC 45678</p>
                        <p><strong className="font-semibold">General Inquiries</strong><br />(123) 456-7890</p>
                        <p><strong className="font-semibold">Membership</strong><br /><a href="mailto:membership@gym.com" className="text-orange-500 hover:underline">membership@gym.com</a></p>
                        <p><strong className="font-semibold">Support</strong><br /><a href="mailto:support@gym.com" className="text-orange-500 hover:underline">support@gym.com</a></p>
                    </address>
                </div>
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-group">
                            <label className="block font-semibold mb-2">First Name</label>
                            <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
                        </div>
                        <div className="form-group">
                            <label className="block font-semibold mb-2">Last Name</label>
                            <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="block font-semibold mb-2">Email Address</label>
                        <input type="email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
                    </div>
                    <div className="form-group">
                        <label className="block font-semibold mb-2">Phone Number</label>
                        <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
                    </div>
                    <div className="form-group">
                        <label className="block font-semibold mb-2">Reason for Contact</label>
                        <select required className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500">
                            <option value="">Select</option>
                            <option value="tour">Schedule a Tour</option>
                            <option value="membership">Membership Inquiry</option>
                            <option value="training">Personal Training</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label className="block font-semibold mb-2">Message</label>
                        <textarea className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"></textarea>
                    </div>
                    <div className="form-group flex items-center space-x-2">
                        <input type="checkbox" className="h-5 w-5 text-orange-500 rounded border-gray-300 focus:ring-2 focus:ring-orange-500" />
                        <label className="text-gray-700">I’d like to receive updates and offers from the gym. I understand and agree to the <Link to='/contact' className="text-orange-500 hover:underline">privacy policy</Link>.</label>
                    </div>
                    <p className="text-gray-600 text-sm">
                        This site is protected by reCAPTCHA and the Google <Link to="https://policies.google.com/privacy" className="text-orange-500 hover:underline">Privacy Policy</Link> and <Link to="https://policies.google.com/terms" className="text-orange-500 hover:underline">Terms of Service</Link> apply.
                    </p>
                    <button type="submit" className="w-full bg-orange-500 text-white py-3 rounded-lg shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500">SEND MESSAGE</button>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;
