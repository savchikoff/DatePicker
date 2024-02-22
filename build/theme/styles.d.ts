export interface ISizes {
    s1: string;
    s4: string;
    s8: string;
    s12: string;
    s16: string;
    s18: string;
    s20: string;
    s24: string;
    s28: string;
    s32: string;
    s36: string;
    s40: string;
    [size: string]: string;
}
export declare const sizes: ISizes;
export interface IColors {
    white: string;
    red: string;
    chineseWhite: string;
    azure: string;
    darkGrey: string;
    coralRed: string;
    darkWhite: string;
    [color: string]: string;
}
export declare const colors: IColors;
export interface IFontWeights {
    normal: number;
    semiBold: number;
    bold: number;
    [fontWeight: string]: number;
}
export declare const fontWeights: {
    normal: number;
    semiBold: number;
    bold: number;
};
