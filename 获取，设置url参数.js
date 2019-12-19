//设置url参数
//ecDo.setUrlPrmt({'a':1,'b':2})
//result：a=1&b=2
setUrlPrmt: function (obj) {
    var _rs = [];
    for (var p in obj) {
        if (obj[p] != null && obj[p] != '') {
            _rs.push(p + '=' + obj[p])
        }
    }
    return _rs.join('&');
},
//获取url参数
//ecDo.getUrlPrmt('test.com/write?draftId=122000011938')
//result：Object{draftId: "122000011938"}
getUrlPrmt: function (url) {
    url = url ? url : window.location.href;
    var _pa = url.substring(url.indexOf('?') + 1),
        _arrS = _pa.split('&'),
        _rs = {};
    for (var i = 0, _len = _arrS.length; i < _len; i++) {
        var pos = _arrS[i].indexOf('=');
        if (pos == -1) {
            continue;
        }
        var name = _arrS[i].substring(0, pos),
            value = window.decodeURIComponent(_arrS[i].substring(pos + 1));
        _rs[name] = value;
    }
    return _rs;
}
