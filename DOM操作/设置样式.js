// obj:传入一个DOM元素
//json:{'color','blue'}
css: function (obj, json) {
    for (var attr in json) {
        obj.style[attr] = json[attr];
    }
}