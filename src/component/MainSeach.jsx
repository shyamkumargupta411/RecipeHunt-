import { useState } from "react";
import Mealcards from "./MainCard";

export default function MainSearch() {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState("");
  const [msg, setMsg] = useState("");

  const myFun = async () =>{
    if(search == ""){
        setMsg("Please Enter Something")
    }else{
        const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
        const jsonData = await get.json();
        setData(jsonData.meals)
        setMsg("")
    
    }
}

  return (
    <div className="p-4 ">
      <div className="text-center mb-6">
        <h1 className="text-5xl font-bold mb-2">The Recipe World</h1>
        <div>
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search for a recipe..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={myFun}
          className="mt-4 w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
        >
          Search
        </button>
        </div>
        {msg && <p className="mt-2 text-red-500">{msg}</p>}
      </div>
      <div>
        { <Mealcards data={data} /> }
      </div>
    </div>
  );
}
