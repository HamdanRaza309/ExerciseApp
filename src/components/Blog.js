import React from 'react';
import LetsTalk from './LetsTalk';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Blog = () => {
    const blogs = [
        {
            title: "The Ultimate Guide to Starting Your Fitness Journey",
            description: "Embarking on a fitness journey can be daunting, but with the right guidance and mindset, you can achieve your goals. Discover tips and strategies to kickstart your path to a healthier you.",
            image: require('../assets/images/blogs/The Ultimate Guide to Starting Your Fitness Journey.jpg'),
            readMoreLink: "#"
        },
        {
            title: "Top 10 Exercises to Build Muscle and Strength",
            description: "Building muscle and strength requires a well-structured workout plan. Learn about the top 10 exercises that can help you gain muscle mass and enhance your strength.",
            image: require('../assets/images/blogs/Exercises to Build Muscle and Strength.jpg'),
            readMoreLink: "#"
        },
        {
            title: "The Importance of Nutrition in Fitness",
            description: "Nutrition plays a crucial role in achieving fitness goals. Understand the fundamentals of a balanced diet and how it complements your workout routine.",
            image: require('../assets/images/blogs/The Importance of Nutrition in Fitness.jpg'),
            readMoreLink: "#"
        },
        {
            title: "How to Stay Motivated and Consistent with Your Workouts",
            description: "Maintaining motivation can be challenging, but consistency is key to success. Explore practical tips to keep yourself motivated and committed to your fitness routine.",
            image: require('../assets/images/blogs/How to Stay Motivated and Consistent with Your Workouts.jpg'),
            readMoreLink: "#"
        },
        {
            title: "Yoga for Flexibility and Stress Relief",
            description: "Yoga is an excellent practice for improving flexibility and managing stress. Discover the benefits of incorporating yoga into your fitness regimen.",
            image: require('../assets/images/blogs/Yoga for Flexibility and Stress Relief.jpg'),
            readMoreLink: "#"
        },
        {
            title: "Creating a Balanced Workout Plan",
            description: "A balanced workout plan ensures you target all muscle groups and avoid overtraining. Learn how to design a comprehensive workout schedule that suits your needs.",
            image: require('../assets/images/blogs/Creating a Balanced Workout Plan.jpg'),
            readMoreLink: "#"
        },
        {
            title: "The Benefits of Group Fitness Classes",
            description: "Group fitness classes offer a fun and engaging way to stay fit. Explore the various types of classes available and how they can enhance your fitness journey.",
            image: require('../assets/images/blogs/The Benefits of Group Fitness Classes.jpg'),
            readMoreLink: "#"
        },
        {
            title: "How to Choose the Right Personal Trainer",
            description: "Finding the right personal trainer can make a significant difference in your fitness progress. Learn what to look for in a trainer to ensure you get the best guidance and support.",
            image: require('../assets/images/blogs/How to Choose the Right Personal Trainer.jpg'),
            readMoreLink: "#"
        },
        {
            title: "Effective Cardio Workouts for Weight Loss",
            description: "Cardio workouts are essential for weight loss and cardiovascular health. Discover the most effective cardio exercises to help you shed pounds and improve your fitness level.",
            image: require('../assets/images/blogs/Effective Cardio Workouts for Weight Loss.jpg'),
            readMoreLink: "#"
        },
        {
            title: "Mindfulness and Fitness: The Connection",
            description: "Mindfulness practices can enhance your fitness routine by improving focus and reducing stress. Explore the connection between mindfulness and physical fitness.",
            image: require('../assets/images/blogs/Mindfulness and Fitness The Connection.jpg'),
            readMoreLink: "#"
        }
    ];

    const relatedArticles = [
        {
            title: "Cardio Workouts: Best Practices for Maximum Results",
            description: "Cardio workouts are essential for heart health and fat loss. Learn the best practices to maximize your results and keep your cardiovascular system in top shape.",
            image: require('../assets/images/blogs/Cardio Workouts Best Practices for Maximum Results.jpg'),
            readMoreLink: "#"
        },
        {
            title: "Strength Training for Women: Debunking Myths and Building Confidence",
            description: "Strength training is not just for men. Discover the benefits for women, debunk common myths, and build confidence in your strength training routine.",
            image: require('../assets/images/blogs/Strength Training for Women Debunking Myths and Building Confidence.jpg'),
            readMoreLink: "#"
        },
        {
            title: "Recovery and Rest: Why They Are Crucial for Your Fitness Goals",
            description: "Recovery and rest are as important as your workouts. Understand the significance of recovery and how it helps in muscle growth and injury prevention.",
            image: require('../assets/images/blogs/Recovery and Rest Why They Are Crucial for Your Fitness Goals.jpg'),
            readMoreLink: "#"
        },
        {
            title: "HIIT vs. Steady-State Cardio: Which is Better?",
            description: "High-Intensity Interval Training (HIIT) and steady-state cardio both have their benefits. Compare the two to determine which fits your fitness goals best.",
            image: require('../assets/images/blogs/HIIT vs. Steady-State Cardio Which is Better.jpg'),
            readMoreLink: "#"
        },
        {
            title: "Healthy Eating Habits for Gym-Goers",
            description: "Nutrition is key to achieving fitness goals. Learn about healthy eating habits that complement your workout routine and support muscle growth and fat loss.",
            image: require('../assets/images/blogs/Healthy Eating Habits for Gym-Goers.jpg'),
            readMoreLink: "#"
        },
        {
            title: "Effective Warm-Up Routines to Prevent Injury",
            description: "Warming up before workouts is crucial for preventing injuries. Discover effective warm-up routines that prepare your body for intense exercise.",
            image: require('../assets/images/blogs/Effective Warm-Up Routines to Prevent Injury.jpg'),
            readMoreLink: "#"
        }
    ];

    return (
        <div className="flex flex-col items-center bg-pink-50 w-full">


            <section className="w-full h-[80vh] bg-gradient-to-r from-[#f7c399] to-[#ffc061] flex items-center justify-center text-center text-white overflow-hidden shadow-lg relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#f7c399] to-[#ffc061] opacity-60"></div>
                <div className="container mx-auto text-center relative z-10">
                    <h1 className="text-4xl font-bold mb-4 leading-tight">
                        Welcome to Our Blog
                    </h1>
                    <p className="text-lg  mb-16 leading-relaxed">
                        Discover the latest news, tips, and insights from our experts. Stay updated with our articles on various topics, from health and wellness to industry trends and personal development.
                    </p>
                    <Link to="/about" className="bg-gray-800 text-white font-bold py-2 px-6 rounded-full mr-4 transition duration-300 hover:bg-gray-900">
                        About Us
                    </Link>
                    <p className="mt-6 text-sm italic my-5">
                        Don't miss out on our latest updates and exclusive content. Sign up for our newsletter for regular updates!
                    </p>
                </div>
            </section>


            <div className="container mx-auto text-center my-10">
                <h2 className="bg-orange-500 text-5xl font-bold text-center text-white w-auto mb-12 px-2 py-3 inline-block rounded-md">Featured Posts</h2>
                <p className="text-lg mb-6">
                    Check out our top articles of the month. These are must-reads!
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                {blogs.map((blog, index) => (
                    <div key={index} className="bg-white p-6 shadow-lg rounded-lg transform hover:scale-105 transition-transform duration-300">
                        <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover rounded-t-lg" />
                        <div className="mt-4">
                            <h2 className="text-2xl font-bold text-gray-800">{blog.title}</h2>
                            <p className="mt-2 text-gray-600">{blog.description}</p>
                            <a href={blog.readMoreLink} className="mt-4 inline-block bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors duration-300">
                                Read More
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex flex-col items-center mt-16 mb-10">
                <span className="bg-orange-500 text-4xl font-bold text-center text-white w-auto mb-12 px-2 py-3 inline-block rounded-md">Related Articles</span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {relatedArticles.map((article, index) => (
                        <div key={index} className="bg-white p-6 shadow-lg rounded-lg transform hover:scale-105 transition-transform duration-300">
                            <img src={article.image} alt={article.title} className="w-full h-32 object-cover rounded-t-lg" />
                            <div className="mt-4">
                                <h3 className="text-xl font-bold text-gray-800">{article.title}</h3>
                                <a href={article.readMoreLink} className="mt-4 inline-block bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors duration-300">
                                    Read More
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <LetsTalk />
            <Footer />
        </div>
    );
};

export default Blog;
