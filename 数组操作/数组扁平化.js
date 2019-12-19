//ecDo.steamroller([1,2,[4,5,[1,23]]])
//[1, 2, 4, 5, 1, 23]
steamroller: function (arr) {
    var newArr = [],_this=this;
    for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            // 如果是数组，调用(递归)steamroller 将其扁平化
            // 然后再 push 到 newArr 中
            newArr.push.apply(newArr, _this.steamroller(arr[i]));
        } else {
            // 不是数组直接 push 到 newArr 中
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

// 作者：守候i
// 链接：https://juejin.im/post/5a2a7a5051882535cd4abfce
// 来源：掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。