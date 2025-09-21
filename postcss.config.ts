import pxtorem from 'postcss-pxtorem'
import type { Config } from 'postcss-load-config'

const config: Config = {
  plugins: [
    pxtorem({
      propList: ['*'],
      mediaQuery: true,
    }),
  ],
}

export default config
