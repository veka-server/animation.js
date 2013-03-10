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


function argsToArray(args) 
{
  var r = []; for (var i = 0; i < args.length; i++)
    r.push(args[i]);
  return r;
}



Element.prototype.slide = function (distance, direction, type, time, callback)
{
    switch(direction)
    {
        case 'top':
        case 'bottom':
                var styleDirection = 'top';
                var origine = this.offsetTop;
                break;
        case 'left':
        case 'right':
                var styleDirection = 'left';
                var origine = this.offsetLeft;
                break;
    }

    switch(direction)
    {
        case 'top' :
        case 'left' :
                var destination = origine-distance;
                break;
        case 'bottom' :
        case 'right' :
                var destination = origine+distance;
                break;
    }


    var element = this;
    var serie = new Array();
    var nb_etape = time*25;
    var temps_une_etape = (time*1000)/nb_etape;
    var i = 0;
    var new_position = origine;
    var end = 0;

    var timer = setInterval(function () 
    {
        switch(direction)
        {
            case 'top' :
            case 'left' :
                    if (new_position <= destination )
                    {
                        end = 1;
                    }
                    break;
            case 'bottom' :
            case 'right' :
                    if (new_position >= destination )
                    {
                        end = 1;
                    }
                    break;
        }

        if (end == 1 )
        {
            clearInterval(timer);
            if(typeof(callback) == "function") { callback(serie); }
        }

        element.style[styleDirection] = new_position;

        var time = (i*temps_une_etape);
        serie[time] = new_position;
        var difference = (destination-origine);
        new_position = Math[type](i,origine,difference,nb_etape);

        i++;
    }, temps_une_etape);

}

Element.prototype.slideTop = function (type, distance, time, callback)
{
    distance = distance || this.offsetTop+this.offsetHeight;
    type = type || 'easeInQuad'; 
    time = time || 1; 

    // APPEL DU SLIDE
    this.slide(
        distance, // ditance a parcourir (en pixel)
        'top', // direction
        type, // type d'animation
        time, // temps de l'animation en seconde (par defaut : 1 seconde)
        function(serie){if(typeof(callback) == "function") {callback(serie)}}
        );
}

Element.prototype.slideBottom = function (type, distance, time, callback)
{
    if(!distance){ var out = 1; }
    distance = distance || document.body.offsetHeight-this.offsetHeight-this.offsetTop;
    type = type || 'easeInQuad'; 
    time = time || 1; 

    var element = this;

    // APPEL DU SLIDE
    this.slide(
        distance, // ditance a parcourir (en pixel)
        'bottom', // direction
        type, // type d'animation
        time, // temps de l'animation en seconde (par defaut : 1 seconde)
        function(serie){ if(out==1){ element.style.display = 'none';} if(typeof(callback) == "function") {callback(serie)}}
        );
}

Element.prototype.slideLeft = function (type, distance, time, callback)
{
    distance = distance || this.offsetLeft+this.offsetWidth;
    type = type || 'easeInQuad'; 
    time = time || 1; 

    // APPEL DU SLIDE
    this.slide(
        distance, // ditance a parcourir (en pixel)
        'left', // direction
        type, // type d'animation
        time, // temps de l'animation en seconde (par defaut : 1 seconde)
        function(serie){if(typeof(callback) == "function") {callback(serie)}}
        );
}

Element.prototype.slideRight = function (type, distance, time, callback)
{
    if(!distance){ var out = 1; }
    distance = distance || parent.offsetWidth-this.offsetLeft-this.offsetWidth;
    type = type || 'easeInQuad'; 
    time = time || 1; 

    var element = this;

    // APPEL DU SLIDE
    this.slide(
        distance, // ditance a parcourir (en pixel)
        'right', // direction
        type, // type d'animation
        time, // temps de l'animation en seconde (par defaut : 1 seconde)
        function(serie){if(out==1){ element.style.display = 'none';} if(typeof(callback) == "function") {callback(serie)}}
        );
}

Array.prototype.slideRight=function(type, distance, time, callback)
{
    this.forEach(function(element, index, array)
    {
        element.slideRight(type, distance, time, function(serie){if(typeof(callback) == "function") {callback(serie)}});
    });    
}

Array.prototype.slideLeft=function(type, distance, time, callback)
{
    this.forEach(function(element, index, array)
    {
        element.slideLeft(type, distance, time, function(serie){if(typeof(callback) == "function") {callback(serie)}});
    });    
}

