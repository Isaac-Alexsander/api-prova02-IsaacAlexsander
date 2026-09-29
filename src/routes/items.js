const { Router } = require('express');
const { items, getNextId } = require('../data');
const { DEFAULT_LIMIT, DEFAULT_SKIP } = require('../constants');
const { validateNewItem, validateItemUpdate } = require('../validation');

const router = Router();

function findItemIndex(id) {
  return items.findIndex((item) => item.id === id);
}

router.get('/', (req, res) => {
  const limit = Number.parseInt(req.query.limit, 10) || DEFAULT_LIMIT;
  const skip = Number.parseInt(req.query.skip, 10) || DEFAULT_SKIP;

  const page = items.slice(skip, skip + limit);

  res.json({ items: page, total: items.length, skip, limit });
});

router.get('/:id', (req, res) => {
  const id = Number.parseInt(req.params.id, 10);
  const item = items.find((entry) => entry.id === id);

  if (!item) {
    return res.status(404).json({ message: `Item ${id} não encontrado` });
  }

  res.json(item);
});

router.post('/', (req, res) => {
  const errors = validateNewItem(req.body);

  if (errors.length > 0) {
    return res.status(400).json({ message: 'Dados inválidos', errors });
  }

  const { nome, categoria, preco, quantidade } = req.body;
  const newItem = { id: getNextId(), nome, categoria, preco, quantidade };

  items.push(newItem);

  res.status(201).json(newItem);
});

router.put('/:id', (req, res) => {
  const id = Number.parseInt(req.params.id, 10);
  const index = findItemIndex(id);

  if (index === -1) {
    return res.status(404).json({ message: `Item ${id} não encontrado` });
  }

  const errors = validateItemUpdate(req.body);

  if (errors.length > 0) {
    return res.status(400).json({ message: 'Dados inválidos', errors });
  }

  const updatedItem = { ...items[index], ...req.body, id };
  items[index] = updatedItem;

  res.json(updatedItem);
});

router.delete('/:id', (req, res) => {
  const id = Number.parseInt(req.params.id, 10);
  const index = findItemIndex(id);

  if (index === -1) {
    return res.status(404).json({ message: `Item ${id} não encontrado` });
  }

  const [deletedItem] = items.splice(index, 1);

  res.json(deletedItem);
});

module.exports = router;
