/*
  A função average recebe um array de tamanho variável e retorna a média dos valores recebidos.
  Caso a função receba algum valor não numérico ou um array vazio, o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const average = (array) => {
  let sum = 0;
  let result = 0;
  // Loop para determinar a média aritimética:
  for (let i = 0; i < array.length; i += 1) {
    sum += array[i];
  }
  result = Math.round((sum /= array.length));

  //  Loop para retornar "undefined" nos caso de string:
  for (let i = 0; i < array.length; i += 1) {
    if (typeof array[i] === 'string') {
      result = undefined;
    }
  }

  // Condicional para retornar "undefined" no caso de array zero:
  if (array.length === 0) {
    result = undefined;
  }
  return result;
};

module.exports = average;
