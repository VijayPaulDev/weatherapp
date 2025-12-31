import React, { useState} from "react";


const SearchBar = ({fetchWeather}) => {
    const [city, setCity]= useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        if(city.trim()){
            fetchWeather(city)
            setCity('');
        }
    }
    return(
        <form className="flex" onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter City name" value={city} onChange={(e) => setCity(e.target.value)} 
            className="flex-1 p-2 border border-gray-300  rounded-l-lg outline-none border-r-0 text-2xl"/>
           <button type="submit" className="bg-green-500 border cursor-pointer p-2 hover:bg-green-300 border-l-0 rounded-r-lg border-gray-3">
            search
           </button>
        </form>
    )
}

export default SearchBar