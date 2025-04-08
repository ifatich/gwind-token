const tringThemeColors = {
    text: {
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
        tertiary: 'var(--color-text-tertiary)',
        white: 'var(--color-text-white)',
        link: 'var(--color-text-link)',
        error: 'var(--color-text-error)',
    },
    "jet-black": {
        90: "hsl(var(--jet-black-90)  / <alpha-value>)",
        80: "hsl(var(--jet-black-80)  / <alpha-value>)",
        70: "hsl(var(--jet-black-70)  / <alpha-value>)",
        50: "hsl(var(--jet-black-50)  / <alpha-value>)",
        40: "hsl(var(--jet-black-40)  / <alpha-value>)",
        20: "hsl(var(--jet-black-20)  / <alpha-value>)",
        default: "hsl(var(--jet-black)  / <alpha-value>)"
    },
    "passion-green": {
        70: "hsl(var(--passion-green-70)  / <alpha-value>)",
        50: "hsl(var(--passion-green-50)  / <alpha-value>)",
        20: "hsl(var(--passion-green-20)  / <alpha-value>)",
        default: "hsl(var(--passion-green)  / <alpha-value>)",
        "-20": "hsl(var(--passion-green--20)  / <alpha-value>)",
        "-50": "hsl(var(--passion-green--50)  / <alpha-value>)",
        "-70": "hsl(var(--passion-green--70)  / <alpha-value>)"
    },
    "irish-green": {
        70: "hsl(var(--irish-green-70)  / <alpha-value>)",
        50: "hsl(var(--irish-green-50)  / <alpha-value>)",
        20: "hsl(var(--irish-green-20)  / <alpha-value>)",
        default: "hsl(var(--irish-green)  / <alpha-value>)",
        "-20": "hsl(var(--irish-green--20)  / <alpha-value>)",
        "-50": "hsl(var(--irish-green--50)  / <alpha-value>)",
        "-70": "hsl(var(--irish-green--70)  / <alpha-value>)"
    },
    "emerald-green": {
        70: "hsl(var(--emerald-green-70)  / <alpha-value>)",
        50: "hsl(var(--emerald-green-50)  / <alpha-value>)",
        20: "hsl(var(--emerald-green-20)  / <alpha-value>)",
        default: "hsl(var(--emerald-green)  / <alpha-value>)",
        "-20": "hsl(var(--emerald-green--20)  / <alpha-value>)",
        "-50": "hsl(var(--emerald-green--50)  / <alpha-value>)",
        "-70": "hsl(var(--emerald-green--70)  / <alpha-value>)"
    },
    "crimson-red": {
        70: "hsl(var(--crimson-red-70)  / <alpha-value>)",
        50: "hsl(var(--crimson-red-50)  / <alpha-value>)",
        20: "hsl(var(--crimson-red-20)  / <alpha-value>)",
        default: "hsl(var(--crimson-red)  / <alpha-value>)",
        "-20": "hsl(var(--crimson-red--20)  / <alpha-value>)",
        "-50": "hsl(var(--crimson-red--50)  / <alpha-value>)",
        "-70": "hsl(var(--crimson-red--70)  / <alpha-value>)"
    },
    "pumpkin-orange": {
        70: "hsl(var(--pumpkin-orange-70)  / <alpha-value>)",
        50: "hsl(var(--pumpkin-orange-50)  / <alpha-value>)",
        20: "hsl(var(--pumpkin-orange-20)  / <alpha-value>)",
        default: "hsl(var(--pumpkin-orange)  / <alpha-value>)",
        "-20": "hsl(var(--pumpkin-orange--20)  / <alpha-value>)",
        "-50": "hsl(var(--pumpkin-orange--50)  / <alpha-value>)",
        "-70": "hsl(var(--pumpkin-orange--70)  / <alpha-value>)"
    },
    "butter-yellow": {
        70: "hsl(var(--butter-yellow-70)  / <alpha-value>)",
        50: "hsl(var(--butter-yellow-50)  / <alpha-value>)",
        20: "hsl(var(--butter-yellow-20)  / <alpha-value>)",
        default: "hsl(var(--butter-yellow)  / <alpha-value>)",
        "-20": "hsl(var(--butter-yellow--20)  / <alpha-value>)",
        "-50": "hsl(var(--butter-yellow--50)  / <alpha-value>)",
        "-70": "hsl(var(--butter-yellow--70)  / <alpha-value>)"
    },
    "hazel-gold": {
        70: "hsl(var(--hazel-gold-70)  / <alpha-value>)",
        50: "hsl(var(--hazel-gold-50)  / <alpha-value>)",
        20: "hsl(var(--hazel-gold-20)  / <alpha-value>)",
        default: "hsl(var(--hazel-gold)  / <alpha-value>)",
        "-20": "hsl(var(--hazel-gold--20)  / <alpha-value>)",
        "-50": "hsl(var(--hazel-gold--50)  / <alpha-value>)",
        "-70": "hsl(var(--hazel-gold--70)  / <alpha-value>)"
    },
    "teal-green": {
        70: "hsl(var(--teal-green-70)  / <alpha-value>)",
        50: "hsl(var(--teal-green-50)  / <alpha-value>)",
        20: "hsl(var(--teal-green-20)  / <alpha-value>)",
        default: "hsl(var(--teal-green)  / <alpha-value>)",
        "-20": "hsl(var(--teal-green--20)  / <alpha-value>)",
        "-50": "hsl(var(--teal-green--50)  / <alpha-value>)",
        "-70": "hsl(var(--teal-green--70)  / <alpha-value>)"
    },
    "ocean-blue": {
        70: "hsl(var(--ocean-blue-70)  / <alpha-value>)",
        50: "hsl(var(--ocean-blue-50)  / <alpha-value>)",
        20: "hsl(var(--ocean-blue-20)  / <alpha-value>)",
        default: "hsl(var(--ocean-blue)  / <alpha-value>)",
        "-20": "hsl(var(--ocean-blue--20)  / <alpha-value>)",
        "-50": "hsl(var(--ocean-blue--50)  / <alpha-value>)",
        "-70": "hsl(var(--ocean-blue--70)  / <alpha-value>)"
    },
    white: "hsl(var(--text-white)  / <alpha-value>)"
}

export default tringThemeColors