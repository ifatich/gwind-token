const COLORS = {
    border: "var(--border)",
    input: {
        DEFAULT: "var(--input)",
        focus: "var(--input-focus)"
    },
    ring: "var(--ring)",
    background: "var(--background)",
    foreground: {
        DEFAULT: "var(--foreground)",
        primary: "var(--foreground-primary)",
        secondary: "var(--foreground-secondary)",
        tertiary: "var(--foreground-tertiary)",
        green: "var(--foreground-green)"
    },
    primary: {
        DEFAULT: "var(--primary)",
        foreground: "var(--primary-foreground)",
        "on-text": "var(--primary-on-text)"
    },
    secondary: {
        DEFAULT: "var(--secondary)",
        foreground: "var(--secondary-foreground)"
    },
    destructive: {
        DEFAULT: "var(--destructive)",
        foreground: "var(--destructive-foreground)",
        "on-text": "var(--destructive-on-text)"
    },
    accent: {
        DEFAULT: "var(--accent)",
        foreground: "var(--accent-foreground)"
    },
    muted: {
        DEFAULT: "var(--muted)",
        foreground: "var(--muted-foreground)"
    },
    popover: {
        DEFAULT: "var(--popover)",
        foreground: "var(--popover-foreground)"
    },
    card: {
        DEFAULT: "var(--card)",
        foreground: "var(--card-foreground)"
    },
    "color-inherit": "inherit",
    "transparent": "transparent"
}

const METRICS = {
    borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 0.125rem)",
        sm: "calc(var(--radius) - 0.25rem)"
    },
    screens: {
        "sm": "18,75rem",
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
    }
};

const GWIND_SHADOWS = {
    dropShadow: {
        '1': [ '0px 0px 2px rgba(0, 0, 0, 0.08)', '0px 2px 6px rgba(0, 0, 0, 0.14)' ],
        '2': [ '0px 0px 4px rgba(0, 0, 0, 0.10)', '0px 6px 14px rgba(0, 0, 0, 0.16)' ],
    }
};

const gwindScheme = {
    COLORS,
    METRICS,
    CONTAINER,
    SPACE_TOKENS,
    GWIND_SHADOWS
}

export default gwindScheme
