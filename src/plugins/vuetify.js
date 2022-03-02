import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdi' // 默认值 - 仅用于展示目的
  },
  theme: {
    dark: false,
    themes: {
      dark: {
        primary: '#202938',
        secondary: '#1D2025',
        waring: '#45312A',
        accent: '#DED7B9',
        info: '#D58E40',
        error: '#7e2f28'
      },
      light: {
        primary: '#202938',
        secondary: '#1D2025',
        waring: '#45312A',
        accent: '#DED7B9',
        info: '#D58E40',
        error: '#7e2f28'
      }
    }
  }
})
