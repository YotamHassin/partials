export const gcd = (a: number, b: number) => (b === 0 ? a : gcd(b, a % b));

const getAspectRatio = (w: number, h: number) => {
    const divisor = gcd(w, h);
    return { w: w / divisor, h: h / divisor };
};

// דוגמה לשימוש:
console.log(getAspectRatio(1920, 1080)); // { w: 16, h: 9 }
console.log(getAspectRatio(200, 150));   // { w: 4, h: 3 }