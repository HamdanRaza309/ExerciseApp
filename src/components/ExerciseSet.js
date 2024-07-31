import React from 'react';

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
        <div className="bg-gradient-to-r from-[#f0f4f8] to-[#e0e8f0] shadow-lg rounded-lg p-6 m-4 max-w-3xl mx-auto border border-[#d0d8e0]">
            <div className="flex flex-col items-center">
                <h2 className="text-3xl font-extrabold text-[#3e92cc] mb-6" style={{ opacity: 1 }}>
                    {capitalizedExerciseName}
                </h2>
                <div className="flex flex-col md:flex-row w-full">
                    <div className="w-full md:w-1/2 p-4 flex flex-col space-y-4">
                        <div className="bg-white p-4 rounded-lg border border-[#d0d8e0] shadow-md">
                            <h3 className="text-md font-semibold text-[#70d6ff]">Body Part</h3>
                            <p className="text-gray-800">{capitalizedBodyPart}</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-[#d0d8e0] shadow-md">
                            <h3 className="text-md font-semibold text-[#70d6ff]">Equipment</h3>
                            <p className="text-gray-800">{capitalizedEquipment}</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-[#d0d8e0] shadow-md">
                            <h3 className="text-md font-semibold text-[#70d6ff]">Target</h3>
                            <p className="text-gray-800">{capitalizedTarget}</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-[#d0d8e0] shadow-md">
                            <h3 className="text-md font-semibold text-[#70d6ff]">Secondary Muscles</h3>
                            <p className="text-gray-800">{capitalizedSecondaryMuscles}</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                        <img
                            src={gifUrl}
                            alt={capitalizedExerciseName}
                            className="w-full h-full object-cover rounded-lg border border-[#d0d8e0]"
                            style={{ opacity: 0.8 }} // Lower opacity for the GIF
                        />
                    </div>
                </div>
                <div className="w-full mt-6 bg-white p-4 rounded-lg border border-[#d0d8e0] shadow-md">
                    <h3 className="text-md font-semibold text-[#70d6ff]">Instructions</h3>
                    <p className="text-gray-800">{capitalizedInstructions}</p>
                </div>
            </div>
        </div>
    );
}
