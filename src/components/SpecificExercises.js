import React, { useState } from 'react';
import LetsTalk from './LetsTalk';
import Footer from './Footer';

// Function to capitalize the first letter of each word
function capitalizeFirstLetter(text) {
    if (typeof text !== 'string') return text; // Check if text is a string

    return text
        .split(' ') // Split the sentence into words
        .map(word => {
            if (word.length > 0) {
                const firstChar = word.charAt(0);
                if (firstChar === firstChar.toLowerCase()) {
                    return word.charAt(0).toUpperCase() + word.slice(1);
                }
            }
            return word;
        })
        .join(' '); // Join the words back into a sentence
}

const SpecificExercises = () => {
    const [specificExercises, setSpecificExercises] = useState([]);
    const [bodyPart, setBodyPart] = useState('');
    const [numOfExercises, setNumOfExercises] = useState(15);

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        await fetchExercises(bodyPart, numOfExercises);
    };

    const fetchExercises = async (bodyPart, limit) => {
        try {
            const response = await fetch(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=${limit}&offset=0`, {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': '902d47cfdamsha2fb2123c00c6e1p150b14jsn9ff959b8efa8',
                    'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
                }
            });

            const data = await response.json();
            if (limit > numOfExercises) {
                setSpecificExercises(prevExercises => [...prevExercises, ...data.slice(numOfExercises)]);
            } else {
                setSpecificExercises(data);
            }
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    };

    const handleLoadMore = async () => {
        const newLimit = numOfExercises + 15;
        setNumOfExercises(newLimit);
        await fetchExercises(bodyPart, newLimit);
    };

    const handleOnChange = (e) => {
        setBodyPart(e.target.value);
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h2 className="text-2xl font-bold text-orange-500 mb-4 text-center md:text-left">Enter Body Part Name to get Exercises</h2>
            <form onSubmit={handleOnSubmit} className="mb-6">
                <div className="relative mb-4">
                    <input
                        type="text"
                        className="w-full p-4 pl-8 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
                        id="specificExercise"
                        name="specificExercise"
                        placeholder="Get Best Exercises"
                        onChange={handleOnChange}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition"
                >
                    Get Exercises
                </button>
            </form>
            <div>
                {specificExercises.length > 0 && (
                    <div className="flex flex-col p-6 bg-white rounded-xl shadow-lg">
                        {specificExercises.map((exercise, index) => {
                            // Capitalize text values for each exercise
                            const capitalizedExerciseName = capitalizeFirstLetter(exercise.name);
                            const capitalizedBodyPart = capitalizeFirstLetter(exercise.bodyPart);
                            const capitalizedEquipment = capitalizeFirstLetter(exercise.equipment);
                            const capitalizedTarget = capitalizeFirstLetter(exercise.target);
                            const capitalizedSecondaryMuscles = exercise.secondaryMuscles.length > 0
                                ? exercise.secondaryMuscles.map(capitalizeFirstLetter).join(', ')
                                : 'None';
                            const capitalizedInstructions = capitalizeFirstLetter(exercise.instructions);

                            return (
                                <div key={index} className="flex flex-col p-6 mb-6 md:mb-8 bg-white rounded-xl shadow-lg hover:shadow-2xl">
                                    <span className="text-center text-3xl mb-6 bg-orange-500 text-white py-3 inline-block rounded-md">{capitalizedExerciseName}</span>

                                    <div className='flex flex-col md:flex-row space-x-5'>
                                        <div className="flex-1 md:pr-4 mb-4 md:mb-0 h-auto rounded-lg border border-[#d0d8e0] shadow-md">
                                            <div className="bg-white p-4">
                                                <h3 className="text-md font-semibold text-[#70d6ff]">Body Part</h3>
                                                <p className="text-gray-800">{capitalizedBodyPart}</p>
                                            </div>
                                            <div className="bg-white p-4">
                                                <h3 className="text-md font-semibold text-[#70d6ff]">Equipment</h3>
                                                <p className="text-gray-800">{capitalizedEquipment}</p>
                                            </div>
                                            <div className="bg-white p-4">
                                                <h3 className="text-md font-semibold text-[#70d6ff]">Target Muscle</h3>
                                                <p className="text-gray-800">{capitalizedTarget}</p>
                                            </div>
                                            <div className="bg-white p-4">
                                                <h3 className="text-md font-semibold text-[#70d6ff]">Secondary Target Muscles</h3>
                                                <p className="text-gray-800">{capitalizedSecondaryMuscles}</p>
                                            </div>
                                        </div>
                                        <div className="relative flex-1 mb-4 md:mb-0">
                                            <img src={exercise.gifUrl} alt={exercise.name} className="w-full h-auto object-cover rounded-lg shadow-md" />
                                        </div>
                                        <div className="flex-1 text-gray-700 bg-white p-4 rounded-lg border border-[#d0d8e0] shadow-md">
                                            <h3 className="text-md font-semibold text-[#70d6ff]">Instructions</h3>
                                            <p className="text-gray-800">{capitalizedInstructions}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
                {specificExercises.length > 0 && (
                    <div className="flex justify-center mt-6">
                        <button
                            onClick={handleLoadMore}
                            className="px-6 py-2 mb-16 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition"
                        >
                            Load More
                        </button>
                    </div>
                )}
            </div>

            <LetsTalk />
            <Footer />
        </div>
    );
};

export default SpecificExercises;
