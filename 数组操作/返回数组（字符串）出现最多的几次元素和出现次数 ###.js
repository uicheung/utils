//arr, rank->长度，默认为数组长度，ranktype，排序方式，默认降序
//返回值：el->元素，count->次数
//ecDo.getCount([1,2,3,1,2,5,2,4,1,2,6,2,1,3,2])
//默认情况，返回所有元素出现的次数
//result：[{"el":"2","count":6},{"el":"1","count":4},{"el":"3","count":2},{"el":"4","count":1},{"el":"5","count":1},{"el":"6","count":1}]
//ecDo.getCount([1,2,3,1,2,5,2,4,1,2,6,2,1,3,2],3)
//传参（rank=3），只返回出现次数排序前三的
//result：[{"el":"2","count":6},{"el":"1","count":4},{"el":"3","count":2}]
//ecDo.getCount([1,2,3,1,2,5,2,4,1,2,6,2,1,3,2],null,1)
//传参（ranktype=1,rank=null），升序返回所有元素出现次数
//result：[{"el":"6","count":1},{"el":"5","count":1},{"el":"4","count":1},{"el":"3","count":2},{"el":"1","count":4},{"el":"2","count":6}]
//ecDo.getCount([1,2,3,1,2,5,2,4,1,2,6,2,1,3,2],3,1)
//传参（rank=3，ranktype=1），只返回出现次数排序（升序）前三的
//result：[{"el":"6","count":1},{"el":"5","count":1},{"el":"4","count":1}]
getCount: function (arr, rank, ranktype) {
    var obj = {},
        k, arr1 = []
    //记录每一元素出现的次数
    for (var i = 0, len = arr.length; i < len; i++) {
        k = arr[i];
        if (obj[k]) {
            obj[k]++;
        } else {
            obj[k] = 1;
        }
    }
    //保存结果{el-'元素'，count-出现次数}
    for (var o in obj) {
        arr1.push({el: o, count: obj[o]});
    }
    //排序（降序）
    arr1.sort(function (n1, n2) {
        return n2.count - n1.count
    });
    //如果ranktype为1，则为升序，反转数组
    if (ranktype === 1) {
        arr1 = arr1.reverse();
    }
    var rank1 = rank || arr1.length;
    return arr1.slice(0, rank1);
}

// 作者：守候i
// 链接：https://juejin.im/post/5a2a7a5051882535cd4abfce
// 来源：掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。