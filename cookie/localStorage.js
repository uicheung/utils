//local strage读写操作
var localStorageMyself = {
	// 获取
	g: function(keyName) {
		return JSON.parse(window.localStorage[keyName] || '[]')
	},
	// 设置
	s: function(keyName, value) {
		window.localStorage.setItem(keyName, JSON.stringify(value))
	},
	// 移除
	r: function(keyName) {
		window.localStorage.removeItem(keyName)
	}
}