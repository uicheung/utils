// Blob 格式 Excel 文件下载
export const excelDownLoad = (url, data = {}) => {
  axios({
    method: 'post',
    url,
    data,
    responseType: 'arraybuffer'
  })
    .then(res => {
      // res.data 是一个 blob 流格式
      const blob = new Blob([res.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8' })
      // 创建a标签 点击事件
	  const downloadElement = document.createElement('a')
      let href = window.URL.createObjectURL(blob)
      downloadElement.href = href
      downloadElement.download = res.headers['content-disposition'].split('=')[1]
      document.body.appendChild(downloadElement)
      downloadElement.click()
      document.body.removeChild(downloadElement) // 下载完成移除元素
      window.URL.revokeObjectURL(href) // 释放掉blob对象
    })
}