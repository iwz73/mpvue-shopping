import Vue from 'vue'
import App from './App'
import '../static/weui/weui.css'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['pages/index/main', 'pages/topic/main', '^pages/cart/main', 'pages/center/main'],
    window: {
      backgroundTextStyle: 'dark',
      navigationBarBackgroundColor: '#d91f2f',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'white'
    },
    tabBar: {
      color: '#666666',
      selectedColor: '#d91f2f',
      borderStyle: '#ffffff',
      backgroundColor: '#ffffff',
      list: [
        {
          text: '首页',
          pagePath: 'pages/index/main',
          iconPath: 'static/images/home.png',
          selectedIconPath: 'static/images/home-actived.png'
        }, {
          text: '购物车',
          pagePath: 'pages/cart/main',
          iconPath: 'static/images/cart.png',
          selectedIconPath: 'static/images/cart-actived.png'
        }, {
          text: '个人中心',
          pagePath: 'pages/center/main',
          iconPath: 'static/images/center.png',
          selectedIconPath: 'static/images/center-actived.png'
        }
        // {
        //   text: '话题',
        //   pagePath: 'pages/topic/main',
        //   iconPath: 'static/images/topic.png',
        //   selectedIconPath: 'static/images/topic-actived.png'
        // },
      ]
    }
  }
}
