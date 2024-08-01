import React from 'react'
import { Link } from 'react-router-dom'

export default function LetsTalk() {
    return (
        <div className='bg-white p-28 rounded-lg shadow-lg text-center'>

            <h1 className='text-5xl font-bold my-3'>You want to Join?  <span className="text-orange-600 text-5xl px-2 py-1 inline-block rounded-md font-bold my-3">Lets Join!</span> </h1>
            <p className='my-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est sunt explicabo vero rerum quas modi, ipsum aliquam. Fuga accusamus adipisci necessitatibus non quasi, laboriosam distinctio totam saepe impedit a unde.</p>
            <Link to="/contact" className="bg-gray-800 text-white font-bold py-2 px-6 rounded-full transition duration-300 hover:bg-gray-900 ">
                Let's Connect
            </Link>
        </div>
    )
}
