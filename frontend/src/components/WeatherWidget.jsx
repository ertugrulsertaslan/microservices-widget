import { useEffect, useState } from "react";
function WeatherWidget() {
  const [data, setData] = useState(null);
  const [city, setCity] = useState("roma");
  const [loading, setLoading] = useState(true);

  const fetchWeatherData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:5000/api/weather?city=${city}`
      );
      if (!response.ok) throw new Error("Ağ hatası");
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("API Error:", error);
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
