import assert from 'assert';

describe('JavaScript', function() {
  describe('function', function() {
    it('function parameter does not modify what the outside variable pointing to', () => {
      function func(o) {
        o = null;
      }

      let x = [];
      func(x);
      assert.deepEqual(x, 'REPLACE ME (not necessarily a string)');

      function swap(a, b) {
        let temp = a;
        a = b; b = temp;
      }
      let a = 1, b = 2;
      swap(a, b);
      assert.deepEqual(a, 'REPLACE ME (not necessarily a string)');
    });
  });

  describe('identity', () => {
    it('takes an argument and returns that argument when called', () => {
      function identity(x) {
        // YOUR CODE HERE
      }

      assert.strictEqual(identity(3), 3);
    })
  })

  describe('add', () => {
    it('adds two numbers', () => {
      function add(a, b) {
        // YOUR CODE HERE
      }

      assert.strictEqual(add(1, 2), 3);
    })
  });

  describe('mul', () => {
    it('multiplies two numbers', () => {
      function mul(a, b) {
        // YOUR CODE HERE
      }

      assert.strictEqual(mul(4, 5), 20);
    })
  });

  describe('identityf', () => {
    it('takes an argument and returns a function that returns that argument', () => {
      function identityf(x) {
        // YOUR CODE HERE
      }

      assert.strictEqual(identityf(2)(), 2);
      // This is important, make sure you understand why this works! If not, please ask!
    });
  });

  describe('addf', () => {
    it('adds from two invocations', () => {
      function addf(x) {
        // YOUR CODE HERE
      }

      assert.strictEqual(addf(3)(4), 7)
    });
  })

  describe('applyf', () => {
    it ('takes a binary function, and makes it callable with two invocation', () => {
      function applyf(f) {
        // YOUR CODE HERE
      }

      let add = (a, b) => a + b;
      let mul = (a, b) => a * b;
      assert.strictEqual(applyf(add)(3)(4), 7);
      assert.strictEqual(applyf(mul)(3)(4), 12);
    })
  })
});
