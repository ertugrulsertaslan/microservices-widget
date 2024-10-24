import { useEffect, useState } from "react";
import axios from "axios";
function WeatherWidget() {
  const [data, setData] = useState(null);
  const [city, setCity] = useState("roma");
  const [loading, setLoading] = useState(true);

  const fetchWeatherData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://weather-service:5000/api/weather`,
        {
          params: { city },
        }
      );
      setData(response.data);
    } catch (error) {
      console.error("API Error:", error.message);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
      } else if (error.request) {
        console.error("Request data:", error.request);
      } else {
        console.error("Error message:", error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, [city]);

  return (
    <div>
      <h2>Hava Durumu Widgeti</h2>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Şehir girin"
      />
      {loading ? (
        <p>Yükleniyor...</p>
      ) : (
        data && (
          <div>
            <h3>{data.location.name}</h3>
            <p>Sıcaklık: {data.current.temp_c} °C</p>
          </div>
        )
      )}
    </div>
  );
}

export default WeatherWidget;
