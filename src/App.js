import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';
import MealDetails from './Components/MealDetails/MealDetails';
import Resturant from './Components/Resturant/Resturant';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        { path: '/home', element: <Home></Home> },
        {
          path: '/resturant',
          loader: async()=>{
            return fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a');
          },
          element: <Resturant></Resturant>,
        },
        {
          path : 'resturant/:idMeal',
          loader : async({params})=>{
              return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeal}`);
          },
          element : <MealDetails></MealDetails>
        },
        {path:'*',element: <h1 className='text-5xl text-red-500 text-center'>Error No Page/Data found..</h1>}
      ]
    },
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
