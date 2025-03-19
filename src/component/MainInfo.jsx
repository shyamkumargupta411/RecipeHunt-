import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function MainInfo() {
  const { mealid } = useParams();
  const [info, setInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMealInfo = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch meal data");
        }
        const jsonData = await response.json();
        if (jsonData.meals) {
          setInfo(jsonData.meals[0]);
        } else {
          setError("No meal found for this ID.");
        }
      } catch (err) {
        setError(err.message);
      }
    };

    fetchMealInfo();
  }, [mealid]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!info) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex items-center flex-col">
        <div style={{height:"100px"}}></div>
      <h1 className="text-5xl font-bold mb-2">{info.strMeal}</h1>
      <img src={info.strMealThumb} alt={info.strMeal} style={{ width: "800px" , height:"400px" }} />
      <div style={{height:"20px"}}></div>
      <h2 className="text-3xl font-bold mb-2 ">
        Step-Instruction
      </h2>
      <p className="bg-[#D1D5DB]" style={{ width: "600px"  }}>{info.strInstructions}</p>
      <div style={{height:"20px"}}></div>
      <h1 className="text-3xl font-bold mb-2">Ingredients:</h1>
      <ul>
        {Array.from({ length: 20 }).map((_, index) => {
          const ingredient = info[`strIngredient${index + 1}`];
          const measure = info[`strMeasure${index + 1}`];
          return (
            ingredient && (
              <li key={index}>
                {ingredient} - {measure}
              </li>
            )
          );
        })}
      </ul>
    </div>
  );
}
