const { REQUIRED_ITEM_FIELDS } = require('./constants');

function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

function isValidNumber(value) {
  return typeof value === 'number' && !Number.isNaN(value) && value >= 0;
}

const FIELD_VALIDATORS = {
  nome: isNonEmptyString,
  categoria: isNonEmptyString,
  preco: isValidNumber,
  quantidade: isValidNumber,
};

function validateNewItem(body) {
  const errors = [];

  for (const field of REQUIRED_ITEM_FIELDS) {
    if (body[field] === undefined) {
      errors.push(`Campo obrigatório ausente: ${field}`);
      continue;
    }
    if (!FIELD_VALIDATORS[field](body[field])) {
      errors.push(`Campo inválido: ${field}`);
    }
  }

  return errors;
}

function validateItemUpdate(body) {
  const errors = [];

  for (const field of Object.keys(FIELD_VALIDATORS)) {
    if (body[field] === undefined) continue;
    if (!FIELD_VALIDATORS[field](body[field])) {
      errors.push(`Campo inválido: ${field}`);
    }
  }

  return errors;
}

module.exports = { validateNewItem, validateItemUpdate };
