//ecDo.randomNumber(5,10)
//返回5-10的随机整数，包括5，10
//ecDo.randomNumber(10)
//返回0-10的随机整数，包括0，10
//ecDo.randomNumber()
//返回0-255的随机整数，包括0，255
randomNumber: function (n1, n2) {
    if (arguments.length === 2) {
        return Math.round(n1 + Math.random() * (n2 - n1));
    }
    else if (arguments.length === 1) {
        return Math.round(Math.random() * n1)
    }
    else {
        return Math.round(Math.random() * 255)
    }
}
