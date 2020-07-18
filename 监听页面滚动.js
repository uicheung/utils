handleScroll() {
      //获取滚动时的高度
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      let oneHeight = this.$refs.scrollOne.offsetHeight;
      let twoHeight = this.$refs.scrollTwo.offsetHeight + oneHeight;
      let threeHeight = this.$refs.scrollThree.offsetHeight + twoHeight;
      //
      // console.log(scrollTop)
      if (scrollTop > 0) {
        //滚动大于0的时候要做的操作
      }
      if (scrollTop > 200) {
        //大于200的时候要做的操作
      }
      if (scrollTop > oneHeight) {
        //这是滑动到scrollTwo的距离要做的操作
      }
      if (scrollTop > twoHeight) {
        //这是滑动到scrollThree要做的操作
      }
    }