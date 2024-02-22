import { colors, fontWeights, IColors, IFontWeights, ISizes, sizes } from "./styles";

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