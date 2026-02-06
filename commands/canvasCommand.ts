import { BaseCommand, PointToolType, 
    HelperToolType, PathToolType, 
    PathInterfaceToolType, 
    PathParamToolType, } from "./baseCommand";
    
import { StyleCommand } from "./styleCommand";

/* PointItem, PointCommand & PointCommands */
export interface PointItem {
    x: number;
    y: number;
}

/* BaseCommand with PointItem */
interface PointHelperCommand extends BaseCommand, PointItem {
    type: HelperToolType;

}

export interface PointCommand extends BaseCommand, PointItem {
    type: PointToolType;
    isTmp?: boolean;
    // create a drawing rectangle with previous point (PointItem) to this point (PointItem)
    // בהתאם לכך ניתן, במידת הצורך, להוסיף פרמטרים נוספים שמשאירים את הצורה במלבן ציור

    // פרמטרים כגון: 
    // פרמטר סיבוב ציר

}

/* 0 params PointCommand, for types separation */
export interface PathCommand extends PointCommand {
    // 
    type: PathToolType;

}

/* extra params PointCommand, for types separation */
export interface PathParamCommand extends PointCommand {
    type: PathParamToolType;
}

// info: add extra params for CURVE, BEZIER 
// via CurveCommand, BezierCommand

export interface CurveItem {
    radius: number;
}

export const defaultCurveItem: CurveItem = {
    radius: 5
};

export interface CurveCommand extends PathParamCommand, CurveItem {
    type: 'CURVE';
}

export interface BezierItem {
    cp1x: number; cp1y: number; // נקודות בקרה דיפולטיביות בהתחלה
    cp2x: number; cp2y: number;
}

export const defaultBezierItem: BezierItem = {
    cp1x: 200, cp1y: 20,
    cp2x: 20, cp2y: 200
};

export interface BezierCommand extends PathParamCommand, BezierItem {
    type: 'BEZIER';
}

export interface PathInterfaceCommand extends PointCommand {
    type: PathInterfaceToolType;
}

export interface SQUARECommand extends PathInterfaceCommand {
    type: 'SQUARE';
}

// todo: on basis of PathParamCommand, 
// create PathInterfaceCommand (PathInterfaceToolType), 
// and SQUARECommand with short vs long (default short).
// make sure that SQUARECommand enforces equal width and height.
// in short: when creating from two points, calculate size based on smaller dimension.
// in long: when creating from two points, calculate size based on larger dimension.




/* CanvasCommand */
export type DrawingCommand =
    PathCommand

    //| PathParamCommand
    | CurveCommand
    | BezierCommand

    //| PathInterfaceCommand
    | SQUARECommand

    ;

export type CanvasCommand =
    StyleCommand
    | PointHelperCommand
    | DrawingCommand;
