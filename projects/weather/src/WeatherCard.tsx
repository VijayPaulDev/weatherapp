function WeatherCard({ weather }: any) {
  return (
     <div className="mt-6">
      <h2 className="text-3xl font-bold text-center">
        {weather.name}, {weather.sys.country}
      </h2>
      <div className="flex justify-center items-center mt-4">
        <img
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].description}
          className="mx-auto w-28 h-28"
        />
        <p className="text-4xl font-bold">{Math.round(weather.main.temp)}°C</p>
      </div>
      <p className="text-center text-gray-400 capitalize">
        {weather.weather[0].description}
      </p>
      <div className="grid grid-cols-2 gap-4 mt-6 mt-8 rounded-2xl bg-white/10 border border-white/20 p-6
                       backdrop-blur-md shadow-xl">
        <div className="text-center">
          <p className="text-gray-400">Humidity</p>
          <p className="font-bold">{weather.main.humidity}%</p>
        </div>
        <div className="text-center">
          <p className="text-gray-400">Wind</p>
          <p className="font-bold">{weather.wind.speed} m/s</p>
        </div>
        <div className="text-center">
          <p className="text-gray-400">Pressure</p>
          <p className="font-bold">{weather.main.pressure} hPa</p>
        </div>
        <div className="text-center">
          <p className="text-gray-400">Feels like</p>
          <p className="font-bold">{Math.round(weather.main.feels_like)}°C</p>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard