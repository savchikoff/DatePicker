import { sizes, ISizes, colors, IColors, fontWeights, IFontWeights } from "./styles";

interface ITheme {
    colors: IColors;
    sizes: ISizes;
    fontWeights: IFontWeights;
}

const theme: ITheme = {
    sizes: { ...sizes },
    colors: { ...colors },
    fontWeights: { ...fontWeights }
};

export default theme;