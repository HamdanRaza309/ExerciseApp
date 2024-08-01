import React from 'react';

const Blog = () => {
    const blogs = [
        {
            title: "What is the future for aspiring Software developers? Trends to look forward",
            description: "Technology is always evolving and staying ahead requires continuous learning...",
            image: "https://via.placeholder.com/400x300",
            readMoreLink: "#"
        },
        {
            title: "How to Make Use of Facebook: Proves Easy",
            description: "Facebook remains one of the most versatile platforms for marketing...",
            image: "https://via.placeholder.com/400x300",
            readMoreLink: "#"
        },
        {
            title: "Teaching College Students about Startup Business",
            description: "College is an ideal time to start exploring entrepreneurial opportunities...",
            image: "https://via.placeholder.com/400x300",
            readMoreLink: "#"
        },
        {
            title: "How to work with app developers and digital product companies",
            description: "Working with app developers can streamline your project and bring it to market faster...",
            image: "https://via.placeholder.com/400x300",
            readMoreLink: "#"
        }
    ];

    const relatedArticles = [
        {
            title: "What is the future for aspiring Software developers? Trends to look forward",
            image: "https://via.placeholder.com/400x300",
            readMoreLink: "#"
        },
        {
            title: "How to Make Use of Facebook: Proves Easy",
            image: "https://via.placeholder.com/400x300",
            readMoreLink: "#"
        },
        {
            title: "Teaching College Students about Startup Business",
            image: "https://via.placeholder.com/400x300",
            readMoreLink: "#"
        }
    ];

    return (
        <div className="bg-pink-50 p-8">
            <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Checkout Our Blog</h1>
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
            <div className="mt-16">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Related Articles</h2>
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
        </div>
    );
};

export default Blog;
