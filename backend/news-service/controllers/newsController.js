import axios from "axios";

const getNewsData = async (req, res) => {
  try {
    const response = await axios.get``();
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { getNewsData };
