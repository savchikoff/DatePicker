import { IColors, IFontWeights, ISizes } from "./styles";
interface ITheme {
    colors: IColors;
    sizes: ISizes;
    fontWeights: IFontWeights;
}
declare const theme: ITheme;
export default theme;
