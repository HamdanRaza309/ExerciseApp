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
            <h1>Exercises</h1>
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
