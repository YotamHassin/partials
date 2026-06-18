/* מאפשרות למשתמש להזריק (Inject) הגדרות גלובליות. */
export type Id = string | number;

export type IdGenerator = () => Id;

const defaultIdGenerator: IdGenerator = () => 
    Math.random().toString(36).substr(2, 9);

let idGenerator: IdGenerator = defaultIdGenerator;

export const setCustomIdGenerator = (generator: IdGenerator = defaultIdGenerator) => {
  idGenerator = generator;
};

export const generateId: IdGenerator = (): Id => idGenerator();

export class IdManager {
  private generator: IdGenerator;

  constructor(customGenerator?: IdGenerator) {
    // ברירת מחדל אם לא סופק גנרטור מותאם אישית
    this.generator = customGenerator || defaultIdGenerator;
  }

  // יצירת ID לפי הגנרטור של המופע הספציפי הזה
  public generate(): Id {
    return this.generator();
  }

  // אפשרות להחליף את הגנרטור של המופע הנוכחי בלבד
  public setGenerator(generator: IdGenerator): void {
    this.generator = generator;
  }
}
