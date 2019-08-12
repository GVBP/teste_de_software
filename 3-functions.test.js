describe('Funções', function() {
  it('Implemente uma função chamada add que recebe dois parâmtros e retorna a soma deles', function() {

    function add(num1, num2) {
      return num1 + num2;
    }

    expect(add(1, 2)).toBe(3);
  });
});
