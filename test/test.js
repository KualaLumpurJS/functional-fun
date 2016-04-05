import assert from 'assert';

describe('JavaScript', function() {
  // You can use your earlier defined functions in later tests!
  let identity, add, mul, identityf, addf, applyf, curry, methodize, demethodize;

  describe('function', function() {
    it('function parameter does not modify what the outside variable is pointing to', () => {
      function func(o) {
        o = null;
      }

      let x = [];
      func(x);
      assert.deepEqual(x, undefined);

      function swap(a, b) {
        let temp = a;
        a = b; b = temp;
      }
      let a = 1, b = 2;
      swap(a, b);
      assert.deepEqual(a, undefined);
    });
  });

  describe('identity', () => {
    it('takes an argument and returns that argument when called', () => {
      identity = function(a, b) {
        // YOUR CODE HERE
      }

      assert.strictEqual(identity(3), 3);
    })
  })

  describe('add', () => {
    it('adds two numbers', () => {
      add = function(a, b) {
        // YOUR CODE HERE
      }

      assert.strictEqual(add(1, 2), 3);
    })
  });

  describe('mul', () => {
    it('multiplies two numbers', () => {
      mul = function(a, b) {
        // YOUR CODE HERE
      }

      assert.strictEqual(mul(4, 5), 20);
    })
  });

  describe('identityf', () => {
    it('takes an argument and returns a function that returns that argument', () => {
      identityf = function(x) {
        // YOUR CODE HERE
      }

      assert.strictEqual(identityf(2)(), 2);
      // This is important, make sure you understand why this works! If not, please ask!
    });
  });

  describe('addf', () => {
    it('adds from two invocations', () => {
      addf = function(x) {
        // YOUR CODE HERE
      }

      assert.strictEqual(addf(3)(4), 7)
    });
  })

  describe('applyf', () => {
    it('takes a binary function, and makes it callable with two invocation', () => {
      // a binary function takes two arguments
      applyf = function(binary) {
        // YOUR CODE HERE
      }

      assert.strictEqual(applyf(add)(3)(4), 7);
      assert.strictEqual(applyf(mul)(3)(4), 12);
    })
  })

  describe('curry', () => {
    it('takes a function and an argument, and returns a function that can supply a second argument', () => {
      curry = function(binary, first) {
        // YOUR CODE HERE
      }

      let add3 = curry(add, 3);
      assert.strictEqual(add3(4), 7);
      assert.strictEqual(curry(mul, 4)(6), 24);
      // Wikipedia:
      // In mathematics and computer science, currying is the technique of translating the
      // evaluation of a function that takes multiple arguments (or a tuple of arguments) into evaluating a sequence of functions,
      // each with a single argument.
    })
  })

  describe('inc', () => {
    it('takes an argument and increments it', () => {
      // Write three ways to create the inc function *without writing any new functions*
      const inc1 = undefined;
      const inc2 = undefined;
      const inc3 = undefined;

      [inc1, inc2, inc3].forEach(inc => {
        assert.strictEqual(inc(1), 2);
        assert.strictEqual(inc(inc(1)), 3);
      })
    })
  })

  describe('methodize', () => {
    it('converts a binary function to a method', () => {
      methodize = function(binary) {
        // YOUR CODE HERE
      }
      // add takes two arguments, e.g. add(1, 2) returns 3A
      // methodize "puts" one of the arguments in front (as the caller), taking in just one argument instead

      Number.prototype.add = methodize(add);
      assert.strictEqual((3).add(4), 7);
    })
  })
  
  describe('demethodize', () => {
    it('converts a method to a binary function', () => {
      demethodize = function(method) {
        // YOUR CODE HERE
      }

      Number.prototype.add = methodize(add);
      assert.strictEqual(demethodize(Number.prototype.add)(5, 6), 11);
    })
  })
});
