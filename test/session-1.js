// Exercise Credit: Douglas Crockford
import assert from 'assert';

describe('Session 1 Functions', function() {
  // You can use your earlier defined functions in later tests!
  let identity, add, mul, identityf, addf, applyf, curry, methodize, demethodize,
    twice, double, square, composeu, composeb, once, counterf, revocable, vector;

  describe('function', function() {
    it('function parameter does not modify what the outside variable is pointing to', () => {
      function func(o) {
        o = null;
      }

      let x = [];
      func(x);
      assert.deepEqual(x, undefined); // <- edit me

      function swap(a, b) {
        let temp = a;
        a = b; b = temp;
      }
      let a = 1, b = 2;
      swap(a, b);
      assert.deepEqual(a, undefined); // <- edit me
    });
  });

  describe('identity', () => {
    it('takes an argument and returns that argument when called', () => {
      identity = function(a) {
        // YOUR CODE HERE
      };

      assert.strictEqual(identity(3), 3);
    })
  });

  describe('add', () => {
    it('adds two numbers', () => {
      add = function(a, b) {
        // YOUR CODE HERE
      };

      assert.strictEqual(add(1, 2), 3);
    })
  });

  describe('mul', () => {
    it('multiplies two numbers', () => {
      mul = function(a, b) {
        // YOUR CODE HERE
      };

      assert.strictEqual(mul(4, 5), 20);
    })
  });

  describe('identityf', () => {
    it('takes an argument and returns a function that returns that argument', () => {
      identityf = function(x) {
        // YOUR CODE HERE
      };

      assert.strictEqual(identityf(2)(), 2);
      // This is important, make sure you understand why this works! If not, please ask!
    });
  });

  describe('addf', () => {
    it('adds from two invocations', () => {
      addf = function(x) {
        // YOUR CODE HERE
      };

      assert.strictEqual(addf(3)(4), 7)
    });
  });

  describe('applyf', () => {
    it('takes a binary function, and makes it callable with two invocation', () => {
      // a binary function takes two arguments
      applyf = function(binary) {
        // YOUR CODE HERE
      };

      assert.strictEqual(applyf(add)(3)(4), 7);
      assert.strictEqual(applyf(mul)(3)(4), 12);
    })
  });

  describe('curry', () => {
    it('takes a function and an argument, and returns a function that can supply a second argument', () => {
      curry = function(binary, first) {
        // YOUR CODE HERE
      };

      let add3 = curry(add, 3);
      assert.strictEqual(add3(4), 7);
      assert.strictEqual(curry(mul, 4)(6), 24);
      // Wikipedia:
      // In mathematics and computer science, currying is the technique of translating the
      // evaluation of a function that takes multiple arguments (or a tuple of arguments) into evaluating a sequence of functions,
      // each with a single argument.
    })
  });

  describe('inc', () => {
    it('takes an argument and increments it', () => {
      // Write three ways to create the inc function *without writing any new functions*
      const inc1 = undefined; // <- change me
      const inc2 = undefined; // <- change me
      const inc3 = undefined; // <- change me

      [inc1, inc2, inc3].forEach(inc => {
        assert.strictEqual(inc(1), 2);
        assert.strictEqual(inc(inc(1)), 3);
      })
    })
  });

  describe('methodize', () => {
    it('converts a binary function to a method', () => {
      methodize = function(binary) {
        // YOUR CODE HERE
      };
      // add takes two arguments, e.g. add(1, 2) returns 3A
      // methodize "puts" one of the arguments in front (as the caller), taking in just one argument instead

      Number.prototype.add = methodize(add);
      assert.strictEqual((3).add(4), 7);
    })
  });
  
  describe('demethodize', () => {
    it('converts a method to a binary function', () => {
      demethodize = function(method) {
        // YOUR CODE HERE
      };

      Number.prototype.add = methodize(add);
      assert.strictEqual(demethodize(Number.prototype.add)(5, 6), 11);
    })
  });

  describe('twice', () => {
    it('takes a binary function and returns a unary function that passes its argument to the binary function twice', () => {
      // a unary function takes one argument
      twice = function(binary) {
        // YOUR CODE HERE
      };

      double = twice(add);
      assert.strictEqual(double(11), 22);

      square = twice(mul);
      assert.strictEqual(square(11), 121);
    });
  });

  describe('composeu', () => {
    it('takes two unary functions and returns a unary function that calls them both', () => {
      composeu = function(f, g) {
        // YOUR CODE HERE
      };

      assert.strictEqual(composeu(double, square)(3), 36);
    });
  });

  describe('composeb', () => {
    it('takes two binary functions and returns a function that calls them both', () => {
      composeb = function(f, g) {
        // YOUR CODE HERE
      };

      assert.strictEqual(composeb(add, mul)(2, 3, 5), 25);
      assert.strictEqual(composeb(add, mul)(4, 5, 6), 54);
    });
  });

  describe('once', () => {
    it('allows another function to only be called once', () => {
      once = function(f) {
        // YOUR CODE HERE
      };

      let add_once = once(add);
      assert.strictEqual(add_once(2, 3), 5);
      assert.throws(function() {
        add_once(2, 3);
      });
    });
  });

  describe('counterf', () => {
    it('returns two functions that implement an up/down counter', () => {
      counterf = function(initial) {
        // YOUR CODE HERE
      };

      let counter = counterf(10);
      assert.strictEqual(counter.inc(), 11);
      assert.strictEqual(counter.dec(), 10);
    });
  });

  describe('revocable', () => {
    it(`takes a nice function, and returns a revoke function that denice access to the nice function,
      and an invoke function that can invoke the nice function until it is revoked`, () => {
      revocable = function(f) {
        // YOUR CODE HERE
      };

      let temp = revocable(add);
      assert.strictEqual(temp.invoke(2, 3), 5);
      temp.revoke();
      assert.throws(() => {
        temp.invoke(4, 5);
      });
    })
  });

  describe('vector', function() {
    it('has get, store, and append methods, such that an attacker cannot get access to the private array', () => {
      vector = function() {
        // YOUR CODE HERE
      };

      let myVector = vector();
      myVector.append(7);
      myVector.store(1, 8);
      assert.strictEqual(myVector.get(0), 7);
      assert.strictEqual(myVector.get(1), 8);

      // Test security
      let stash;
      myVector.store('push', function() { // try to override the array push method
        stash = this; // if we succeed, "this" is the array
      });
      myVector.append(); // Try to call push (if we implemented it with Array.push)
      assert.ok(stash == null); // managed to get the array!
      assert.throws(() => {
        stash[0]; // this should throw
      });
    });
  });
});