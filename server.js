const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 5000;
const OMDB_API_KEY = '6d50e8a9';

app.use(express.json());

app.get('/recommendations', async (req, res) => {
  try {
    const { genre, actor, director } = req.query;
    const apiUrl = `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}`;


    const queryParams = [];
    if (genre) queryParams.push(`genre=${genre}`);
    if (actor) queryParams.push(`actor=${actor}`);
    if (director) queryParams.push(`director=${director}`);

    const fullUrl = `${apiUrl}&${queryParams.join('&')}`;
    const response = await axios.get(fullUrl);

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});