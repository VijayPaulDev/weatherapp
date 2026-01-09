import { useState} from "react";
import SearchBar from "./SearchBar";
import WeatherCard from "./WeatherCard";
import axios  from "axios";

interface WeatherData {
  name: string;
  sys: {
    country: string;    
  };
  weather: {
    icon: string;
    description: string;
  }[];
  main: {
    temp: number;
    humidity: number;
    pressure: number;
    feels_like: number;
  };
  wind: {
    speed: number;
  };
}


function App() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = `https://api.openweathermap.org/data/2.5/weather`;

  const fetchWeather = async (city: string) => {
    setLoading(true);
    setError("");
    try{
      const url = `${API_URL}?q=${city}&units=metric&appid=${API_KEY}`;
      const response = await axios.get(url);
      console.log(response.data);
      setWeather(response.data);

    } catch(err: any){
      if (err.response && err.response.status ===404){
        setError("city not found please try again.")
      }
      else{
        setError("An error occured please try again later");
      }
      setWeather(null);
    }
    finally{
      setLoading(false);
    }
    }
  return (
    <div className="bg-purple-400 flex flex-col items-center justify-center min-h-screen">
      <div className="bg-black/90 text-white shadow-1g p-8 max-w-md rounded-md">
        <h1 className="text-4xl font-bold text-center mb-10 p-2">Weather App</h1>
        <SearchBar fetchWeather={fetchWeather} />
        {loading && <p className="text-center mt-4">Loading...</p>}
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
       {weather && <WeatherCard weather = {weather} />}
      </div>
      </div>
  )
}
export default App