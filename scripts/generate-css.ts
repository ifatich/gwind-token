import fs from 'node:fs';
import path from 'node:path';

// Note: In an ultra-clean refactor, we define the static mappings here 
// to keep the CSS generator independent of complex TS logic.
const STYLES_DIR = path.join(__dirname, '../src/styles');

const primitives = {
    'broccoli': { 900: '172 100% 5.9%', 800: '172 100% 9%', 600: '172 100% 12%', 500: '172 100% 15.1%', 400: '173 30.8% 36.3%', 200: '172 17.2% 65.9%', 100: '171 16.3% 91.6%' },
    'lime': { 900: '147 100% 13.3%', 800: '147 100% 20%', 600: '147 100% 26.7%', 500: '147 100% 33.5%', 400: '137 49.4% 49.6%', 200: '136 48.9% 73.1%', 100: '135 47.1% 93.3%' },
    'pear': { 900: '98 47.6% 20.2%', 800: '97 48.1% 30.2%', 600: '97 47.6% 40.4%', 500: '98 49% 50.8%', 400: '97 49.2% 62.9%', 200: '98 48.5% 80.2%', 100: '95 46.2% 94.9%' },
    'kiwi': { 900: '69 63.8% 20.6%', 800: '69 64.3% 30.8%', 600: '69 63.8% 41.2%', 500: '69 67.6% 51.6%', 400: '69 67.7% 63.5%', 200: '69 67.7% 80.6%', 100: '71 68% 95.1%' },
    'red': { 900: '359 70.4% 15.9%', 800: '359 70.5% 23.9%', 600: '358 70.6% 32%', 500: '358 70.6% 40%', 400: '358 61.3% 56.5%', 200: '358 61.3% 76.7%', 100: '357 60% 94.1%' },
    'orange': { 900: '28 71.2% 20.4%', 800: '28 71.8% 30.6%', 600: '28 71.3% 41%', 500: '28 75% 51.4%', 400: '28 74.3% 63.3%', 200: '28 74% 80.4%', 100: '30 69.2% 94.9%' },
    'yellow': { 900: '40 53.4% 26.1%', 800: '40 53% 39.2%', 600: '40 58% 52.4%', 500: '40 100% 65.5%', 400: '40 100% 74.1%', 200: '52 100% 82.4%', 100: '40 100% 96.5%' },
    'gold': { 900: '40 33.3% 25.3%', 800: '40 33% 38%', 600: '40 33.9% 50.8%', 500: '40 57.8% 63.7%', 400: '41 57.1% 72.5%', 200: '40 57.3% 85.3%', 100: '38 57.9% 96.3%' },
    'turquoise': { 900: '168 100% 13.3%', 800: '168 100% 20.2%', 600: '168 100% 26.9%', 500: '168 100% 33.7%', 400: '168 50.4% 50.2%', 200: '168 50% 73.3%', 100: '169 47.1% 93.3%' },
    'blue': { 900: '207 82.7% 15.9%', 800: '207 82.1% 24.1%', 600: '207 81.7% 32.2%', 500: '207 75.4% 38.2%', 400: '207 58% 57.1%', 200: '208 57.3% 77.1%', 100: '208 58.6% 94.3%' },
    'purple': { 900: '302 54.9% 13.9%', 800: '300 54.7% 20.8%', 600: '301 54.9% 27.8%', 500: '301 55.1% 34.9%', 400: '301 29.6% 51%', 200: '302 29.3% 73.9%', 100: '300 29.4% 93.3%' },
    'black': { 800: '240 3.9% 15.1%', 600: '240 1.7% 35.1%', 500: '210 1.9% 58.4%', 400: '216 3.8% 74.3%', 200: '240 3% 94%', 100: '0 0% 97.3%' },
    'white': { DEFAULT: '0 0% 100%' }
};

const typography = {
    alpha: { token: '72-alpha', size: '4.5rem', lineHeight: '6.75rem' },
    beta: { token: '60-beta', size: '3.75rem', lineHeight: '5.625rem' },
    gamma: { token: '48-gamma', size: '3rem', lineHeight: '4.5rem' },
    delta: { token: '36-delta', size: '2.25rem', lineHeight: '3.375rem' },
    epsilon: { token: '30-epsilon', size: '1.875rem', lineHeight: '2.8125rem' },
    zeta: { token: '24-zeta', size: '1.5rem', lineHeight: '2.25rem' },
    kappa: { token: '20-kappa', size: '1.25rem', lineHeight: '1.875rem' },
    lambda: { token: '18-lambda', size: '1.125rem', lineHeight: '1.6875rem' },
    omicron: { token: '16-omicron', size: '1rem', lineHeight: '1.5rem' },
    sigma: { token: '14-sigma', size: '0.875rem', lineHeight: '1.25rem' },
    omega: { token: '12-omega', size: '0.75rem', lineHeight: '1.125rem' },
    atom: { token: '10-atom', size: '0.625rem', lineHeight: '0.875rem' },
};

