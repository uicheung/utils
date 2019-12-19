removeRepeatArray: function (arr) {
    return arr.filter(function (item, index, self) {
        return self.indexOf(item) === index;
    });
}

// 作者：守候i
// 链接：https://juejin.im/post/5a2a7a5051882535cd4abfce
// 来源：掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。