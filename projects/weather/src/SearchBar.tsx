import React, { useState} from "react";

interface SearchBarProps {
  fetchWeather: (city: string) => void;
}

const SearchBar = ({ fetchWeather }: SearchBarProps) => {
  const [city, setCity] = useState<string>("");


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(city.trim()){
            fetchWeather(city)
            setCity('');
        }
    }
    return(
        <form className="flex" onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter City name" value={city} onChange={(e) => setCity(e.target.value)} 
            className="flex-1 px-4 py-3 rounded-xl bg-white/20 border border-white/20 text-white placeholder-gray-300
                         focus:outline-none focus:ring-2 focus:ring-sky-400"/>
           <button type="submit" className=" rounded-2xl bg-sky-500 hover:bg-sky-600 text-white font-semibold shadow-lg m-5">
            search
           </button>
        </form>
    )
}

export default SearchBar