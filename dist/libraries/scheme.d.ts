declare const gwindScheme: {
    COLORS: {
        border: string;
        input: {
            DEFAULT: string;
            focus: string;
        };
        ring: string;
        background: string;
        foreground: {
            DEFAULT: string;
            primary: string;
            secondary: string;
            tertiary: string;
            green: string;
        };
        primary: {
            DEFAULT: string;
            foreground: string;
            "on-text": string;
        };
        secondary: {
            DEFAULT: string;
            foreground: string;
        };
        destructive: {
            DEFAULT: string;
            foreground: string;
            "on-text": string;
        };
        accent: {
            DEFAULT: string;
            foreground: string;
        };
        muted: {
            DEFAULT: string;
            foreground: string;
        };
        popover: {
            DEFAULT: string;
            foreground: string;
        };
        card: {
            DEFAULT: string;
            foreground: string;
        };
        "color-inherit": string;
        transparent: string;
    };
    METRICS: {
        borderRadius: {
            lg: string;
            md: string;
            sm: string;
        };
        screens: {
            mobile: {
                breakpoint: string;
                columns: string;
                gutter: string;
                margin: string;
            };
            tablet: {
                breakpoint: string;
                columns: string;
                gutter: string;
                margin: string;
            };
            laptop: {
                breakpoint: string;
                columns: string;
                gutter: string;
                margin: string;
            };
            xs: string;
        };
        keyframes: {
            "accordion-down": {
                from: {
                    height: string;
                };
                to: {
                    height: string;
                };
            };
            "accordion-up": {
                from: {
                    height: string;
                };
                to: {
                    height: string;
                };
            };
            "reverse-spin": {
                from: {
                    transform: string;
                };
            };
        };
        animation: {
            "accordion-down": string;
            "accordion-up": string;
            "reverse-spin": string;
        };
        height: {
            inherit: string;
        };
    };
    CONTAINER: {
        center: boolean;
        padding: string;
    };
    FONT_FAMILY: {
        sans: string;
    };
    SPACE_TOKENS: {
        space: {
            2: string;
            4: string;
            8: string;
            16: string;
            24: string;
            32: string;
            40: string;
            48: string;
            64: string;
            80: string;
            120: string;
        };
    };
    GWIND_SHADOWS: {
        dropShadow: {
            '1': string[];
            '2': string[];
        };
    };
};
export default gwindScheme;
//# sourceMappingURL=scheme.d.ts.map