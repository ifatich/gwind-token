import plugin from "tailwindcss/plugin";
import tringScheme from "../../tring/scheme";
import tringTheme from "../../tring/theme";

const tringTwBase  = plugin(({addBase}) => {
    addBase({
        'body':{
            fontFamily: tringScheme.FONT_FAMILY.nunito,
            fontWeight: tringTheme.fontWeight.regular
        },
        ':root': {
            // Colors
            '--color-text-primary': '#323234',
            '--color-text-secondary': '#646467',
            '--color-text-tertiary': '#b1b1b3',
            '--color-text-white': '#ffffff',
            '--color-text-link': '#00ab4e',
            '--color-text-error': '#c34d36',

            '--neutral-white': '#ffffff',
            '--neutral-background': '#f8f8f8',
            '--neutral-component-background': '#eeeeef',
            '--neutral-foreground': '#e0e0e1',
            '--neutral-disabled-background': '#cbcbcd',

            '--jet-black-90': '#f8f8f8',
            '--jet-black-80': '#eeeeef',
            '--jet-black-70': '#e0e0e1',
            '--jet-black-50': '#cbcbcd',
            '--jet-black-40': '#b1b1b3',
            '--jet-black-20': '#646467',
            '--jet-black': '#323234',

            '--passion-green--70': '#f1f8ec',
            '--passion-green--50': '#c6e5b4',
            '--passion-green--20': '#95cf72',
            '--passion-green': '#72bf44',
            '--passion-green-20': '#5b9836',
            '--passion-green-50': '#447228',
            '--passion-green-70': '#2d4c1b',

            '--irish-green--70': '#e6f6ea',
            '--irish-green--50': '#99dcab',
            '--irish-green--20': '#40bd63',
            '--irish-green': '#00ab4e',
            '--irish-green-20': '#00883e',
            '--irish-green-50': '#00662e',
            '--irish-green-70': '#00441f',

            '--emerald-green--70': '#e6edec',
            '--emerald-green--50': '#99b7b3',
            '--emerald-green--20': '#407972',
            '--emerald-green': '#004d43',
            '--emerald-green-20': '#003d35',
            '--emerald-green-50': '#002e28',
            '--emerald-green-70': '#001e1a',

            '--crimson-red--70': '#feefec',
            '--crimson-red--50': '#f9bfb4',
            '--crimson-red--20': '#f47f69',
            '--crimson-red': '#f15f43',
            '--crimson-red-20': '#c34d36',
            '--crimson-red-50': '#953a29',
            '--crimson-red-70': '#67281b',

            '--pumpkin-orange--70': '#fbf2e9',
            '--pumpkin-orange--50': '#f2cba8',
            '--pumpkin-orange--20': '#e79e5c',
            '--pumpkin-orange': '#e07e26',
            '--pumpkin-orange-20': '#b3641e',
            '--pumpkin-orange-50': '#864b16',
            '--pumpkin-orange-70': '#59320f',

            '--butter-yellow--70': '#fef9e8',
            '--butter-yellow--50': '#fce8a4',
            '--butter-yellow--20': '#f9d149',
            '--butter-yellow': '#f8c51b',
            '--butter-yellow-20': '#c69e16',
            '--butter-yellow-50': '#957610',
            '--butter-yellow-70': '#634f0b',

            '--hazel-gold--70': '#fbf9f2',
            '--hazel-gold--50': '#efe7ca',
            '--hazel-gold--20': '#ded095',
            '--hazel-gold': '#d6c47a',
            '--hazel-gold-20': '#b1a263',
            '--hazel-gold-50': '#8d804d',
            '--hazel-gold-70': '#685f36',

            '--teal-green--70': '#f2faf8',
            '--teal-green--50': '#cdebe2',
            '--teal-green--20': '#9bd7c5',
            '--teal-green': '#82cdb7',
            '--teal-green-20': '#6aaa97',
            '--teal-green-50': '#528677',
            '--teal-green-70': '#3b6357',

            '--ocean-blue--70': '#edfbfd',
            '--ocean-blue--50': '#bee1e7',
            '--ocean-blue--20': '#69adb8',
            '--ocean-blue': '#1d7e8e',
            '--ocean-blue-20': '#176572',
            '--ocean-blue-50': '#114c55',
            '--ocean-blue-70': '#0c3239',

            // Grid
            '--grid-0-pattern': 'columns',
            '--grid-0-section-size': '1rem',
            '--grid-0-gutter-size': '20.5rem',
            '--grid-0-alignment': 'center',
            '--grid-0-count': '2',

            '--grid-1-pattern': 'columns',
            '--grid-1-section-size': '4.375rem',
            '--grid-1-gutter-size': '1rem',
            '--grid-1-alignment': 'center',
            '--grid-1-count': '4',

            '--grid-2-pattern': 'columns',
            '--grid-2-section-size': '1rem',
            '--grid-2-gutter-size': '4.375rem',
            '--grid-2-alignment': 'center',
            '--grid-2-count': '3',
            
            // Function
            '--border-radius-none': '0rem',
            '--border-radius-x-small': '0.25rem',
            '--border-radius-small': '0.5rem',
            '--border-radius-medium': '1rem',
            '--border-radius-large': '1.5rem',
            '--border-radius-x-large': '2rem',
            '--border-radius-full': '62.5rem',

            '--spacing-2': '0.125rem',
            '--spacing-4': '0.25rem',
            '--spacing-8': '0.5rem',
            '--spacing-12': '0.75rem',
            '--spacing-16': '1rem',
            '--spacing-24': '1.5rem',
            '--spacing-32': '2rem',
            '--spacing-40': '2.5rem',
            '--spacing-48': '3rem',
            '--spacing-56': '3.5rem',
            '--spacing-64': '4rem',
            '--spacing-72': '4.5rem',
            '--spacing-80': '5rem',

            // Typography Variables
            '--font-weight-regular': '400',
            '--font-weight-semibold': '600',
            '--font-weight-bold': '700',

            '--text-headline-lineheight-extra-large': '4.875rem',
            '--text-headline-lineheight-large': '2.75rem',
            '--text-headline-lineheight-medium': '2.375rem',

            '--text-headline-size-extra-large': '3.5rem',
            '--text-headline-size-large': '2.5rem',
            '--text-headline-size-medium': '2rem',

            '--text-title-lineheight-large': '2.25rem',
            '--text-title-lineheight-medium': '1.625rem',
            '--text-title-lineheight-small': '1.5rem',

            '--text-title-size-large': '1.5rem',
            '--text-title-size-medium': '1.125rem',
            '--text-title-size-small': '1rem',

            '--text-body-lineheight-large': '1.5rem',
            '--text-body-lineheight-medium': '1.25rem',
            '--text-body-lineheight-small': '1.125rem',

            '--text-body-size-large': '1rem',
            '--text-body-size-medium': '0.875rem',
            '--text-body-size-small': '0.75rem',

            '--text-label-lineheight-large': '1.125rem',
            '--text-label-lineheight-medium': '1rem',
            '--text-label-lineheight-small': '0.75rem',

            '--text-label-size-large': '0.75rem',
            '--text-label-size-medium': '0.625rem',
            '--text-label-size-small': '0.5rem',

            '--font-family-nunito': 'Nunito',
        },
    });
});

export default tringTwBase