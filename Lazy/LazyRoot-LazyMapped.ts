type PipeFunc<TIn, TOut> = (input: TIn) => TOut;

// LazyRoot-LazyMapped
//import { PipeFunc } from "myy-common";

interface ILazyCommon<T> {
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
     * אם מדובר בערך נגזר (באמצעות map), הפעולה תתגלגל במעלה השרשרת עד למקור.
     */
    reset(): void;

    /**
     * אם הערך לא חושב עדיין, הוא יחושב כעת ויאוחסן.
     * @returns {boolean} True אם הערך חושב כעת, False אם כבר היה מחושב.
     */
    evaluate(): boolean;
}

// ממשק שמייצג כל סוג של Lazy שניתן למפות
export interface ILazy<T> extends ILazyCommon<T> {
    /**
     * יוצר מופע Lazy חדש שערכו הוא תוצאת הפעלת mapFunc על הערך של מופע ה-Lazy הנוכחי.
     * החישוב מתבצע רק כאשר הערך של מופע ה-Lazy החדש נדרש.
     * ה-Lazy החדש יזכור את ההורה שלו, מה שיאפשר איפוס שרשרת.
     * @param mapFunc פונקציית המיפוי שתופעל על הערך המחושב.
     * @returns מופע Lazy חדש עם הטיפוס הממופה.
     */
    map<TypOut>(mapFunc: PipeFunc<T, TypOut>): ILazy<TypOut>;
}


export class LazyRoot<T, TArgs extends readonly unknown[] = []>
    implements ILazy<T>
{
    private factory: (...args: TArgs) => T;
    private args: TArgs;
    private _value: T | undefined;
    private _isEvaluated: boolean = false;

    /**
     * יוצר מופע חדש של LazyRoot.
     * @param factory הפונקציה שמספקת את הערך. היא תופעל פעם אחת בלבד עם הארגומנטים שסופקו.
     * @param args הארגומנטים שיועברו לפונקציית ה-factory.
     */
    constructor(factory: (...args: TArgs) => T, ...args: TArgs) {
        if (typeof factory !== "function") {
            throw new Error(
                "LazyRoot constructor expects a function (factory) as its first argument."
            );
        }
        this.factory = factory;
        this.args = args;
    }

    public evaluate(): boolean {
        if (!this._isEvaluated) {
            console.log(
                "LazyRoot: Explicitly evaluating value for the first time with arguments..."
            );
            this._value = this.factory(...this.args);
            this._isEvaluated = true;
            return true;
        } else {
            console.log(
                "LazyRoot: Value already pre-computed from explicit evaluation or previous access."
            );
            return false;
        }
    }

    public get value(): T {
        this.evaluate();
        return this._value as T;
    }

    public get isEvaluated(): boolean {
        return this._isEvaluated;
    }

    public reset(): void {
        console.log("LazyRoot: Resetting instance (root).");
        this._value = undefined;
        this._isEvaluated = false;
    }

    /**
     * יוצר מופע LazyMapped חדש שערכו הוא תוצאת הפעלת mapFunc על הערך של ה-LazyRoot הנוכחי.
     * @param mapFunc פונקציית המיפוי שתופעל על הערך המחושב.
     * @returns מופע LazyMapped חדש עם הטיפוס הממופה.
     */
    public map<TypOut>(mapFunc: PipeFunc<T, TypOut>): ILazy<TypOut> {
        // יוצרים LazyMapped ומעבירים לו את עצמנו כהורה ואת פונקציית המיפוי
        return new LazyMapped<TypOut, T>(this, mapFunc);
    }
}

export class LazyMapped<T, TParentValue>
    implements ILazy<T>
{
    private parentLazy: ILazy<TParentValue>; // הפניה ל-Lazy ההורה (יכול להיות LazyRoot או LazyMapped)
    private mapFunction: PipeFunc<TParentValue, T>;
    private _value: T | undefined;
    private _isEvaluated: boolean = false;

    /**
     * יוצר מופע חדש של LazyMapped.
     * @param parentLazy מופע ה-Lazy ההורה.
     * @param mapFunction פונקציית המיפוי מהערך של ההורה לערך הנוכחי.
     */
    constructor(parentLazy: ILazy<TParentValue>, mapFunction: PipeFunc<TParentValue, T>) {
        this.parentLazy = parentLazy;
        this.mapFunction = mapFunction;
    }

    public evaluate(): boolean {
        if (!this._isEvaluated) {
            console.log(
                "LazyMapped: Explicitly evaluating value for the first time..."
            );
            // נדאג שההורה יחושב קודם
            this.parentLazy.evaluate();
            this._value = this.mapFunction(this.parentLazy.value);
            this._isEvaluated = true;
            return true;
        } else {
            console.log(
                "LazyMapped: Value already pre-computed from explicit evaluation or previous access."
            );
            return false;
        }
    }

    public get value(): T {
        this.evaluate();
        return this._value as T;
    }

    public get isEvaluated(): boolean {
        return this._isEvaluated;
    }

    /**
     * מאפס את הערך החישוב, וקורא ל-reset על ההורה כדי לאפס את כל השרשרת.
     */
    public reset(): void {
        console.log("LazyMapped: Resetting instance (child). Also resetting parent.");
        this._value = undefined;
        this._isEvaluated = false;
        this.parentLazy.reset(); // קוראים ל-reset על ההורה
    }

    /**
     * יוצר מופע LazyMapped חדש שערכו הוא תוצאת הפעלת mapFunc על הערך של ה-LazyMapped הנוכחי.
     * @param mapFunc פונקציית המיפוי שתופעל על הערך המחושב.
     * @returns מופע LazyMapped חדש עם הטיפוס הממופה.
     */
    public map<TypOut>(mapFunc: PipeFunc<T, TypOut>): ILazy<TypOut> {
        // יוצרים LazyMapped חדש ומעבירים לו את עצמנו כהורה ואת פונקציית המיפוי
        return new LazyMapped<TypOut, T>(this, mapFunc);
    }
}