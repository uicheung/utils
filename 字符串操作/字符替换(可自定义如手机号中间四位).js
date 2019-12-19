//字符替换*
//replaceStr(字符串,字符格式, 替换方式,替换的字符（默认*）)
//ecDo.replaceStr('18819322663',[3,5,3],0)
//result：188*****663
//ecDo.replaceStr('asdasdasdaa',[3,5,3],1)
//result：***asdas***
//ecDo.replaceStr('1asd88465asdwqe3',[5],0)
//result：*****8465asdwqe3
//ecDo.replaceStr('1asd88465asdwqe3',[5],1,'+')
//result："1asd88465as+++++"
var replaceStr =  function (str, regArr, type, ARepText) {
    var regtext = '',
        Reg = null,
        replaceText = ARepText || '*';
    //repeatStr是在上面定义过的（字符串循环复制），大家注意哦
    if (regArr.length === 3 && type === 0) {
        regtext = '(\\w{' + regArr[0] + '})\\w{' + regArr[1] + '}(\\w{' + regArr[2] + '})'
        Reg = new RegExp(regtext);
        var replaceCount = this.repeatStr(replaceText, regArr[1]);
        return str.replace(Reg, '$1' + replaceCount + '$2')
    }
    else if (regArr.length === 3 && type === 1) {
        regtext = '\\w{' + regArr[0] + '}(\\w{' + regArr[1] + '})\\w{' + regArr[2] + '}'
        Reg = new RegExp(regtext);
        var replaceCount1 = this.repeatStr(replaceText, regArr[0]);
        var replaceCount2 = this.repeatStr(replaceText, regArr[2]);
        return str.replace(Reg, replaceCount1 + '$1' + replaceCount2)
    }
    else if (regArr.length === 1 && type === 0) {
        regtext = '(^\\w{' + regArr[0] + '})'
        Reg = new RegExp(regtext);
        var replaceCount = this.repeatStr(replaceText, regArr[0]);
        return str.replace(Reg, replaceCount)
    }
    else if (regArr.length === 1 && type === 1) {
        regtext = '(\\w{' + regArr[0] + '}$)'
        Reg = new RegExp(regtext);
        var replaceCount = this.repeatStr(replaceText, regArr[0]);
        return str.replace(Reg, replaceCount)
    }
}


// 链接：https://juejin.im/post/5a2a7a5051882535cd4abfce
