import { useState} from "react";
import SearchBar from "./SearchBar";
import WeatherCard from "./WeatherCard";
import axios  from "axios";
console.log("API KEY:", import.meta.env.VITE_API_KEY);
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
     <div className="min-h-screen bg-gradient-to-br from-sky-900 via-blue-950 to-slate-950 flex items-center justify-center p-4">
    <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8">
      <h1 className="text-5xl font-extrabold text-center text-white mb-8 tracking-wide">Weather App</h1>
        <SearchBar fetchWeather={fetchWeather} />
        {loading && <p className="text-center mt-6 text-sky-300 animate-pulse">Loading...</p>}
        {error && <p className="text-red-400 text-center mt-6 font-medium">{error}</p>}
       {weather && <WeatherCard weather = {weather} />}
      </div>
      </div>
  )
}
export default App