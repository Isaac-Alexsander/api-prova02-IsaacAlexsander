const items = [
  { id: 1, nome: 'Teclado Mecânico', categoria: 'Periféricos', preco: 349.9, quantidade: 15 },
  { id: 2, nome: 'Mouse Gamer', categoria: 'Periféricos', preco: 189.9, quantidade: 32 },
  { id: 3, nome: 'Monitor 27"', categoria: 'Monitores', preco: 1299.0, quantidade: 8 },
  { id: 4, nome: 'Headset Bluetooth', categoria: 'Áudio', preco: 259.5, quantidade: 20 },
  { id: 5, nome: 'Webcam Full HD', categoria: 'Periféricos', preco: 219.0, quantidade: 12 },
  { id: 6, nome: 'SSD 1TB NVMe', categoria: 'Armazenamento', preco: 449.9, quantidade: 25 },
  { id: 7, nome: 'Memória RAM 16GB', categoria: 'Componentes', preco: 299.0, quantidade: 40 },
  { id: 8, nome: 'Placa de Vídeo RTX', categoria: 'Componentes', preco: 3499.0, quantidade: 5 },
  { id: 9, nome: 'Fonte 650W', categoria: 'Componentes', preco: 399.0, quantidade: 18 },
  { id: 10, nome: 'Gabinete Mid Tower', categoria: 'Componentes', preco: 349.0, quantidade: 10 },
  { id: 11, nome: 'Cadeira Gamer', categoria: 'Móveis', preco: 899.9, quantidade: 6 },
  { id: 12, nome: 'Mesa Escritório', categoria: 'Móveis', preco: 649.0, quantidade: 9 },
  { id: 13, nome: 'Notebook 15"', categoria: 'Computadores', preco: 3899.0, quantidade: 7 },
  { id: 14, nome: 'Impressora Multifuncional', categoria: 'Periféricos', preco: 599.0, quantidade: 11 },
  { id: 15, nome: 'Roteador Wi-Fi 6', categoria: 'Redes', preco: 429.9, quantidade: 22 },
  { id: 16, nome: 'HD Externo 2TB', categoria: 'Armazenamento', preco: 379.0, quantidade: 17 },
  { id: 17, nome: 'Caixa de Som Bluetooth', categoria: 'Áudio', preco: 149.9, quantidade: 28 },
  { id: 18, nome: 'Microfone Condensador', categoria: 'Áudio', preco: 329.0, quantidade: 14 },
  { id: 19, nome: 'Hub USB-C', categoria: 'Periféricos', preco: 99.9, quantidade: 35 },
  { id: 20, nome: 'Carregador Notebook', categoria: 'Acessórios', preco: 129.0, quantidade: 30 },
];

let nextId = items.length + 1;

function getNextId() {
  return nextId++;
}

module.exports = { items, getNextId };
