<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')

			const sensors = uni.sensors

			// 初始化 SDK 
			// 直接 init  埋点 id 会随机生成UUID
			// sensors.init()


			// 发送 res.code 到后台换取 openId, sessionKey, unionId
			wx.login({
				success: res => {;

					wx.request({
						url: '后端获取 OpenID 的请求',
						success: function(res) {
							sensors.identify('openid-11111')
							sensors.instance.registerApp({
								$distinctIdType: 4
							})
							sensors.init();

							// 若需要同时设置业务id和匿名id作为id关联
							setTimeout(() => {
								sensors.instance.registerApp({
									$distinctIdType: 3
								})
								sensors.login('unionid-22222')
							})
						},
						error: function() {
							// 如果获取 openid 失败，SDK 会以 UUID 作为匿名 ID 发数据
							sensors.init();
						}
					});
				}
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
