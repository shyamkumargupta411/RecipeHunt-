import React from "react";
import { NavLink } from "react-router-dom";

export default function Mealcards({ data }) {
  return (
    <div className="meals grid grid-cols-1 md:grid-cols-3 gap-4 bg-white-600">
      {data ? (
        data.map((meal) => (
          <div
            key={meal.idMeal}
            className="meal-card border rounded-lg p-4 shadow-md hover:shadow-lg"
          >
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="text-lg font-bold mt-2">{meal.strMeal}</h3>
            <NavLink to={`/${meal.idMeal}`}>
              <button className="mt-4 text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">
                Recipe
              </button>
            </NavLink>
          </div>
        ))
      ):<p className="text-center text-gray-500">Data not found.</p>}
    </div>
  );
}
