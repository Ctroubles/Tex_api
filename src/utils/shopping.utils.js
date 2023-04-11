const crypto = require('crypto');

function generarNumeroOrden() {
  let numero = '';
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  for (let i = 0; i < 4; i++) {
    const indice = crypto.randomInt(caracteres.length);
    numero += caracteres[indice];
  }
  return numero;
}

module.exports = {
  generarNumeroOrden
};