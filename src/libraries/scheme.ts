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
        foreground: "hsl(var(--secondary-foreground) / <alpha-value>)"
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
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
    },

    screens: {
        mobile: {
            breakpoint: "var(--mobile-breakpoint)",
            columns: "var(--mobile-columns)",
            gutter: "var(--mobile-gutter)",
            margin: "var(--mobile-margin)",
        },
  
        tablet: {
            breakpoint: "var(--tablet-breakpoint)",
            columns: "var(--tablet-columns)",
            gutter: "var(--tablet-gutter)",
            margin: "var(--tablet-margin)",
        },

        laptop: {
            breakpoint: "var(--desktop-breakpoint)",
            columns: "var(--desktop-columns)",
            gutter: "var(--desktop-gutter)",
            margin: "var(--desktop-margin)",
        },

        "xs": "321px"
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
    center: true,
    padding: "2rem",
}

const FONT_FAMILY = {
    sans: 'Nunito Sans, sans-serif',
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
    FONT_FAMILY,
    SPACE_TOKENS,
    GWIND_SHADOWS
}

export default gwindScheme