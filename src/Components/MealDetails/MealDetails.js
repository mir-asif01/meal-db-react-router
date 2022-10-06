import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MealDetails = () => {
    const details = useLoaderData();
    const { idMeal, strMeal, strInstructions, strMealThumb } = details.meals[0];
    return (
        <div>
            <h1 className='text-3xl text-rose-500 text-center bg-green-200 p-6 mb-5'>{strMeal} Meal Details</h1>
            <div className='bg-gray-200 p-5 flex flex-col justify-center items-center'>
                <img src={strMealThumb} className='w-2/5' alt="" />
                <h1 className='text-center text-3xl'>ID : {idMeal}</h1>
                <h1 className='text-center text-3xl'>Name : {strMeal}</h1>
                <p className='text-center text-xl'>Instruction : {strInstructions}</p>
                
            </div>
        </div>
    );
};

export default MealDetails;