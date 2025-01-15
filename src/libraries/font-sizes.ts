const SIZES = {
    alpha: ["var(--72-alpha)", "var(--72-alpha-line-height)", "var(--font-family-base)"] as [string, string, string],
    beta: ["var(--60-beta)", "var(--60-beta-line-height)"] as [string, string],
    gamma: ["var(--48-gamma)", "var(--48-gamma-line-height)"] as [string, string],
    delta: ["var(--36-delta)", "var(--36-delta-line-height)"] as [string, string],
    epsilon: ["var(--30-epsilon)", "var(--30-epsilon-line-height)"] as [string, string],
    zeta: ["var(--24-zeta)", "var(--24-zeta-line-height)"] as [string, string],
    kappa: ["var(--20-kappa)", "var(--20-kappa-line-height)"] as [string, string],
    lambda: ["var(--18-lambda)", "var(--18-lambda-line-height)"] as [string, string],
    omicron: ["var(--16-omicron)", "var(--16-omicron-line-height)", "var(--font-family-base)"] as [string, string, string],
    sigma: ["var(--14-sigma)", "var(--14-sigma-line-height)"] as [string, string],
    omega: ["var(--12-omega)", "var(--12-omega-line-height)"] as [string, string],
    atom: ["var(--10-atom)", "var(--10-atom-line-height)"] as [string, string],
    "size-inherit": "inherit",
}

const WEIGHTS = {
    regular: "var(--regular)",
    bold: "var(--bold)",
    "weight-inherit": "inherit",
}

const gwindThemeFontSizes = {
    SIZES,
    WEIGHTS
}

export default gwindThemeFontSizes
