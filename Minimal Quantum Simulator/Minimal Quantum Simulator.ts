/* Minimal Quantum Simulator */
/* https://gemini.google.com/gem/fc27b6e02612/10b29b357f532020 */

/**
 * מייצג מספר מרוכב בסיסי עבור המקדמים הקוונטיים
 */
type Complex = {
    re: number; // חלק ממשי
    im: number; // חלק דמיוני
};

/**
 * מצב הקיוביט מיוצג על ידי וקטור של שני מצבים: |0> ו- |1>
 */
interface QubitState {
    alpha: Complex; // הסתברות למצב |0>
    beta: Complex;  // הסתברות למצב |1>
}

class QuantumSimulator {
    private state: QubitState;

    constructor() {
        // אתחול הקיוביט למצב יציב של |0>
        this.state = {
            alpha: { re: 1, im: 0 },
            beta: { re: 0, im: 0 }
        };
    }

    /**
     * שער Pauli-X (מקביל ל-NOT קלאסי)
     * מחליף בין הערכים של אלפא וביתא
     */
    public applyXGate(): void {
        const temp = this.state.alpha;
        this.state.alpha = this.state.beta;
        this.state.beta = temp;
        console.log("Applied X-Gate (NOT)");
    }

    /**
     * שער Hadamard (H) - יוצר סופרפוזיציה
     * מעביר את הקיוביט למצב שבו יש 50% סיכוי לכל תוצאה
     */
    public applyHadamardGate(): void {
        const sqrt2 = Math.sqrt(2);
        const oldAlpha = this.state.alpha;
        const oldBeta = this.state.beta;

        // חישוב פשוט (ללא התחשבות מלאה במספרים דמיוניים לצורך הפשטות במינימל)
        this.state.alpha = { re: (oldAlpha.re + oldBeta.re) / sqrt2, im: 0 };
        this.state.beta = { re: (oldAlpha.re - oldBeta.re) / sqrt2, im: 0 };
        console.log("Applied Hadamard Gate (Superposition)");
    }

    /**
     * מדידת הקיוביט - גורמת לקריסת המצב הקוונטי
     * @returns 0 או 1 בהתבסס על ההסתברויות
     */
    public measure(): number {
        // הסתברות היא הערך המוחלט של המקדם בריבוע
        const prob0 = Math.pow(this.state.alpha.re, 2) + Math.pow(this.state.alpha.im, 2);
        const random = Math.random();

        const result = random < prob0 ? 0 : 1;
        
        // לאחר מדידה, הקיוביט "קורס" למצב שנמדד
        this.resetTo(result);
        return result;
    }

    private resetTo(value: number): void {
        this.state = {
            alpha: { re: value === 0 ? 1 : 0, im: 0 },
            beta: { re: value === 1 ? 1 : 0, im: 0 }
        };
    }

    public getState() {
        return this.state;
    }
}

// --- דוגמת שימוש ---

const sim = new QuantumSimulator();

console.log("Initial State:", sim.getState());

// הכנסת הקיוביט לסופרפוזיציה
sim.applyHadamardGate();
console.log("State after Hadamard:", sim.getState());

// ביצוע מדידה
const result = sim.measure();
console.log(`Measurement Result: ${result}`);