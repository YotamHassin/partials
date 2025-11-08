/* Example TypeScript code demonstrating a generator and a peekable iterator wrapper */ 

// Generator function that yields numbers from 0 to 9
//for (let i = 0; i <= 9; i++) {
function* createCounter() {
  for (let i = 0; i < 10; i++) {
    yield i;
  }
}

// Example: consume the generator (uncomment to use)
// Convert the generator to an array before iterating to avoid the
// 'downlevelIteration' / ES2015 requirement when targeting older JS.
Array.from(createCounter()).forEach((v) => {
  console.log(v);
});

const counter = createCounter();
Array.from(counter).forEach((v) => {
  console.log(v);
});



// Peekable wrapper for any iterator/generator to check "isNext" and to "getNext"
const makePeekable = <T>(it: Iterator<T>) => {
  // Prefetch the first result
  let next = it.next();

  return {
    // true if there is a next value available
    isNext: () => !next.done,

    // consume and return the next value, or undefined if done
    getNext: (): T | undefined => {
      if (next.done) return undefined;
      const value = next.value;
      next = it.next();
      return value;
    },

    // optional: expose as an iterator as well
    [Symbol.iterator]() {
      return {
        next: () => {
          if (next.done) return { done: true, value: undefined as any };
          const value = next.value;
          next = it.next();
          return { done: false, value };
        },
      } as Iterator<T>;
    },
  };
}

// Example usage with the existing createCounter() generator:
const peekableCounter = makePeekable(createCounter());

// Check and consume values one by one
while (peekableCounter.isNext()) {
  console.log('hasNext:', peekableCounter.isNext()); // true while values remain
  console.log('getNext:', peekableCounter.getNext()); // consumes and logs the next value
}

// After iteration
console.log('hasNext after end:', peekableCounter.isNext()); // false
console.log('getNext after end:', peekableCounter.getNext()); // undefined
