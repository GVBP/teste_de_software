function hello(name) {
  return name; // IMPLEMENTE
}

describe('hello', function() {
  it('deve retornar Hello, Alan!', function() {
    expect(hello('Alan')).toBe('Hello, Alan!');
  });
});
