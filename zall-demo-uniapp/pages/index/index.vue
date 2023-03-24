<template>
	<view class="container">
		<view class="btn-item">
			<button type="primary" plain="true" @tap="onLogin">登录</button>
		</view>

		<view class="btn-item">
			<button type="primary" @tap="onTrack">上报事件</button>
		</view>
		<view class="btn-item">
			<button type="default" plain="true" @tap="onChange">设置公共属性</button>
		</view>
		<view class="btn-item">
			<button type="default" plain="true" @tap="onChangeProfile">设置用户属性</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onLoad() {

		},
		methods: {

			onLogin() {
				getApp().sensors.registerApp({
					$distinctIdType: 2
				})
				getApp().sensors.login('mobile-123456')
			},
			onTrack() {
				getApp().sensors.track('MemberRegister', {
					content: '他是谁'
				})
			},

			onChange() {
				getApp().sensors.registerApp({
					$platform: 'miniapp'
				})
			},
			onChangeProfile() {
				getApp().sensors.setProfile({
					$title: '你好'
				})
			}
		}
	}
</script>

<style>
	.container {
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 200rpx 0;
		box-sizing: border-box;
		background: #F7F6F6;
	}

	.btn-item {
		margin: 10rpx;
	}

	.btn-item button {
		width: 200px;
	}
</style>
