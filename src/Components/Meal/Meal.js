import { Link, useNavigate } from 'react-router-dom';

const Meal = ({meal}) => {
    const {idMeal,strMeal,strCategory,strArea,strMealThumb} = meal;
    const navigate = useNavigate();
    const HandleDetails = (id) =>{
        navigate(`${id}`);
    }
    return (
        <div className='bg-orange-300 p-2 rounded-lg text-center'>
            <img src={strMealThumb} alt="" />
            <h1 className='text-xl '>{strMeal}</h1>
            <h1>Category : {strCategory}</h1>
            <h1>Area : {strArea}</h1>
            <Link to={`${idMeal}`} className='text-white py-1 px-2 rounded-md bg-green-500 mx-3'>Details</Link>
            <button onClick={()=>HandleDetails(idMeal)} className='text-white py-1 px-2 rounded-md bg-green-500 mx-3'> Details2</button>
        </div>
    );
};

export default Meal;