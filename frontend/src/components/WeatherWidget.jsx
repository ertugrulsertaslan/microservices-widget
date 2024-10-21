import { useEffect, useState } from "react";
function WeatherWidget() {
  const [data, setData] = useState(null);
  const [city, setCity] = useState("Istanbul"); // Varsayılan şehir
  const [loading, setLoading] = useState(true); // Yükleniyor durumu

  const fetchWeatherData = async () => {
    setLoading(true); // Yükleniyor durumunu ayarla
    try {
      const response = await fetch(`/api/weather?city=${city}`); // API yolunu değiştirin
      if (!response.ok) throw new Error("Ağ hatası");
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("API Error:", error);
    } finally {
      setLoading(false); // Yükleniyor durumunu sıfırla
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
