// typeMap
// ************** object to type to select-array mapping example **************
// 1. נגדיר את האובייקט תחילה
export const icons = {
    cancel: <i className="icon-cancel" aria-hidden="true"></i>,
    wrench: <i className="icon-wrench" aria-hidden="true"></i>,
} as const; // חשוב להוסיף as const כדי שהמפתחות יישמרו כמחרוזות ספציפיות ולא כ-string גנרי
icons
// 2. נגזור את הטיפוס (IconName) ישירות מהמפתחות של האובייקט
export type IconName = keyof typeof icons;

// 3. (אופציונלי) אם עדיין נדרש לך מערך של השמות לשימוש בריצה (Runtime)
export const iconsNames = Object.keys(icons) as IconName[];


// ************** select-array to type to object mapping example **************

// 
const sectionOptions = ['tools', 'workspace', 'history'] as const;

// הגדרת טיפוס שמייצג את הערכים האפשריים של sectionOptions
//type SectionType = 'tools' | 'workspace' | 'history';
type SectionType = typeof sectionOptions[number];

// default value
const defaultSection: SectionType = sectionOptions[0];

const sectionMap: Record<SectionType, string> = {
    tools: 'Tools',
    workspace: 'Workspace',
    history: 'History',
};
