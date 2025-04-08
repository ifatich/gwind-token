import tringScheme from "./scheme";
import tringFontSizes from "./font-sizes";
import tringColors from "./colors";


const tringTheme = {
    container: tringScheme.CONTAINER,
    fontSize: tringFontSizes.SIZES,
    fontWeight: tringFontSizes.WEIGHTS,
    colors: {
        ...tringColors,
        ...tringScheme.COLORS,
    },
    extend: {
        ...tringScheme.METRICS,
        ...tringScheme.SPACE_TOKENS,
        ...tringScheme.TRING_SHADOWS,
        ...tringScheme.FONT_FAMILY,
    },
}

export default tringTheme