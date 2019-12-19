//这一块的封装，主要是针对数字类型的数组
//求和
sumArr: function (arr) {
    return arr.reduce(function (pre, cur) {
        return pre + cur
    })
}
//数组平均值,小数点可能会有很多位，这里不做处理，处理了使用就不灵活！
covArr: function (arr) {
    return this.sumArr(arr) / arr.length;
},

// 作者：守候i
// 链接：https://juejin.im/post/5a2a7a5051882535cd4abfce
// 来源：掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。