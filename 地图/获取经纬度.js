function getPosition () {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        let latitude = position.coords.latitude
        let longitude = position.coords.longitude
        let data = {
          latitude: latitude,
          longitude: longitude
        }
        resolve(data)
      }, function () {
        reject(arguments)
      })
    } else {
      reject('你的浏览器不支持当前地理位置信息获取')
    }
  })
}

//调用方法如下
// 获取当前经纬度坐标
getPosition().then(result => {
	// 返回结果示例：
	// {latitude: 30.318030999999998, longitude: 120.05561639999999}
	// 一般小数点后只取六位，所以用以下代码搞定
	let queryData = {
		longtitude: String(result.longitude).match(/\d+\.\d{0,6}/)[0],
		latitude: String(result.latitude).match(/\d+\.\d{0,6}/)[0],
		channelType: '00'
	}
	console.log(queryData)
	// 以下放置获取坐标后你要执行的代码:
	// ...
}).catch(err => {
	console.log(err)
})

