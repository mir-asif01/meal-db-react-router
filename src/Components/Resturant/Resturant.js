import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Meal from '../Meal/Meal';

const Resturant = () => {
    const data = useLoaderData();
    const meals = data.meals;
    // console.log(meals);
    return (
        <div className='p-8'>
            <h1 className='text-center text-2xl mb-2'>This is Resturant</h1>
            <div className='grid grid-cols-3 gap-2'>
                {
                    meals.map(meal=> <Meal key={meal.idMeal} meal={meal}></Meal>)
                }
            </div>
        </div>
    );
};

export default Resturant;