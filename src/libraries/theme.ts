import gwindScheme from "./scheme";
import gwindFontSizes from "./font-sizes";
import gwindColors from "./colors";


const gwindTheme = {
    container: gwindScheme.CONTAINER,
    fontSize: gwindFontSizes.SIZES,
    fontWeight: gwindFontSizes.WEIGHTS,
    colors: {
        ...gwindColors,
        ...gwindScheme.COLORS,
    },
    extend: {
        ...gwindScheme.METRICS,
        ...gwindScheme.SPACE_TOKENS,
        ...gwindScheme.GWIND_SHADOWS,
        ...gwindScheme.FONT_FAMILY,
    },
}

export default gwindTheme