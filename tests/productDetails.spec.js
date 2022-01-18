const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

const product1 = 'Alcool gel';
const product2 = 'Máscara';
const product = productDetails(product1,product2);

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function');
    // Teste se o retorno da função é um array.
    // Ref.: Auxiliado por (((Imar Mendes))) em sala de estudos.
    expect(Array.isArray(productDetails(product1,product2))).toBeTruthy();
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(Object.keys(productDetails(product1,product2))).toHaveLength(2);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(typeof product[0] && typeof product[1]).toBe('object');
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(product[0]).not.toMatchObject(product[1]);
    // Teste se os dois productIds terminam com 123.
    expect(product[0].details.productId && product[1].details.productId).toMatch(/123\b/);
  });
});