const SIZES = {
    // Headline
    'headline-xl': ['var(--text-headline-size-extra-large)', 'var(--text-headline-lineheight-extra-large)'] as [string, string],
    'headline-lg': ['var(--text-headline-size-large)', 'var(--text-headline-lineheight-large)'] as [string, string],
    'headline-md-bold': ['var(--text-headline-size-medium)', 'var(--text-headline-lineheight-medium)', 'var(--font-weight-bold)'] as [string, string, string],
    'headline-md': ['var(--text-headline-size-medium)', 'var(--text-headline-lineheight-medium)'] as [string, string],

    // Title
    'title-lg-bold': ['var(--text-title-size-large)', 'var(--text-title-lineheight-large)', 'var(--font-weight-bold)'] as [string, string, string],
    'title-lg': ['var(--text-title-size-large)', 'var(--text-title-lineheight-large)'] as [string, string],
    'title-md-bold': ['var(--text-title-size-medium)', 'var(--text-title-lineheight-medium)', 'var(--font-weight-bold)'] as [string, string, string],
    'title-md': ['var(--text-title-size-medium)', 'var(--text-title-lineheight-medium)'] as [string, string],
    'title-sm-bold': ['var(--text-title-size-small)', 'var(--text-title-lineheight-small)', 'var(--font-weight-bold)'] as [string, string, string],
    'title-sm': ['var(--text-title-size-small)', 'var(--text-title-lineheight-small)'] as [string, string],

    // Body
    'body-md-bold': ['var(--text-body-size-medium)', 'var(--text-body-lineheight-medium)', 'var(--font-weight-bold)'] as [string, string, string],
    'body-md': ['var(--text-body-size-medium)', 'var(--text-body-lineheight-medium)'] as [string, string],
    'body-sm-bold': ['var(--text-body-size-small)', 'var(--text-body-lineheight-small)', 'var(--font-weight-bold)'] as [string, string, string],
    'body-sm': ['var(--text-body-size-small)', 'var(--text-body-lineheight-small)'] as [string, string],
    
    // Label
    'label-lg': ['var(--text-label-size-large)', 'var(--text-label-lineheight-large)'] as [string, string],

    "size-inherit": "inherit",
}

const WEIGHTS = {
    regular: "var(--font-weight-regular)",
    semibold: "var(--font-weight-semibold)",
    bold: "var(--font-weight-bold)",

    "weight-inherit": "inherit",
}

const tringThemeFontSizes = {
    SIZES,
    WEIGHTS
}

export default tringThemeFontSizes
