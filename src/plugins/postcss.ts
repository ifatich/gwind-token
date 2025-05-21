import fs from 'fs'
import path from 'path'


const pluginName = 'postcss-gwind'
const baseCssPath = 'node_modules/gwind/dist/styles/base.css'
const tringCssPath = 'node_modules/gwind/dist/styles/tring.css'

const postcssGwind = () => {
    return {
        postcssPlugin: pluginName,
        AtRule: {
            gwind: (atRule: any) => {
                const map: Record<string, string> = {
                    base: path.resolve(process.cwd(), baseCssPath),
                    tring: path.resolve(process.cwd(), tringCssPath),
                }

                const filePath = map[atRule.params.trim()]
                if (!filePath) {
                    throw atRule.error(`Unknown @gwind directive: ${atRule.params}`)
                }

                const fileContent = fs.readFileSync(path.resolve(__dirname, filePath), 'utf-8')
                atRule.replaceWith(fileContent)
            },
        },
    }
}

postcssGwind.postcss = true

export default postcssGwind