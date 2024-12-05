import express from 'express';
import cors from 'cors';
import countriesRouter from './routes/countries';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/countries', countriesRouter);

const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));