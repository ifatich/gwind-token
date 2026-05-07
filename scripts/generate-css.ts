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
  --background: var(--white);
  --foreground: var(--black-800);
  --primary: var(--lime-500);
  --primary-foreground: var(--white);
  --secondary: var(--black-200);
  --secondary-foreground: var(--black-800);
  --muted: var(--black-200);
  --muted-foreground: var(--black-500);
  --accent: var(--black-200);
  --accent-foreground: var(--black-800);
  --destructive: var(--red-500);
  --destructive-foreground: var(--white);
  --success: var(--lime-500);
  --success-foreground: var(--white);
  --warning: var(--orange-500);
  --warning-foreground: var(--white);
  --border: var(--black-200);
  --input: var(--border);
  --ring: var(--primary);
  --popover: var(--white);
  --popover-foreground: var(--black-800);
  --card: var(--white);
  --card-foreground: var(--black-800);
  --radius: 0.5rem;

  /* --- Spacing --- */
  --space-2: 0.125rem; --space-4: 0.25rem; --space-8: 0.5rem; --space-16: 1rem;
  --space-24: 1.5rem; --space-32: 2rem; --space-40: 2.5rem; --space-48: 3rem;
  --space-64: 4rem; --space-80: 5rem; --space-120: 7.5rem;
}\n`;
    return css;
};

const generateThemeCss = () => {
    let theme = `@theme {\n  --color-*: initial;\n`;
    
    // Standard semantic colors
    theme += `  --color-background: var(--background);\n`;
    theme += `  --color-foreground: var(--foreground);\n`;
    theme += `  --color-primary: var(--primary);\n`;
    theme += `  --color-primary-foreground: var(--primary-foreground);\n`;
    theme += `  --color-secondary: var(--secondary);\n`;
    theme += `  --color-secondary-foreground: var(--secondary-foreground);\n`;
    theme += `  --color-muted: var(--muted);\n`;
    theme += `  --color-muted-foreground: var(--muted-foreground);\n`;
    theme += `  --color-accent: var(--accent);\n`;
    theme += `  --color-accent-foreground: var(--accent-foreground);\n`;
    theme += `  --color-destructive: var(--destructive);\n`;
    theme += `  --color-destructive-foreground: var(--destructive-foreground);\n`;
    theme += `  --color-success: var(--success);\n`;
    theme += `  --color-success-foreground: var(--success-foreground);\n`;
    theme += `  --color-warning: var(--warning);\n`;
    theme += `  --color-warning-foreground: var(--warning-foreground);\n`;
    theme += `  --color-border: var(--border);\n`;
    theme += `  --color-input: var(--input);\n`;
    theme += `  --color-ring: var(--ring);\n`;
    theme += `  --color-popover: var(--popover);\n`;
    theme += `  --color-popover-foreground: var(--popover-foreground);\n`;
    theme += `  --color-card: var(--card);\n`;
    theme += `  --color-card-foreground: var(--card-foreground);\n\n`;
    theme += `  --font-sans: var(--font-family-base);\n`;
    theme += `  --font-weight-normal: 600;\n`;
    theme += `  --font-weight-medium: 600;\n`;
    theme += `  --font-weight-semibold: 700;\n`;
    theme += `  --font-weight-bold: 800;\n\n`;

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

    // Add Gwind custom spacing to the theme while keeping Tailwind defaults
    theme += `  --spacing-gw-2: var(--space-2);\n`;
    theme += `  --spacing-gw-4: var(--space-4);\n`;
    theme += `  --spacing-gw-8: var(--space-8);\n`;
    theme += `  --spacing-gw-16: var(--space-16);\n`;
    theme += `  --spacing-gw-24: var(--space-24);\n`;
    theme += `  --spacing-gw-32: var(--space-32);\n`;
    theme += `  --spacing-gw-40: var(--space-40);\n`;
    theme += `  --spacing-gw-48: var(--space-48);\n`;
    theme += `  --spacing-gw-64: var(--space-64);\n`;
    theme += `  --spacing-gw-80: var(--space-80);\n`;
    theme += `  --spacing-gw-120: var(--space-120);\n\n`;

    theme += `  --text-omega: 0.75rem;\n`;
    theme += `  --text-omega--line-height: calc(1rem / 0.75rem);\n`;
    theme += `  --text-sigma: 0.875rem;\n`;
    theme += `  --text-sigma--line-height: calc(1.25rem / 0.875rem);\n`;
    theme += `  --text-omicron: 1rem;\n`;
    theme += `  --text-omicron--line-height: calc(1.5rem / 1rem);\n`;
    theme += `}\n`;
    return theme;
};

if (!fs.existsSync(STYLES_DIR)) fs.mkdirSync(STYLES_DIR, { recursive: true });
fs.writeFileSync(path.join(STYLES_DIR, 'base.css'), generateBaseCss());
fs.writeFileSync(path.join(STYLES_DIR, 'theme.css'), generateThemeCss());
console.log('✅ CSS Sources Generated');
