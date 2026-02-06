import { BaseCommand } from "./baseCommand";
import { transparent } from "./colors";

/* StyleItem & StyleCommand */
export interface StyleItem {
    fillStyle?: string;
    strokeStyle?: string;
    lineWidth?: number;
}

export const brushSizes = [2, 4, 8, 12, 16, 20, 30, 40] as const;
// insted of int, a close list of allowed brush sizes.
//type brushSizesType = typeof brushSizes[number];

const defaultStrokeStyle: string = '#9329b0ff';
const defaultFillStyle = transparent;

export const defaultStyleItems: StyleItem = {
    lineWidth: brushSizes[1],
    strokeStyle: defaultStrokeStyle,
    fillStyle: defaultFillStyle, 
};

export interface StyleCommand extends BaseCommand, StyleItem {
    type: 'SET_STYLE';
}
