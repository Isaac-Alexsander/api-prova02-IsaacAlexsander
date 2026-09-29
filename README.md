# api-prova02-IsaacAlexsander

API REST em Node.js + Express com dados em memória, criada para a prova de testes de integração.

## Rodando localmente

```bash
npm install
npm start
```

A API sobe em `http://localhost:3000` (ou na porta definida em `PORT`).

## Endpoints

- `GET /health` — status da API
- `GET /items?limit=&skip=` — lista paginada de itens
- `GET /items/:id` — busca um item por id
- `POST /items` — cria um item (`nome`, `categoria`, `preco`, `quantidade` obrigatórios)
- `PUT /items/:id` — atualiza um item por merge (campos não enviados são preservados)
- `DELETE /items/:id` — remove um item

## Observação importante

Os dados são armazenados em um array em memória e o estado é **resetado a cada restart do servidor**. Isso é intencional para esta prova.
