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

export const sizes: ISizes = {
    s1: "1px",
    s4: "4px",
    s8: "8px",
    s12: "12px",
    s16: "16px",
    s18: "18px",
    s20: "20px",
    s24: "24px",
    s28: "28px",
    s32: "32px",
    s36: "36px",
    s40: "40px"
};

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

export const colors: IColors = {
    white: "#FFFFFF",
    red: "#FD1E1E",
    chineseWhite: "#E1E1E1",
    azure: "#007BFF",
    darkGrey: "#AAAAAA",
    coralRed: "#FB3A3A",
    darkWhite: "#F1F1F1"
};

export interface IFontWeights {
    normal: number;
    semiBold: number;
    bold: number;
    [fontWeight: string]: number;
}

export const fontWeights = {
    normal: 400,
    semiBold: 600,
    bold: 700,
};