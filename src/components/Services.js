import React from 'react';
import Footer from './Footer'
import LetsTalk from './LetsTalk';
const Services = () => {
    const services = [
        {
            title: "Personal Training",
            description: "Customized fitness programs designed by certified trainers to meet individual fitness goals.",
            details: "One-on-one sessions, small group training, and virtual sessions."
        },
        {
            title: "Group Fitness Classes",
            description: "Scheduled classes for various fitness activities that promote group participation and motivation.",
            details: "Yoga, Pilates, spinning, Zumba, HIIT, strength training, and more."
        },
        {
            title: "Strength and Conditioning",
            description: "Programs focusing on building muscle strength, endurance, and overall fitness.",
            details: "Weightlifting, resistance training, and functional fitness."
        },
        {
            title: "Cardiovascular Training",
            description: "Exercises designed to improve heart and lung health.",
            details: "Treadmill workouts, cycling, rowing, and elliptical training."
        },
        {
            title: "Nutrition Counseling",
            description: "Guidance on diet and nutrition to complement fitness goals and overall health.",
            details: "Personalized meal plans, dietary advice, and nutritional assessments."
        },
        {
            title: "Body Composition Analysis",
            description: "Assessments to measure body fat percentage, muscle mass, and other fitness metrics.",
            details: "InBody scans, BMI calculations, and fitness assessments."
        },
        {
            title: "Rehabilitation and Recovery",
            description: "Services to aid in injury recovery and improve physical function.",
            details: "Stretching classes, foam rolling, physiotherapy, and massage therapy."
        },
        {
            title: "Specialty Programs",
            description: "Targeted fitness programs for specific groups or goals.",
            details: "Pre-natal and post-natal fitness, senior fitness, sports-specific training, and weight loss programs."
        },
        {
            title: "Online Classes and Virtual Training",
            description: "Remote fitness options for convenience and flexibility.",
            details: "Live-streamed classes, on-demand workouts, and virtual personal training sessions."
        },
        {
            title: "Corporate Wellness Programs",
            description: "Customized fitness solutions for businesses to promote employee health and wellness.",
            details: "On-site classes, wellness challenges, and health assessments."
        },
        {
            title: "Youth Programs",
            description: "Fitness programs designed for children and teenagers.",
            details: "Youth fitness classes, sports training, and summer camps."
        },
        {
            title: "Spa and Wellness Services",
            description: "Additional wellness services to enhance overall well-being.",
            details: "Massages, aromatherapy, and relaxation sessions."
        },
    ];

    return (
        <div className="min-h-screen">
            {/* Quote Section */}
            <div className="w-full h-[80vh] bg-gradient-to-r from-[#f7c399] to-[#ffc061] flex items-center justify-center text-center text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#ffffff" fillOpacity="0.3" d="M0,128L1440,256L0,320Z"></path>
                    </svg>
                </div>
                <div className="relative p-6 max-w-4xl">
                    <blockquote className="text-3xl md:text-4xl font-bold italic">
                        "Your body can stand almost anything. It's your mind that you have to convince."
                    </blockquote>
                </div>
            </div>

            {/* Services Section */}
            <div className="bg-[#f7f7f7] py-16">
                <div className="container mx-auto px-4">
                    <span className="bg-orange-500 text-4xl font-bold text-center mb-12 text-white px-2 py-1 inline-block rounded-md">Our Services</span>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                                <div className="p-6">
                                    <h2 className="text-2xl font-semibold mb-4 text-[#ff9770]">{service.title}</h2>
                                    <p className="text-gray-700 mb-4">{service.description}</p>
                                    <p className="text-gray-600 italic">{service.details}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <LetsTalk />
            <Footer />
        </div>
    );
}

export default Services;
