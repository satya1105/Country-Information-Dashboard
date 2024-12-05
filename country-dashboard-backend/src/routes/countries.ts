import express from 'express';
import axios from 'axios';
import NodeCache from 'node-cache';

const router = express.Router();
const cache = new NodeCache({ stdTTL: 3600 }); // Cache for 1 hour
const REST_COUNTRIES_API = 'https://restcountries.com/v3.1';

// GET /countries - Fetch all countries
router.get('/', async (req, res) => {
  const cacheKey = 'countries';
  if (cache.has(cacheKey)) {
    return res.json(cache.get(cacheKey));
  }

  try {
    const { data } = await axios.get(`${REST_COUNTRIES_API}/all`);
    const processedData = data.map((country: any) => ({
      name: country.name.common,
      population: country.population,
      region: country.region,
      flag: country.flags.png,
      timezone: country.timezones[0] || '',
    }));
    cache.set(cacheKey, processedData);
    res.json(processedData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch countries data' });
  }
});

// GET /countries/:code - Fetch country by code
router.get('/:code', async (req, res) => {
  const { code } = req.params;
  try {
    const { data } = await axios.get(`${REST_COUNTRIES_API}/alpha/${code}`);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch country details' });
  }
});

export default router;