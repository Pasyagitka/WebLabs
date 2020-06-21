    //3.
    function movement( xid,yexpr, xexpr, x0, y0,dx,t,time){
        var coords = getCoords(flower);
        var x0 = coords.left;
        var y0 = coords.top;
        xid ="img1";
        yexpr = "100*Math.sin(x)-50*Math.sin(2*x)";
        xexpr = "100*Math.cos(x)+50*Math.cos(2*x)";		
        dx = 0.15;
        t = 100;
        time = 4;
    if (!yexpr) return null;
    /* Значения параметров по умолчанию */
    if (!xexpr) xexpr="x";
    if (!x0) x0=0;
    if (!y0) y0=0;
    if (!dx) dx=0.1
    if(!t) t=100;
    if(!time) time=0;

    var xobj=document.getElementById(xid);
    if (!xobj) return;
    if (!xobj.style.position) xobj.style.position="absolute";
    x=0;
    sumtime=0; myinterval=0;
    myinterval=
    setInterval("move2('"+xid+"','"+yexpr+"','"+xexpr+
        "',"+x0+","+y0+","+t+","+dx+","+time+",myinterval)",t);
    return myinterval
    } 
    function  move2(xid,yexpr, xexpr, x0, y0,t, dx,time,myinterval){
    x=x+dx;
    document.getElementById(xid).style.top=parseInt(y0+eval(yexpr))+"px";
    document.getElementById(xid).style.left=parseInt(x0+eval(xexpr))+"px";
    if (time>0){
        sumtime+=t;
        if (sumtime>time*1000)clearInterval(myinterval); 
    }
    }

    //1. Картинка
    var flower = document.getElementById('flower');
    flower.onmousedown = function(e) {
    var coords = getCoords(flower);
    var shiftX = e.pageX - coords.left;
    var shiftY = e.pageY - coords.top;
    flower.style.position = 'absolute';
    document.body.appendChild(flower);
    moveAt(e);
    flower.style.zIndex = 1000; // над другими элементами
    function moveAt(e) {
        flower.style.left = e.pageX - shiftX + 'px';
        flower.style.top = e.pageY - shiftY + 'px';
    }
    document.onmousemove = function(e) {
        moveAt(e);
    };
    flower.onmouseup = function() {
        document.onmousemove = null;
        flower.onmouseup = null;
    };
    }
    flower.ondragstart = function() {
    return false;
    };
    function getCoords(elem) {   // кроме IE8-
    var box = elem.getBoundingClientRect();
    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };
    }
    //Область текста
    var text = document.getElementById('text');
    text.onmousedown = function(k) {
    var coords = getCoords(text);
    var shiftX = k.pageX - coords.left;
    var shiftY = k.pageY - coords.top;
    text.style.position = 'absolute';
    document.body.appendChild(text);
    moveAt(k);
    text.style.zIndex = 1000; // над другими элементами
    function moveAt(k) {
        text.style.left = k.pageX - shiftX + 'px';
        text.style.top = k.pageY - shiftY + 'px';
    }
    document.onmousemove = function(k) {
        moveAt(k);
    };
    text.onmouseup = function() {
        document.onmousemove = null;
        text.onmouseup = null;
    };
    }
    text.ondragstart = function() {
    return false;
    };
    function getCoords(elem) {   // кроме IE8-
    var box = elem.getBoundingClientRect();
    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };
    }
    //Задание 2. Создать программу на JS, организующую движение картинки по прямой линии. 
    ex2.onclick= function()
    {
        let start = Date.now(); 
        let timer = setInterval(function() {
        let timePassed = Date.now() - start;
        if (timePassed >= 1500) {
            clearInterval(timer);
            return;
        }
        draw(timePassed);
        }, 20);

        function draw(timePassed) {
        ex2.style.left = timePassed / 5 + 'px';
    }
}