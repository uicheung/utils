//使用方法
//findKey('守侯我oaks接到了来自下次你离开快乐吉祥留在开城侯','守侯 开','i')
//result："<i>守侯</i>我oaks接到了来自下次你离<i>开</i>快乐吉祥留在<i>开</i>城侯"


//这两个函数多用于搜索的时候，关键词高亮
//创建正则字符
//ecDo.createKeyExp([前端，过来])
//result:(前端|过来)/g
var createKeyExp = function (strArr) {
    var str = "";
    for (var i = 0; i < strArr.length; i++) {
        if (i != strArr.length - 1) {
            str = str + strArr[i] + "|";
        } else {
            str = str + strArr[i];
        }
    }
    return "(" + str + ")";
},
//关键字加标签（多个关键词用空格隔开）
//ecDo.findKey('守侯我oaks接到了来自下次你离开快乐吉祥留在开城侯','守侯 开','i')
//"<i>守侯</i>我oaks接到了来自下次你离<i>开</i>快乐吉祥留在<i>开</i>城侯"

var findKey =  function (str, key, el) {
    var arr = null,
        regStr = null,
        content = null,
        Reg = null,
        _el = el || 'span';
    arr = key.split(/\s+/);
    //alert(regStr); //    如：(前端|过来)
    regStr = createKeyExp(arr);
    content = str;
    //alert(Reg);//        /如：(前端|过来)/g
    Reg = new RegExp(regStr, "g");
    //过滤html标签 替换标签，往关键字前后加上标签
    content = content.replace(/<\/?[^>]*>/g, '')
    return content.replace(Reg, "<" + _el + ">$1</" + _el + ">");
}

// 链接：https://juejin.im/post/5a2a7a5051882535cd4abfce
