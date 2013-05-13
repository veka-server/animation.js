Math.easeInQuad = function (t, b, c, d) {
        return (c*(t/=d)*t + b);
}
Math.easeOutQuad = function (t, b, c, d) {
        return -c *(t/=d)*(t-2) + b;
}
Math.easeInOutQuad = function (t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t + b;
        return -c/2 * ((--t)*(t-2) - 1) + b;
}
Math.easeInCubic = function (t, b, c, d) {
        return c*(t/=d)*t*t + b;
}
Math.easeOutCubic = function (t, b, c, d) {
        return c*((t=t/d-1)*t*t + 1) + b;
}
Math.easeInOutCubic = function (t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t + b;
        return c/2*((t-=2)*t*t + 2) + b;
}
Math.easeInQuart = function (t, b, c, d) {
        return c*(t/=d)*t*t*t + b;
}
Math.easeOutQuart = function (t, b, c, d) {
        return -c * ((t=t/d-1)*t*t*t - 1) + b;
}
Math.easeInOutQuart = function (t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
        return -c/2 * ((t-=2)*t*t*t - 2) + b;
}
Math.easeInQuint = function (t, b, c, d) {
        return c*(t/=d)*t*t*t*t + b;
}
Math.easeOutQuint = function (t, b, c, d) {
        return c*((t=t/d-1)*t*t*t*t + 1) + b;
}
Math.easeInOutQuint = function (t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
        return c/2*((t-=2)*t*t*t*t + 2) + b;
}
Math.easeInSine = function (t, b, c, d) {
        return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
}
Math.easeOutSine = function (t, b, c, d) {
        return c * Math.sin(t/d * (Math.PI/2)) + b;
}
Math.easeInOutSine = function (t, b, c, d) {
        return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
}
Math.easeInExpo = function (t, b, c, d) {
        return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
}
Math.easeOutExpo = function (t, b, c, d) {
        return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
}
Math.easeInOutExpo = function (t, b, c, d) {
        if (t==0) return b;
        if (t==d) return b+c;
        if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
        return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
}
Math.easeInCirc = function (t, b, c, d) {
        return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
}
Math.easeOutCirc = function (t, b, c, d) {
        return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
}
Math.easeInOutCirc = function (t, b, c, d) {
        if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
        return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
}
Math.easeInElastic = function (t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
}
Math.easeOutElastic = function (t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
}
Math.easeInOutElastic = function (t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
        return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
}
Math.easeInBack = function (t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c*(t/=d)*t*((s+1)*t - s) + b;
}
Math.easeOutBack = function (t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
}

Math.easeInOutBack = function (t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
        return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
}

Math.easeOutBounce = function (t, b, c, d) {
        if ((t/=d) < (1/2.75)) {
                return c*(7.5625*t*t) + b;
        } else if (t < (2/2.75)) {
                return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
        } else if (t < (2.5/2.75)) {
                return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
        } else {
                return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
        }
}

/**
* Converti une liste d'objet en tableau
**/
function argsToArray(args) 
{
  var r = []; for (var i = 0; i < args.length; i++)
    r.push(args[i]);
  return r;
}

/**
* Lire une valeur css directement dans la feuille de style
**/
function getStyle(oElm, strCssRule){
    var strValue = "";
    if(document.defaultView && document.defaultView.getComputedStyle){
        strValue = document.defaultView.getComputedStyle(oElm, "").getPropertyValue(strCssRule);
    }
    else if(oElm.currentStyle){
        strCssRule = strCssRule.replace(/\-(\w)/g, function (strMatch, p1){
            return p1.toUpperCase();
        });
        strValue = oElm.currentStyle[strCssRule];
    }
    return strValue;
}

/**
* fonction sleep en ms
**/
function sleep(time, callback) 
{
    setTimeout(function () 
    {
        if(typeof(callback) == "function") {callback()}

    }, time); 
}