const spacing = {
    2: '0.125rem',
    4: '0.25rem',
    8: '0.5rem',
    16: '1rem',
    24: '1.5rem',
    32: '2rem',
    40: '2.5rem',
    48: '3rem',
    64: '4rem',
    80: '5rem',
    120: '7.5rem',
};

const generateBaseCss = () => {
    let css = '/* Gwind Design System — Generated Variables */\n:root {\n';
    
    Object.entries(primitives).forEach(([color, shades]) => {
        Object.entries(shades).forEach(([shade, value]) => {
            const name = shade === 'DEFAULT' ? `--${color}` : `--${color}-${shade}`;
            css += `  ${name}: hsl(${value});\n`;
        });
    });

    css += `
  /* --- Semantics --- */
  --font-family-base: "Nunito Sans", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --regular: 600;
  --bold: 800;
  --background: var(--white);
  --foreground: var(--black-800);
  --foreground-primary: var(--black-800);
  --foreground-secondary: var(--black-600);
  --foreground-tertiary: var(--black-500);
  --foreground-green: var(--lime-500);
  --primary: var(--lime-500);
  --primary-foreground: var(--white);
  --primary-on-text: var(--lime-500);
  --secondary: var(--black-200);
  --secondary-foreground: var(--black-800);
  --muted: var(--black-200);
  --muted-foreground: var(--black-500);
  --accent: var(--black-200);
  --accent-foreground: var(--black-800);
  --destructive: var(--red-500);
  --destructive-foreground: var(--white);
  --destructive-on-text: var(--red-500);
  --success: var(--lime-500);
  --success-foreground: var(--white);
  --warning: var(--orange-500);
  --warning-foreground: var(--white);
  --border: var(--black-200);
  --input: var(--border);
  --input-focus: var(--lime-500);
  --ring: var(--primary);
  --popover: var(--white);
  --popover-foreground: var(--black-800);
  --card: var(--white);
  --card-foreground: var(--black-800);
  --text-white: var(--white);
  --radius: 0.5rem;
  --radix-accordion-content-height: 0px;

  /* --- Spacing --- */
`;

    Object.entries(spacing).forEach(([name, value]) => {
        css += `  --space-${name}: ${value};\n`;
    });

    css += `
  /* --- Typography --- */
`;

    Object.values(typography).forEach(({ token, size, lineHeight }) => {
        css += `  --${token}: ${size};\n`;
        css += `  --${token}-line-height: ${lineHeight};\n`;
    });

    css += `
  /* --- Layout --- */
  --container-padding-mobile: 1rem;
  --container-padding-tablet: 2rem;
  --container-padding-desktop: 9.75rem;
  --container-max-width-mobile: 100%;
  --container-max-width-tablet: 640px;
  --container-max-width-desktop: 1028px;
  --shadow-drop-1: 0px 0px 2px rgba(0, 0, 0, 0.08), 0px 2px 6px rgba(0, 0, 0, 0.14);
  --shadow-drop-2: 0px 0px 4px rgba(0, 0, 0, 0.10), 0px 6px 14px rgba(0, 0, 0, 0.16);
}\n`;
    return css;
};

