    // 传入两个值   number:滚动的位置   time:滚动的时间
	
	scrollTop(number = 0, time) {
      if (!time) {
        document.body.scrollTop = document.documentElement.scrollTop = number;
        return number;
      }
      let _this = this;
      const spacingTime = 20; // 设置循环的间隔时间  值越小消耗性能越高
      let spacingInex = time / spacingTime; // 计算循环的次数
      let nowTop = document.body.scrollTop + document.documentElement.scrollTop; // 获取当前滚动条位置
      let everTop = (number - nowTop) / spacingInex; // 计算每次滑动的距离

      let scrollTimer = setInterval(() => {
        if (spacingInex > 0) {
          spacingInex--;
          _this.scrollTop((nowTop += everTop));
        } else {
          clearInterval(scrollTimer); // 清除计时器
        }
      }, spacingTime);
    },
	
//监听滚动的位置	
//mounted() {
//   window.addEventListener("scroll", function() {
//     console.log(document.documentElement.scrollTop);
//   });
// },