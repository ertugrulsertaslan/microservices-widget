import axios from "axios";
const BASE_URL = process.env.baseUrl;
const API_KEY = process.env.API_KEY;
const getWeatherData = async (req, res) => {
  const city = req.query.city || "Roma";
  console.log(`Fetching weather data for city: ${city}`);
  try {
    const response = await axios.get(
      `${BASE_URL}weather?q=${city}&units=metric&APPID=${API_KEY}`,
      { timeout: 5000 }
    );
    res.json(response.data);
    console.log(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { getWeatherData };
