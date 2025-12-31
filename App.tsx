import { useState} from "react";
import SearchBar from "./SearchBar";
import axios  from "axios";
function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState("");

  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = `https://api.openweathermap.org/data/3.0/onecall?&appid={API_KEY}`;

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
  }
  return (
    <div className="bg-voilet flex flex-col items-center justify-center min-h-screen">
      <div className="bg-black/90 text-white shadow-1g p-8 max-w-md rounded-md">
        <h1 className="text-4xl font-bold text-center mb-10 p-2">Weather App</h1>
        <SearchBar fetchWeather={fetchWeather} />
      </div>
    </div>
  )
}
export default App
