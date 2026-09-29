const express = require('express');
const cors = require('cors');
const itemsRouter = require('./routes/items');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.use('/items', itemsRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Rota não encontrada' });
});

module.exports = app;