const generateThemeCss = () => {
    let theme = `@theme {\n  --color-*: initial;\n`;
    
    // Standard semantic colors
    theme += `  --color-background: var(--background);\n`;
    theme += `  --color-foreground: var(--foreground);\n`;
    theme += `  --color-foreground-primary: var(--foreground-primary);\n`;
    theme += `  --color-foreground-secondary: var(--foreground-secondary);\n`;
    theme += `  --color-foreground-tertiary: var(--foreground-tertiary);\n`;
    theme += `  --color-foreground-green: var(--foreground-green);\n`;
    theme += `  --color-primary: var(--primary);\n`;
    theme += `  --color-primary-foreground: var(--primary-foreground);\n`;
    theme += `  --color-primary-on-text: var(--primary-on-text);\n`;
    theme += `  --color-secondary: var(--secondary);\n`;
    theme += `  --color-secondary-foreground: var(--secondary-foreground);\n`;
    theme += `  --color-muted: var(--muted);\n`;
    theme += `  --color-muted-foreground: var(--muted-foreground);\n`;
    theme += `  --color-accent: var(--accent);\n`;
    theme += `  --color-accent-foreground: var(--accent-foreground);\n`;
    theme += `  --color-destructive: var(--destructive);\n`;
    theme += `  --color-destructive-foreground: var(--destructive-foreground);\n`;
    theme += `  --color-destructive-on-text: var(--destructive-on-text);\n`;
    theme += `  --color-success: var(--success);\n`;
    theme += `  --color-success-foreground: var(--success-foreground);\n`;
    theme += `  --color-warning: var(--warning);\n`;
    theme += `  --color-warning-foreground: var(--warning-foreground);\n`;
    theme += `  --color-border: var(--border);\n`;
    theme += `  --color-input: var(--input);\n`;
    theme += `  --color-input-focus: var(--input-focus);\n`;
    theme += `  --color-ring: var(--ring);\n`;
    theme += `  --color-popover: var(--popover);\n`;
    theme += `  --color-popover-foreground: var(--popover-foreground);\n`;
    theme += `  --color-card: var(--card);\n`;
    theme += `  --color-card-foreground: var(--card-foreground);\n\n`;
    theme += `  --font-sans: var(--font-family-base);\n`;
    theme += `  --font-weight-normal: var(--regular);\n`;
    theme += `  --font-weight-medium: var(--regular);\n`;
    theme += `  --font-weight-semibold: var(--regular);\n`;
    theme += `  --font-weight-bold: var(--bold);\n`;
    theme += `  --font-weight-extrabold: var(--bold);\n\n`;

    // Map all primitive palette colors
    Object.entries(primitives).forEach(([color, shades]) => {
        Object.entries(shades).forEach(([shade, _]) => {
            const name = shade === 'DEFAULT' ? `--color-${color}` : `--color-${color}-${shade}`;
            const variable = shade === 'DEFAULT' ? `var(--${color})` : `var(--${color}-${shade})`;
            theme += `  ${name}: ${variable};\n`;
        });
    });

    theme += `  --radius-lg: var(--radius);\n`;
    theme += `  --radius-md: calc(var(--radius) - 0.125rem);\n`;
    theme += `  --radius-sm: calc(var(--radius) - 0.25rem);\n\n`;

    theme += `  --breakpoint-sm: 18.75rem;\n`;
    theme += `  --breakpoint-mobile: 22.5rem;\n`;
    theme += `  --breakpoint-tablet: 40rem;\n`;
    theme += `  --breakpoint-desktop: 64.25rem;\n\n`;

    Object.keys(spacing).forEach((name) => {
        theme += `  --spacing-gw-${name}: var(--space-${name});\n`;
    });
    theme += `\n`;

    Object.entries(typography).forEach(([name, { token }]) => {
        theme += `  --text-${name}: var(--${token});\n`;
        theme += `  --text-${name}--line-height: calc(var(--${token}-line-height) / var(--${token}));\n`;
    });

    theme += `\n`;
    theme += `  --drop-shadow-1: var(--shadow-drop-1);\n`;
    theme += `  --drop-shadow-2: var(--shadow-drop-2);\n`;
    theme += `  --animate-accordion-down: accordion-down 0.2s ease-out;\n`;
    theme += `  --animate-accordion-up: accordion-up 0.2s ease-out;\n`;
    theme += `  --animate-reverse-spin: reverse-spin 1s linear infinite;\n\n`;

    theme += `  @keyframes accordion-down {\n`;
    theme += `    from { height: 0; }\n`;
    theme += `    to { height: var(--radix-accordion-content-height); }\n`;
    theme += `  }\n`;
    theme += `  @keyframes accordion-up {\n`;
    theme += `    from { height: var(--radix-accordion-content-height); }\n`;
    theme += `    to { height: 0; }\n`;
    theme += `  }\n`;
    theme += `  @keyframes reverse-spin {\n`;
    theme += `    from { transform: rotate(360deg); }\n`;
    theme += `  }\n`;
    theme += `}\n`;
    return theme;
};

if (!fs.existsSync(STYLES_DIR)) fs.mkdirSync(STYLES_DIR, { recursive: true });
fs.writeFileSync(path.join(STYLES_DIR, 'base.css'), generateBaseCss());
fs.writeFileSync(path.join(STYLES_DIR, 'theme.css'), generateThemeCss());
console.log('✅ CSS Sources Generated');