Array.prototype.slideTop=function(type, distance, time, callback)
{
    this.forEach(function(element, index, array)
    {
        element.slideTop(type, distance, time, function(serie){if(typeof(callback) == "function") {callback(serie)}});
    });    
}

Array.prototype.slideBottom=function(type, distance, time, callback)
{
    this.forEach(function(element, index, array)
    {
        element.slideBottom(type, distance, time, function(serie){if(typeof(callback) == "function") {callback(serie)}});
    });    
}


Element.prototype.fadeIn = function (time, effet, callback)
{
    time = time || 1;
    effet = effet || 'easeInQuad';
    var element = this;
    var nb_etape = time*25;
    var temps_une_etape = (time*1000)/nb_etape;
    var i = 0;
    var op = 0.1;  // initial opacity
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
        op = Math[effet](i,0.1,0.9,nb_etape);
        i++;
    }, temps_une_etape);
}

Array.prototype.fadeIn=function(time, callback)
{
    this.forEach(function(element, index, array)
    {
        element.fadeIn(time, effet, function(serie){if(typeof(callback) == "function") {callback(serie)}});
    });    
}


Element.prototype.fadeOut = function (time, effet, callback)
{
    time = time || 1;
    effet = effet || 'easeInQuad';
    var element = this;
    var nb_etape = time*25;
    var temps_une_etape = (time*1000)/nb_etape;
    var i = nb_etape;
    var op = 1;  // initial opacity
    var timer = setInterval(function () 
    {
        if (op <= 0.1)
        {
            clearInterval(timer);
            element.style.opacity = 0;
            element.style.filter = 'alpha(opacity=' + 0 * 100 + ")";
            if(typeof(callback) == "function") { callback(); }
            return false;
        }

        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op = Math[effet](i,0.1,0.9,nb_etape);
        i--;
    }, temps_une_etape);
}

Array.prototype.fadeOut = function(time, effet, callback)
{
    this.forEach(function(element, index, array)
    {
        element.fadeOut(time, effet, function(serie){if(typeof(callback) == "function") {callback(serie)}});
    });    
}


Element.prototype.carroussel = function (time, type, effet)
{
    time = time || 1000;
    type = type || 'fade';
    effet = effet || 'easeOutBounce';
    var tableau_img = new Array();
    var i = 0;
    argsToArray(this.getElementsByTagName("img")).forEach(function(element, index, array)
    {
        element.style.opacity = 0;
        element.style.position = 'absolute'; 
        element.style.left = 0; 
        element.style.top = 0; 
        tableau_img[i] = element;
        i++;
    });

    var nb_img = tableau_img.length;
    tableau_img[0].style.opacity = 1;
    i = 1;
    var negatif = ''; 
    var distance = '';
    var timer = setInterval(function () 
    {
        switch(type)
        {
            case 'fade' :
                if(i >= nb_img)
                {
                    i = 0;
                    tableau_img[i].fadeIn(1,effet);
                    tableau_img[nb_img-1].fadeOut(1,effet);
                }
                else
                {
                    tableau_img[i].fadeIn(1,effet);
                    tableau_img[i-1].fadeOut(1,effet);
                }
                break;

            case 'slideRight' :
            case 'slideBottom' :
                negatif = '-'; 
            case 'slideLeft' :
            case 'slideTop' :
                if(i >= nb_img)
                {
                    i = 0;
                    var elem = tableau_img[nb_img-1];
                }
                else
                {
                    var elem = tableau_img[i-1];
                }
                switch(type)
                {
                    case 'slideBottom' :
                    case 'slideTop' :
                        distance = tableau_img[i].offsetHeight;
                        tableau_img[i].style.top = negatif+distance;
                        break;
                    case 'slideRight' :
                    case 'slideLeft' :
                        distance = tableau_img[i].offsetWidth;
                        tableau_img[i].style.left = negatif+distance;
                        break;
                }

                tableau_img[i].style.opacity = 1;
                tableau_img[i][type](effet,distance);

                elem[type](effet,distance,1,function()
                {
                    elem.style.opacity = 0;
                });
                break;                       
        }
        i++;
    }, time);
}

Array.prototype.carroussel = function(time, type, effet)
{
    this.forEach(function(element, index, array)
    {
        element.carroussel(time, type, effet);
    });    
}

