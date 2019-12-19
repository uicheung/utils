randomColor: function () {
    //randomNumber是下面定义的函数
    //写法1
    //return 'rgb(' + this.randomNumber(255) + ',' + this.randomNumber(255) + ',' + this.randomNumber(255) + ')';
    //写法2
    return '#' + Math.random().toString(16).substring(2).substr(0, 6);
    //写法3
    //var color='#',_index=this.randomNumber(15);
    //for(var i=0;i<6;i++){
    //color+='0123456789abcdef'[_index];
    //}
    //return color;
}
//这种写法，偶尔会有问题。大家得注意哦
//Math.floor(Math.random()*0xffffff).toString(16);

// 作者：守候i
// 链接：https://juejin.im/post/5a2a7a5051882535cd4abfce
// 来源：掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。