import { LazyRoot } from "./LazyRoot-LazyMapped";

function getInitialData(): string {
    console.log("[Root Factory] Generating initial data...");
    return "hello world";
}

// יצירת LazyRoot (השורש של השרשרת)
const rootLazy = new LazyRoot(getInitialData);

// יצירת LazyMapped מ-rootLazy
const mappedToUpper = rootLazy.map(s => {
    console.log("[Mapped] Converting to uppercase...");
    return s.toUpperCase();
});

// יצירת LazyMapped נוסף מ-mappedToUpper
const mappedToLength = mappedToUpper.map(s => {
    console.log("[Mapped] Calculating length...");
    return s.length;
});

console.log("--- Initial State ---");
console.log("Root lazy evaluated?", rootLazy.isEvaluated); // false
console.log("Mapped to upper evaluated?", mappedToUpper.isEvaluated); // false
console.log("Mapped to length evaluated?", mappedToLength.isEvaluated); // false

console.log("\n--- Accessing Final Value ---");
const finalValue = mappedToLength.value; // יפעיל את כל השרשרת
// Output:
// LazyRoot: Explicitly evaluating value for the first time with arguments...
// [Root Factory] Generating initial data...
// LazyMapped: Explicitly evaluating value for the first time...
// [Mapped] Converting to uppercase...
// LazyMapped: Explicitly evaluating value for the first time...
// [Mapped] Calculating length...
console.log(`Final calculated length: ${finalValue}`); // 11 (for "HELLO WORLD")

console.log("\n--- State After Access ---");
console.log("Root lazy evaluated?", rootLazy.isEvaluated); // true
console.log("Mapped to upper evaluated?", mappedToUpper.isEvaluated); // true
console.log("Mapped to length evaluated?", mappedToLength.isEvaluated); // true

console.log("\n--- Resetting the last mapped Lazy ---");
mappedToLength.reset(); // יאפס את עצמו, את mappedToUpper, ואת rootLazy
// Output:
// LazyMapped: Resetting instance (child). Also resetting parent.
// LazyMapped: Resetting instance (child). Also resetting parent.
// LazyRoot: Resetting instance (root).

console.log("\n--- State After Reset ---");
console.log("Root lazy evaluated?", rootLazy.isEvaluated); // false
console.log("Mapped to upper evaluated?", mappedToUpper.isEvaluated); // false
console.log("Mapped to length evaluated?", mappedToLength.isEvaluated); // false

console.log("\n--- Accessing Final Value Again (after reset) ---");
const reEvaluatedValue = mappedToLength.value; // יחשב הכל מחדש
// Output: (שוב כל ההודעות מהשרשרת)
console.log(`Re-evaluated length: ${reEvaluatedValue}`); // 11