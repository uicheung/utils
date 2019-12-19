//ecDo.checkPwd('12asdASAD')
//result：3(强度等级为3)
checkPwd: function (str) {
    var nowLv = 0;
    if (str.length < 6) {
        return nowLv
    }
    if (/[0-9]/.test(str)) {
        nowLv++
    }
    if (/[a-z]/.test(str)) {
        nowLv++
    }
    if (/[A-Z]/.test(str)) {
        nowLv++
    }
    if (/[\.|-|_]/.test(str)) {
        nowLv++
    }
    return nowLv;
}

// 链接：https://juejin.im/post/5a2a7a5051882535cd4abfce
