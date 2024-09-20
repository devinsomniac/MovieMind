import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.post('/recommend', async (req, res) => {
  const query = req.body.userQuery;

  try {
    const response = await axios.post('http://localhost:5000/recommend', { query });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching recommendations:', error);
    res.status(500).send('Internal Server Error');
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});