Element.prototype.moveTo = function (x, y, time, effet, callback) 
{

    effet = effet || 'easeOutQuad';
    time = time || 400;

    var element = this;
    var i = 1;
    var nb_etape = (time/1000)*50;
    var temps_une_etape = time/nb_etape;

    // recuperation des coordonnées par raport au parent qui a une position
    var origine = [
        parseInt(element.style.left),
        parseInt(element.style.top)
    ];
    if(isNaN(origine[0]))
    {
        origine = [
            parseInt(getStyle(element, 'left')),
            parseInt(getStyle(element, 'top'))
        ];
    }

    // Preparation des variable

    var Xnew = origine[0];
    var Ynew = origine[1];

    if(x > Xnew)
    {
        var Xdif = x-Xnew;
    }
    else
    {
        var Xdif = (Xnew-x)*-1;        
    }

    if(y > Ynew)
    {
        var Ydif = y-Ynew;   
    }
    else
    {
        var Ydif = (Ynew-y)*-1;        
    }

    var timer = setInterval(function () 
    {

        element.style.left = Xnew;
        element.style.top = Ynew;

        if(Xnew == x && Ynew == y)
        {
            clearInterval(timer);
            if(typeof(callback) == "function") { callback(); }
        }
    
        i++;

        Xnew = Math[effet](i,origine[0],Xdif,nb_etape);
        Ynew = Math[effet](i,origine[1],Ydif,nb_etape);

        if(i == nb_etape)
        {
            Xnew = x;
            Ynew = y;
        }

    }, temps_une_etape);
};

Array.prototype.moveTo = function (x, y, time, effet, callback) 
{
    this.forEach(function(element, index, array)
    {
        element.moveTo(x, y, time, effet, callback);
    });    
}


Element.prototype.fadeIn = function (time, effet, callback)
{
    time = time || 400;
    effet = effet || 'easeInQuad';

    var element = this;
    var nb_etape = (time/1000)*50;
    var temps_une_etape = time/nb_etape;
    var i = 0;
    var op = 0.01;  // initial opacity

    var timer = setInterval(function () 
    {
        if (op >= 0.9999)
        {
            clearInterval(timer);
            element.style.opacity = 1;
            element.style.filter = 'alpha(opacity=' + 1 * 100 + ")";
            if(typeof(callback) == "function") { callback(); }
            return false;
        }

        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op = Math[effet](i,0.01,0.99,nb_etape);
        i++;
    }, temps_une_etape);
}

Array.prototype.fadeIn=function(time, effet, callback)
{
    this.forEach(function(element, index, array)
    {
        element.fadeIn(time, effet, function(){if(typeof(callback) == "function") {callback()}});
    });    
}

Element.prototype.fadeOut = function (time, effet, callback)
{
    time = time || 400;
    effet = effet || 'easeInQuad';
    var element = this;
    var nb_etape = (time/1000)*50;
    var temps_une_etape = time/nb_etape;
    var i = nb_etape;
    var op = 1;  // initial opacity
    var timer = setInterval(function () 
    {
        if (op <= 0.01)
        {
            clearInterval(timer);
            element.style.opacity = 0;
            element.style.filter = 'alpha(opacity=' + 0 * 100 + ")";
            if(typeof(callback) == "function") { callback(); }
            return false;
        }

        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op = Math[effet](i,0.01,0.99,nb_etape);
        i--;
    }, temps_une_etape);
}

Array.prototype.fadeOut = function(time, effet, callback)
{
    this.forEach(function(element, index, array)
    {
        element.fadeOut(time, effet, function(){if(typeof(callback) == "function") {callback()}});
    });    
}

Element.prototype.moveX = function (distance, time, effet, callback) 
{
    this.moveTo((parseInt(getStyle(this, 'left'))+distance), parseInt(getStyle(this, 'top')), time, effet, callback);
}

Array.prototype.moveX = function (distance, time, effet, callback) 
{
    this.forEach(function(element, index, array)
    {
        element.moveToRight(distance, time, effet, callback);
    });    
}

Element.prototype.moveY = function (distance, time, effet, callback) 
{
    this.moveTo(parseInt(getStyle(this, 'left')), (parseInt(getStyle(this, 'top'))+distance), time, effet, callback);
}

Array.prototype.moveY = function (distance, time, effet, callback) 
{
    this.forEach(function(element, index, array)
    {
        element.moveToRight(distance, time, effet, callback);
    });    
}







