export const gcd = (a: number, b: number): number =>
  b === 0 ? a : gcd(b, a % b);

export type AspectRatio = { w: number; h: number };

export const getAspectRatio = (w: number, h: number): AspectRatio => {
  const divisor = gcd(w, h);
  return { w: w / divisor, h: h / divisor };
};

// דוגמה לשימוש:
//console.log(getAspectRatio(1920, 1080)); // { w: 16, h: 9 }
//console.log(getAspectRatio(200, 150)); // { w: 4, h: 3 }

// *****************************************

export const ASPECT_RATIO_CONSTS = {
  "4:3": "Standard",
  "16:9": "Widescreen",
  "1:1": "Square",
  "9:16": "Vertical",
  "3:2": "Photography",
  "21:9": "Ultrawide",
  "16:10": "Laptop",
} as const;
export type AspectRatioConst = keyof typeof ASPECT_RATIO_CONSTS;

export const getRatioLabel = (w: number, h: number) => {
  const { w: rw, h: rh } = getAspectRatio(w, h);
  return ASPECT_RATIO_CONSTS[`${rw}:${rh}` as AspectRatioConst] || "Custom";
};

export type AspectRatioName = { aspectRatio: AspectRatio; name: string };

export const aspectRatiosMap = 
    ([ratio, name]: [string, string,]): AspectRatioName => 
        {
            const [w, h] = ratio.split(":").map(Number);
            return {
                aspectRatio: { w, h },
                name,
            };
};

export const aspectRatios: AspectRatioName[] =
  Object.entries(ASPECT_RATIO_CONSTS).map(aspectRatiosMap);


// *****************************************

export const aspectRatiosPrint: (AspectRatioName & { hebMainUse?: string })[] = [
  { aspectRatio: { w: 4, h: 3 }, name: "Standard", hebMainUse: "סטנדרטי" },
  { aspectRatio: { w: 16, h: 9 }, name: "Widescreen", hebMainUse: "מסך רחב" },
  {
    aspectRatio: { w: 1, h: 1 },
    name: "Square",
    hebMainUse: "אידיאלי למדיה חברתית (אינסטגרם), פרופילים ועיצוב מודולרי.",
  },
  {
    aspectRatio: { w: 9, h: 16 },
    name: "Vertical",
    hebMainUse: "הסטנדרט לתוכן אנכי (TikTok, Reels, Instagram Stories).",
  },
  {
    aspectRatio: { w: 3, h: 2 },
    name: "Photography",
    hebMainUse: "היחס הקלאסי של צילומי פילם (35mm) ורוב מצלמות ה-DSLR.",
  },
  {
    aspectRatio: { w: 21, h: 9 },
    name: "Ultrawide",
    hebMainUse: `"Cinemascope" - קולנוע רחב ומסכי מחשב גיימינג מקצועיים.`,
  },
  {
    aspectRatio: { w: 16, h: 10 },
    name: "Laptop",
    hebMainUse: `נפוץ מאוד במחשבים ניידים (למשל Apple MacBook) שמציעים מעט יותר גובה מ-16:9.`,
  },
];
