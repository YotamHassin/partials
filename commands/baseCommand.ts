/* baseCommand */

/*  */

// 1. נגדיר קודם כל את המערך. 
// השימוש ב- "as const" 
// אומר ל-TypeScript 
// שהערכים האלו קבועים ולא ישתנו.
const HelperToolOptions = [
	'DOT',
] as const;

// 2. ניצור את הטיפוס מתוך המערך באופן אוטומטי.
// הפקודה אומרת: "קח את הטיפוס של המערך 
// ותוציא ממנו את כל הערכים האפשריים שלו".

//type HelperToolType = 'DOT';
export type HelperToolType = typeof HelperToolOptions[number];


export const pathToolOptions = [
	// הזזת מיקום העט מבלי לצייר
	'MOVE',

	// קו ישר בין שתי נקודות
	'LINE',


	// מקביל לצירים ולכן לא צריך פרמטרים נוספים
	// בנוסף לאלכסון הראשי שמתואר על ידי נקודת המוצא לנקודת ההגעה
	'RECT',

	// ריבוע מושלם מול מרובע - מלבן
	//rectangle vs square (perfect square)



] as const;

const pathParamToolOptions = [
	// ברמת הממשק, 
	// תהיה אפשרות להוספת פרמטרים נוספים ופקודות ממשק
	'CURVE',
	'BEZIER',
] as const;

const pathInterfaceToolOptions = [
	// Perfect square, כלומר ריבוע מושלם
	// ברמת הממשק תנתן אפשרות ליצור מתוך ה-RECT
	// יאכפו הגדרות של שוויון בין רוחב לגובה
	'SQUARE',

] as const;


const pointToolOptions = [
	...pathToolOptions,
	...pathParamToolOptions,
	...pathInterfaceToolOptions,
] as const;

export type PathToolType = typeof pathToolOptions[number];
export type PathParamToolType = typeof pathParamToolOptions[number];
export type PathInterfaceToolType = typeof pathInterfaceToolOptions[number];
export type PointToolType = typeof pointToolOptions[number];
export const defaultPointTool: PointToolType = pointToolOptions[1];

export type CommandType = HelperToolType | PointToolType | 'SET_STYLE';

export interface BaseCommand {
	type: CommandType;
	id: string; // מזהה ייחודי כדי שנוכל לבצע עליו מניפולציות (כמו Drag) מאוחר יותר
}
