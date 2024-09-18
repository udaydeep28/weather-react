/* eslint-disable react/prop-types */
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";
import { API_URl, API_KEY } from "./env";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");

  let getWeatherInfo = async () => {
    let data = await fetch(
      `${API_URl}?q=${city}&appid=${API_KEY}&units=metric`
    );
    let jsonData = await data.json();
    // console.log(jsonData);

    let result = {
      city: city,
      temp: jsonData.main.temp,
      tempMin: jsonData.main.temp_min,
      tempMax: jsonData.main.temp_max,
      humidity: jsonData.main.humidity,
      feelsLike: jsonData.main.feels_like,
      weather: jsonData.weather[0].description,
    };
    // console.log(result);
    return result;
  };

  let handleChange = (evt) => {
    setCity(evt.target.value);
  };
  let handleSubmit = async (evt) => {
    evt.preventDefault();
    console.log(city);
    setCity("");
    let newInfo = await getWeatherInfo();
    updateInfo(newInfo);
  };
  return (
    <div className="SearchBox">
      <h1 className="weather-app-title">Weather App</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="Enter City"
          variant="outlined"
          required
          autoComplete="off"
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}
