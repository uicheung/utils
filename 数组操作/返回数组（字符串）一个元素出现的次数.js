//ecDo.getEleCount('asd56+asdasdwqe','a')
//result：3
//ecDo.getEleCount([1,2,3,4,5,66,77,22,55,22],22)
//result：2
getEleCount: function (obj, ele) {
    var num = 0;
    for (var i = 0, len = obj.length; i < len; i++) {
        if (ele === obj[i]) {
            num++;
        }
    }
    return num;
}

// 作者：守候i
// 链接：https://juejin.im/post/5a2a7a5051882535cd4abfce
// 来源：掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。