import pxToRem from 'postcss-pxtorem'
import customMedia from 'postcss-custom-media'
// import globalData from '@csstools/postcss-global-data'
import type { Config } from 'postcss-load-config'

const config: Config = {
  plugins: [
    // globalData({
    //   files: ['./src/assets/styles/helpers/_breakpoints.scss'],
    // }),
    customMedia(),
    pxToRem({
      propList: ['*'],
      mediaQuery: true,
    }),
  ],
}

export default config
