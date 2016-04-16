// Exercise Credit: Douglas Crockford
import assert from 'assert';

describe('Session 2 Functions', function() {
  // You can use these functions in your solutions!
  const add = (a, b) => a + b;
  const mul = (a, b) => a * b;
  const identityf = a => (() => a);
  let m, store, addc, mulc, sqrtc, hypc;
  let storeVariable;

  describe('gensymf', () => {
    it('makes functions that generate unique symbols', () => {
      const gensymf = (prefix) => {
        // YOUR CODE HERE
      };
      
      let gensym = gensymf('G');
      assert.strictEqual(gensym(), 'G0');
      assert.strictEqual(gensym(), 'G1');
      assert.strictEqual(gensym(), 'G2');
    });
  });
  
  describe('fibonaccif', () => {
    it('returns a function that will return the next fibonacci number', () => {
      const fibonaccif = function(a, b) {
        // YOUR CODE HERE
      };
      
      const fib = fibonaccif(0, 1);
      assert.strictEqual(fib(), 0);
      assert.strictEqual(fib(), 1);
      assert.strictEqual(fib(), 1);
      assert.strictEqual(fib(), 2);
      assert.strictEqual(fib(), 3);
      assert.strictEqual(fib(), 5);
    });
  });
  
  describe('addg', () => {
    it('adds from many invocations, until it sees an empty invocation', () => {
      const addg = function(a) {
        // YOUR CODE HERE
      };
      
      assert.strictEqual(addg(3)(4)(5)(), 12);
      assert.strictEqual(addg(1)(2)(4)(8)(), 15);
    });
  });
  
  
  describe('applyg', () => {
    it('takes a binary function and applies it to many invocations', () => {
      const applyg = function(binary) {
        // YOUR CODE HERE
      };

      assert.strictEqual(applyg(add)(3)(4)(5)(), 12);
      assert.strictEqual(applyg(add)(1)(2)(4)(8)(), 15);
    });
  });

  describe('m', () => {
    it('takes a value and an optional source string and returns them in an object', () => {
      m = function(val, source) {
        // YOUR CODE HERE
      };

      assert.deepEqual(m(1), {value: 1, source: 1});
      assert.deepEqual(m(Math.PI, 'pi'), {value: Math.PI, source: 'pi'});
    });
  });

  describe('addm', () => {
    it('takes two m objects and returns an m object', () => {
      const addm = function(m1, m2) {
        // YOUR CODE HERE
      };

      assert.deepEqual(addm(m(3), m(4)), {value: 7, source: "(3+4)"})
    });
  });

  describe('binarymf', () => {
    it('takes a binary function and a string and returns a function that acts on m objects', () => {
      const binarymf = function (binary, op) {
        // YOUR CODE HERE
      };

      const addm = binarymf(add, "+");
      assert.deepEqual(addm(m(3), m(4)), {value: 7, source: '(3+4)'});
    });
  });

  describe('binarymf2', () => {
    it('produces functions that can accept arguments that are either numbers or m objects', () => {
      const binarymf = function (binary, op) {
        // YOUR CODE HERE
      };

      const addm = binarymf(add, '+');
      assert.deepEqual(addm(3, 4), {value: 7, source: '(3+4)'});
    });
  });

  describe('unarymf', () => {
    it('takes a unary function and a string and returns a function that acts on numbers or m objects', () => {
      const unarymf = function (unary, op) {
        // YOUR CODE HERE
      };

      const square = (a) => a * a;
      const squarem = unarymf(square, 'square');
      assert.deepEqual(squarem(4), {value: 16, source: "(square 4)"});
    });
  });

  describe('hyp', () => {
    it('takes the lengths of two sides of a triangle and computes the length of the hypothenuse', () => {
      // c^2 = a^2 + b^2
      const hyp = function (a, b) {
        // YOUR CODE HERE, use Math.sqrt and predefined functions above (add and mul)
      };

      assert.strictEqual(hyp(3, 4), 5);
    });
  });

  describe('exp', () => {
    it('evaluates array expressions', () => {
      const exp = function (ary) {
        // YOUR CODE HERE
      };

      const adda = [add, 2, 3];
      const hypa = [
        Math.sqrt,
        [
          add,
          [mul, 4, 6],
          [mul, 5, 5]
        ]
      ];

      assert.strictEqual(exp(adda), 5);
      assert.strictEqual(exp(hypa), 7);
    });
  });

  describe('store', () => {
    it('stores a value in a variable', () => {
      store = function (a) {
        // YOUR CODE HERE
      };
      // a very primitive store
      store(5);

      assert.strictEqual(storeVariable, 5);
    });
  });

  describe('quatre', () => {
    it('takes a binary function, two functions that provide operands, and a function that takes the result', () => {
      const quatre = function (binary, sourcefn1, sourcefn2, callback) {
        // YOUR CODE HERE
      };

      quatre(
        add,
        identityf(3),
        identityf(4),
        store
      );
      assert.strictEqual(storeVariable, 7);
    });
  });

  describe('unaryc', () => {
    it('takes a unary function, and returns a function that takes an argument and a callback', () => {
      const unaryc = function (unary) {
        // YOUR CODE HERE
      };

      sqrtc = unaryc(Math.sqrt);
      sqrtc(81, store);

      assert.strictEqual(storeVariable, 9);
    });
  });

  describe('binaryc', () => {
    it('takes a binary function, and returns a function that takes two arguments and a callback', () => {
      const binaryc = function (binary) {
        // YOUR CODE HERE
      };

      addc = binaryc(add);
      mulc = binaryc(mul);

      addc(4, 5, store);
      assert.strictEqual(storeVariable, 9);
      mulc(2, 3, store);
      assert.strictEqual(storeVariable, 6);
    });
  });

  describe('hypc', () => {
    it('calculates the hypotenuse (write using addc, mulc, and sqrtc)', () => {
      hypc = function(a, b, callback) {
        // YOUR CODE HERE
        // Use only addc, mulc, and sqrtc. It really is possible!
      };

      hypc(3, 4, store);
      assert.strictEqual(storeVariable, 5);
    });
  });
});

// DONE? Great! Check out Ramda.js, a utility library that focuses on functional programming!