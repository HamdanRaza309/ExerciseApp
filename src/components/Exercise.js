import React, { useState, useEffect } from 'react';
import ExerciseSet from './ExerciseSet';

export default function Exercise() {
    const [exercises, setExercises] = useState([]);

    const fetchData = async () => {
        const url = 'https://exercisedb.p.rapidapi.com/exercises?limit=10&offset=0';
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '902d47cfdamsha2fb2123c00c6e1p150b14jsn9ff959b8efa8',
                'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
            }
        };
        try {
            let response = await fetch(url, options);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            let data = await response.json();
            setExercises(data); // Set the entire array of exercise objects
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div className="w-full h-[80vh] bg-gradient-to-r from-[#f7c399] to-[#ffc061] flex items-center justify-center text-center text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#ffffff" fillOpacity="0.3" d="M0,128L1440,256L0,320Z"></path>
                    </svg>
                </div>
                <div className="relative p-6 max-w-4xl">
                    <blockquote className="text-3xl md:text-4xl font-bold italic">
                        "Fitness is not just about building a strong body, but also about fostering a resilient mind and a healthier lifestyle."
                    </blockquote>
                </div>
            </div>
            <div>
                {exercises.map((exercise) => {
                    return (
                        <div key={exercise.id}>
                            <ExerciseSet
                                bodyPart={exercise.bodyPart}
                                equipment={
                                    exercise.equipment ? exercise.equipment.slice(0, 50) : ""
                                }
                                gifUrl={exercise.gifUrl}
                                id={exercise.id}
                                exerciseName={exercise.name}
                                target={exercise.target}
                                secondaryMuscles={exercise.secondaryMuscles}
                                instructions={exercise.instructions}
                            />
                        </div>
                    );
                })}
            </div>
        </>
    );
}
