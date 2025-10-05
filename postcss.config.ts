import pxToRem from 'postcss-pxtorem'
import autoprefixer from 'autoprefixer'

import type { Config } from 'postcss-load-config'

const config: Config = {
  plugins: [
    autoprefixer({
      browserlist: ['defaults'],
    }),
    pxToRem({
      propList: ['*'],
      mediaQuery: true,
    }),
  ],
}

export default config
