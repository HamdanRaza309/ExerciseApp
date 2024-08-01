import React from 'react';
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

export default function ExerciseSet(props) {
    const { bodyPart, equipment, gifUrl, exerciseName, target, secondaryMuscles, instructions } = props;

    // Capitalize the first letter of each word in all relevant props
    const capitalizedBodyPart = capitalizeFirstLetter(bodyPart);
    const capitalizedEquipment = capitalizeFirstLetter(equipment);
    const capitalizedExerciseName = capitalizeFirstLetter(exerciseName);
    const capitalizedTarget = capitalizeFirstLetter(target);
    const capitalizedSecondaryMuscles = secondaryMuscles.length > 0 ? secondaryMuscles.map(capitalizeFirstLetter).join(', ') : 'None';
    const capitalizedInstructions = capitalizeFirstLetter(instructions);

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <div className="flex flex-col p-6 mb-6 md:mb-8 bg-white rounded-xl shadow-lg hover:shadow-2xl">
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
                        <img src={gifUrl} alt={capitalizedExerciseName} className="w-full h-auto object-cover rounded-lg shadow-md" />
                    </div>
                    <div className="flex-1 text-gray-700 bg-white p-4 rounded-lg border border-[#d0d8e0] shadow-md">
                        <h3 className="text-md font-semibold text-[#70d6ff]">Instructions</h3>
                        <p className="text-gray-800">{capitalizedInstructions}</p>
                    </div>
                </div>
            </div>
            {/* <LetsTalk />
            <Footer /> */}
        </div>
    );
}
