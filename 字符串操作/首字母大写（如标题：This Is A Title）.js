//这个我也一直在纠结，英文标题，即使是首字母大写，也未必每一个单词的首字母都是大写的，但是又不知道哪些应该大写，哪些不应该大写
//ecDo.titleCaseUp('this is a title')
//"This Is A Title"
titleCaseUp: function (str, splitType) {
    var _splitType = splitType || /\s+/g;
    var strArr = str.split(_splitType),
        result = "", _this = this
    strArr.forEach(function (item) {
        result += _this.changeCase(item, 1) + ' ';
    })
    return this.trim(result, 4)
}  


// 链接：https://juejin.im/post/5a2a7a5051882535cd4abfce
