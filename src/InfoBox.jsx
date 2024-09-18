/* eslint-disable react/prop-types */
import "./InfoBox.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

export default function InfoBox({ info }) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1579619572008-3fe9f19748ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  const HOT_URL =
    "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  const COLD_URL =
    "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  const RAINY_URL =
    "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhaW55JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={
            info.temp > 25
              ? HOT_URL
              : info.temp < 10
              ? COLD_URL
              : info.weather.toLowerCase().includes("rain")
              ? RAINY_URL
              : INIT_URL
          }
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h3"
            component="div"
            className="city-name"
          >
            {info.city.charAt(0).toUpperCase() + info.city.slice(1)}
          </Typography>
          <Typography variant="body2" className="temperature">
            {info.temp}°C
          </Typography>
          <Typography variant="body2" className="feels-like">
            Feels like: {info.feelsLike}°C
          </Typography>
          <Typography variant="body2" className="min-max-temp">
            <span>Min: {info.tempMin}°C</span> &nbsp; | &nbsp;
            <span>Max: {info.tempMax}°C</span>
          </Typography>
          <Typography variant="body2" className="humidity">
            Humidity: {info.humidity}%
          </Typography>
          <Typography variant="body2" className="weather-description">
            Weather:{" "}
            {info.weather.charAt(0).toUpperCase() + info.weather.slice(1)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
