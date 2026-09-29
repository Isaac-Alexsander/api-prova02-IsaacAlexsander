const app = require('./app');

const DEFAULT_PORT = 3000;
const port = process.env.PORT || DEFAULT_PORT;

app.listen(port, () => {
  console.log(`API rodando na porta ${port}`);
});
