function hello(name) {
  return `Hello, ${name}!`; // IMPLEMENTE
}

describe('hello', function() {
  it('deve retornar Hello, Alan!', function() {
    expect(hello('Alan')).toBe('Hello, Alan!');
  });
});
