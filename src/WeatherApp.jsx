import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "delhi",
    feelsLike: 24.02,
    humidity: 100,
    temp: 23.05,
    tempMax: 23.05,
    tempMin: 23.05,
    weather: "drizzle",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };
  return (
    <>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </>
  );
}
