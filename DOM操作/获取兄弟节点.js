
//ecDo.siblings(obj,'#id')
// 如果只有obj ,obj为传入的一个dom元素，返回obj的其他兄弟元素的数组
// 如果有opt，在找完obj的兄弟元素之后，在兄弟元素的数组中过滤是否含有opt,opt为类名，id,标签三种，返回包含opt的数组
siblings: function (obj, opt) {
    var a = []; //定义一个数组，用来存o的兄弟元素
    var p = obj.previousSibling;
    while (p) { //先取o的哥哥们 判断有没有上一个哥哥元素，如果有则往下执行 p表示previousSibling
        if (p.nodeType === 1) {
            a.push(p);
        }
        p = p.previousSibling //最后把上一个节点赋给p
    }
    a.reverse() //把顺序反转一下 这样元素的顺序就是按先后的了
    var n = obj.nextSibling; //再取o的弟弟
    while (n) { //判断有没有下一个弟弟结点 n是nextSibling的意思
        if (n.nodeType === 1) {
            a.push(n);
        }
        n = n.nextSibling;
    }
    if (opt) {
        var _opt = opt.substr(1); // stringObject.substr(start,length) substr() 方法可在字符串中抽取从 start 下标开始的指定数目的字符。
        var b = [];//定义一个数组，用于储存过滤a的数组
        if (opt[0] === '.') {
            b = a.filter(function (item) {
                return item.className === _opt
            });
        }
        else if (opt[0] === '#') {
            b = a.filter(function (item) {
                return item.id === _opt
            });
        }
        else {
            b = a.filter(function (item) {
                return item.tagName.toLowerCase() === opt
            });
        }
        return b;
    }
    return a;
}

// 作者：守候i
// 链接：https://juejin.im/post/5a2a7a5051882535cd4abfce
// 来源：掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。