const COLORS = {
    border: "hsl(var(--border) / <alpha-value>)",
    input: {
        DEFAULT: "hsl(var(--input) / <alpha-value>)",
        focus: "hsl(var(--input-focus) / <alpha-value>)"
    },
    ring: "hsl(var(--ring) / <alpha-value>)",
    background: "hsl(var(--background) / <alpha-value>)",
    foreground: {
        DEFAULT: "hsl(var(--foreground) / <alpha-value>)",
        primary: "hsl(var(--foreground-primary) / <alpha-value>)",
        secondary: "hsl(var(--foreground-secondary) / <alpha-value>)",
        tertiary: "hsl(var(--foreground-tertiary) / <alpha-value>)",
        green: "hsl(var(--foreground-green) / <alpha-value>)"
    },
    primary: {
        DEFAULT: "hsl(var(--primary) / <alpha-value>)",
        foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
        "on-text": "hsl(var(--primary-on-text) / <alpha-value>)"
    },
    secondary: {
        DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
        foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",
    },
    destructive: {
        DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
        foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        "on-text": "hsl(var(--destructive-on-text) / <alpha-value>)"
    },
    accent: {
        DEFAULT: "hsl(var(--accent) / <alpha-value>)",
        foreground: "hsl(var(--accent-foreground) / <alpha-value>)"
    },
    muted: {
        DEFAULT: "hsl(var(--muted) / <alpha-value>)",
        foreground: "hsl(var(--muted-foreground) / <alpha-value>)"
    },
    popover: {
        DEFAULT: "hsl(var(--popover) / <alpha-value>)",
        foreground: "hsl(var(--popover-foreground) / <alpha-value>)"
    },
    card: {
        DEFAULT: "hsl(var(--card) / <alpha-value>)",
        foreground: "hsl(var(--card-foreground) / <alpha-value>)"
    },
    "color-inherit": "inherit",
    "transparent": "transparent"
}

const METRICS = {
    borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 0.125rem)",
        sm: "calc(var(--radius) - 0.25rem)",

        none: 'var(--border-radius-none)',
        small: 'var(--border-radius-small)',
        medium: 'var(--border-radius-medium)',
        large: 'var(--border-radius-large)',
        full: 'var(--border-radius-full)',

        'x-small': 'var(--border-radius-x-small)',
        'x-large': 'var(--border-radius-x-large)',
    },
    screens: {
        "sm": "18.75rem",
        "mobile": "22.5rem",
        "tablet": "40rem",
        "desktop": "64.25rem",
    },
    keyframes: {
        "accordion-down": {
            from: {
                height: "0"
            },
            to: {
                height: "var(--radix-accordion-content-height)"
            }
        },
        "accordion-up": {
            from: {
                height: "var(--radix-accordion-content-height)"
            },
            to: {
                height: "0"
            }
        },
        "reverse-spin": {
            from: {
                transform: "rotate(360deg)"
            }
        }
    },
    animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "reverse-spin": "reverse-spin 1s linear infinite"
    },
    height: {
        "inherit": "inherit"
    }
}

const CONTAINER = {
    center: false,
    padding: {
        mobile: '1rem',
        tablet: '2rem',
        desktop: '9.75rem',
    },
    maxWidth: {
        mobile: '100%',
        tablet: '640px',
        desktop: '1028px',
    }
}

const FONT_FAMILY = {
    nunito: ['Nunito', 'sans-serif'],
}

const SPACE_TOKENS = {
    space: {
        2: "var(--space-2)",
        4: "var(--space-4)",
        8: "var(--space-8)",
        16: "var(--space-16)",
        24: "var(--space-24)",
        32: "var(--space-32)",
        40: "var(--space-40)",
        48: "var(--space-48)",
        64: "var(--space-64)",
        80: "var(--space-80)",
        120: "var(--space-120)"
    },

    spacing: {
        'spacing-2': 'var(--spacing-2)',
        'spacing-4': 'var(--spacing-4)',
        'spacing-8': 'var(--spacing-8)',
        'spacing-12': 'var(--spacing-12)',
        'spacing-16': 'var(--spacing-16)',
        'spacing-24': 'var(--spacing-24)',
        'spacing-32': 'var(--spacing-32)',
        'spacing-40': 'var(--spacing-40)',
        'spacing-48': 'var(--spacing-48)',
        'spacing-56': 'var(--spacing-56)',
        'spacing-64': 'var(--spacing-64)',
        'spacing-72': 'var(--spacing-72)',
        'spacing-80': 'var(--spacing-80)'
    }
};

const TRING_SHADOWS = {
    dropShadow: {
        '1': [ '0px 0px 2px rgba(0, 0, 0, 0.08)', '0px 2px 6px rgba(0, 0, 0, 0.14)' ],
        '2': [ '0px 0px 4px rgba(0, 0, 0, 0.10)', '0px 6px 14px rgba(0, 0, 0, 0.16)' ],
    }
};

const HEADING = {
    h1: {
        fontSize: "var(--text-headline-size-extra-large)",
        lineHeight: "var(--text-headline-lineheight-extra-large)",
        fontWeight: "var(--font-weight-bold)"
    },
    h2: {
        fontSize: "var(--text-headline-size-large)",
        lineHeight: "var(--text-headline-lineheight-large)",
        fontWeight: "var(--font-weight-bold)"
    },
    h3: {
        fontSize: "var(--text-headline-size-medium)",
        lineHeight: "var(--text-headline-lineheight-medium)",
        fontWeight: "var(--font-weight-bold)"
    }
};

const tringScheme = {
    COLORS,
    METRICS,
    CONTAINER,
    FONT_FAMILY,
    SPACE_TOKENS,
    TRING_SHADOWS,
    HEADING
}

export default tringScheme
