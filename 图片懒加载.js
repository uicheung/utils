//图片滚动懒加载
// @className {string} 要遍历图片的类名
// @num {number} 距离多少的时候开始加载 默认 0
// 比如，一张图片距离文档顶部3000，num参数设置200，那么在页面滚动到2800的时候，图片加载。不传num参数就滚动，num默认是0，页面滚动到3000就加载
// html代码
// <p><img data-src="https://user-gold-cdn.xitu.io/2017/12/7/160319f12631736f" class="load-img" width='528' height='304' /></p>
// <p><img data-src="https://user-gold-cdn.xitu.io/2017/12/7/160319f12631736f" class="load-img" width='528' height='304' /></p>
// <p><img data-src="https://user-gold-cdn.xitu.io/2017/12/7/160319f12631736f" class="load-img" width='528' height='304' /></p>....
// data-src储存src的数据，到需要加载的时候把data-src的值赋值给src属性，图片就会加载。
// 详细可以查看testLoadImg.html


// 使用方法
// window.onload = function() {
//    loadImg('load-img',100);
//    window.onscroll = function() {
//        ecDo.loadImg('load-img',100);
//        }
// }


// @className {string} 要遍历图片的类名
// @num {number} 距离多少的时候开始加载 默认 0
// @errorUrl {string} 图片没有加载成功时显示的图片 可以不写


var loadImg = function (className, num, errorUrl) {
    var _className = className || 'ec-load-img', _num = num || 0, _this = this,_errorUrl=errorUrl||null;
    var oImgLoad = document.getElementsByClassName(_className);
    for (var i = 0, len = oImgLoad.length; i < len; i++) {
        //如果图片已经滚动到指定的高度
        if (document.documentElement.clientHeight + document.documentElement.scrollTop > oImgLoad[i].offsetTop - _num && !oImgLoad[i].isLoad) {
            //记录图片是否已经加载
            oImgLoad[i].isLoad = true;
            //设置过渡，当图片下来的时候有一个图片透明度变化
            oImgLoad[i].style.cssText = "transition: ''; opacity: 0;"
            if (oImgLoad[i].dataset) {
                aftLoadImg(oImgLoad[i], oImgLoad[i].dataset.src, _errorUrl, function (o) {
                    //添加定时器，确保图片已经加载完了，再把图片指定的的class，清掉，避免重复编辑
                    setTimeout(function () {
                        if (o.isLoad) {
                            _this.removeClass(o, _className);
                            o.style.cssText = "";
                        }
                    }, 1000)
                });
            } else {
                aftLoadImg(oImgLoad[i], oImgLoad[i].getAttribute("data-src"), _errorUrl, function (o) {
                    //添加定时器，确保图片已经加载完了，再把图片指定的的class，清掉，避免重复编辑
                    setTimeout(function () {
                        if (o.isLoad) {
                            _this.removeClass(o, _className);
                            o.style.cssText = "";
                        }
                    }, 1000)
                });
            }
            (function (i) {
                setTimeout(function () {
                    oImgLoad[i].style.cssText = "transition:all 1s; opacity: 1;";
                }, 16)
            })(i);
        }
    }
}


//图片没加载出来时用一张图片代替
var aftLoadImg = function (obj, url, errorUrl,cb) {
    var oImg = new Image(), _this = this;
    oImg.src = url;
    oImg.onload = function () {
        obj.src = oImg.src;
        if (cb && _this.istype(cb, 'function')) {
            cb(obj);
        }
    }
    oImg.onerror=function () {
        obj.src=errorUrl;
        if (cb && _this.istype(cb, 'function')) {
            cb(obj);
        }
    }
}
