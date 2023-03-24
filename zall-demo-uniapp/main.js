import App from './App'
import Vue from 'vue'
import sensors from './utils/uni-app-sdk/index.js'


// 配置初始化参数
sensors.setPara({
	name: 'sensors',
	server_url: 'https://logcollect.zalldata.cn/a?project=z7adds&service=zall',
	// 全埋点控制开关
	autoTrack: {
		appLaunch: true, // 默认为 true，false 则关闭 $MPLaunch 事件采集
		appShow: true, // 默认为 true，false 则关闭 $MPShow 事件采集
		appHide: true, // 默认为 true，false 则关闭 $MPHide 事件采集
		pageShow: true, // 默认为 true，false 则关闭 $MPViewScreen 事件采集
		pageShare: true, // 默认为 true，false 则关闭 $MPShare 事件采集
		mpClick: false, // 默认为 false，true 则开启 $MPClick 事件采集
		mpFavorite: true, // 小程序收藏，默认为 true，false 则关闭 $MPAddFavorites 事件采集
		pageLeave: false // 默认为 false， true 则开启 $MPPageLeave事件采集
	},
	// 自定义渠道追踪参数，如 source_channel: ["custom_param"]
	source_channel: ['custom_param'],
	// 是否允许控制台打印查看埋点数据(建议开启查看)
	show_log: true,
});


Vue.config.productionTip = false
App.mpType = 'app'

// 挂载在 uni 上
uni.sensors = sensors

const app = new Vue({
	...App
})
app.$mount()
