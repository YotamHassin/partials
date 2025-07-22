// הגדרת PipeFunc - חסרה בטיוטה שלך
type PipeFunc<TIn, TOut> = (input: TIn) => TOut;

// Lazy.ts - הגדרת Lazy Evaluation עם יכולת map
// ILazyBase - בסיס ל-Lazy Evaluation עם יכולת reset, evaluate, value, isEvaluated
// ILazy - מורחב מ-ILazyBase עם יכולת map
interface ILazyBase<T, TArgs extends readonly unknown[] = []> 
{
  /**
   * מחזיר את הערך. אם הערך לא חושב עדיין, הוא יחושב כעת ויאוחסן.
   */
  get value(): T;

  /**
   * בודק אם הערך כבר חושב.
   */
  isEvaluated: boolean;

  /**
   * מאפס את הערך החישוב, כך שבקריאה הבאה הוא יחושב מחדש.
   */
  reset(): void;

  /**
   * אם הערך לא חושב עדיין, הוא יחושב כעת ויאוחסן.
   * @returns {boolean} True אם הערך חושב כעת, False אם כבר היה מחושב.
   */
  evaluate(): boolean;
}

// ILazy ירחיב את היכולות של ILazyBase בשיטת map
export interface ILazy<T, TArgs extends readonly unknown[] = []>
  extends ILazyBase<T, TArgs> 
{

  /**
   * יוצר מופע Lazy חדש שערכו הוא תוצאת הפעלת mapFunc על הערך של מופע ה-Lazy הנוכחי.
   * החישוב מתבצע רק כאשר הערך של מופע ה-Lazy החדש נדרש.
   * @param mapFunc פונקציית המיפוי שתופעל על הערך המחושב.
   * @returns מופע Lazy חדש עם הטיפוס הממופה.
   */
  map<TypOut>(mapFunc: PipeFunc<T, TypOut>): ILazy<TypOut>;
}

// מחלקת בסיס שמטפלת בלוגיקת ה-Lazy Evaluation
class LazyBase<T, TArgs extends readonly unknown[] = []>
  implements ILazyBase<T, TArgs>
{
  private factory: (...args: TArgs) => T;
  private args: TArgs;
  private _value: T | undefined;
  private _isEvaluated: boolean = false;

  /**
   * יוצר מופע חדש של LazyBase.
   * @param factory הפונקציה שמספקת את הערך. היא תופעל פעם אחת בלבד עם הארגומנטים שסופקו.
   * @param args הארגומנטים שיועברו לפונקציית ה-factory.
   */
  constructor(factory: (...args: TArgs) => T, ...args: TArgs) {
    if (typeof factory !== "function") {
      throw new Error(
        "Lazy constructor expects a function (factory) as its first argument."
      );
    }
    this.factory = factory;
    this.args = args;
  }

  /**
   * אם הערך לא חושב עדיין, הוא יחושב כעת ויאוחסן.
   * @returns {boolean} True אם הערך חושב כעת, False אם כבר היה מחושב.
   */
  public evaluate(): boolean {
    if (!this._isEvaluated) {
      console.log(
        "Lazy: Explicitly evaluating value for the first time with arguments..."
      );
      this._value = this.factory(...this.args);
      this._isEvaluated = true;
      return true; // הערך חושב כעת
    } else {
      console.log(
        "Lazy: Value already pre-computed from explicit evaluation or previous access."
      );
      return false; // הערך כבר חושב
    }
  }

  /**
   * מחזיר את הערך. אם הערך לא חושב עדיין, הוא יחושב כעת (על ידי קריאה ל-evaluate).
   * אם הערך כבר חושב, הוא יחזור מיידית.
   */
  public get value(): T {
    this.evaluate(); // ודא שהערך חושב
    return this._value as T; // הערך בטוח קיים כאן
  }

  /**
   * בודק אם הערך כבר חושב.
   */
  public get isEvaluated(): boolean {
    return this._isEvaluated;
  }

  /**
   * מאפס את הערך החישוב, כך שבקריאה הבאה הוא יחושב מחדש.
   */
  public reset(): void {
    this._value = undefined;
    this._isEvaluated = false;
    console.log("Lazy: Value reset. Will re-evaluate on next access.");
  }
}

// המחלקה Lazy המורחבת שמוסיפה יכולת map
export class Lazy<T, TArgs extends readonly unknown[] = []>
  extends LazyBase<T, TArgs>
  implements ILazy<T, TArgs>
{
  /**
   * יוצר מופע חדש של Lazy.
   * @param factory הפונקציה שמספקת את הערך. היא תופעל פעם אחת בלבד עם הארגומנטים שסופקו.
   * @param args הארגומנטים שיועברו לפונקציית ה-factory.
   */
  constructor(factory: (...args: TArgs) => T, ...args: TArgs) {
    super(factory, ...args);
  }

  /**
   * יוצר מופע Lazy חדש שערכו הוא תוצאת הפעלת mapFunc על הערך של מופע ה-Lazy הנוכחי.
   * החישוב מתבצע רק כאשר הערך של מופע ה-Lazy החדש נדרש.
   * @param mapFunc פונקציית המיפוי שתופעל על הערך המחושב.
   * @returns מופע Lazy חדש עם הטיפוס הממופה.
   */
  public map<TypOut>(mapFunc: PipeFunc<T, TypOut>): Lazy<TypOut> {
    // המפעל של ה-Lazy החדש קורא ל-this.value, מה שמפעיל את השרשרת
    // רק כאשר ה-Lazy הממופה עצמו נדרש.
    return new Lazy<TypOut>(() => mapFunc(this.value));
  }
}
