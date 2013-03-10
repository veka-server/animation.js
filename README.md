animation.js
============

Une librairie javascript ultra-legere pour utiliser les animations ( slide, fade, carroussel, ...  ).

Cette librairie ne necessite pas JQuery !

### Examples d'utilisation

Afficher un carroussel avec 3000ms entre les images, les transition en fade et un effet de easeOutQuad.

```php

    <div class='carroussel'>
        <img src="http://lorempixel.com/400/200/sports/1" />
        <img src="http://lorempixel.com/400/200/sports/2" />
        <img src="http://lorempixel.com/400/200/sports/3" />
        <img src="http://lorempixel.com/400/200/sports/4" />
        <img src="http://lorempixel.com/400/200/sports/5" />
    </div>
            
    <script type="text/javascript" src='Javascript/animation.js'></script>
    <script type="text/javascript">
        var List = argsToArray(document.getElementsByClassName("carroussel"));
        List.carroussel('3000', 'fade', 'easeOutQuad');
    </script>
```

Déplacer un div (positioné en absolute) de 500px sur la droite avec un effet de easeOutBounce et un temps de deplacement de 2s.

```php

    <div id='monBloc' style='position:absolute; left:0px; top:0px;'>
        <img src="http://lorempixel.com/400/200/sports/1" />
    </div>
            
    <script type="text/javascript" src='Javascript/animation.js'></script>
    <script type="text/javascript">
    	document.getElementById('monBloc').slideRight('easeOutBounce', 500, 2);
    </script>
```

Faire disparaitre un div avec un effet de easeOutExpo et un temps de disparition de 2s.

```php

    <div id='monBloc'>
        <img src="http://lorempixel.com/400/200/sports/1" />
    </div>
            
    <script type="text/javascript" src='Javascript/animation.js'></script>
    <script type="text/javascript">
    	document.getElementById('monBloc').fadeOut(2,'easeOutExpo');
    </script>
```

