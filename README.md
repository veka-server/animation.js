animation.js
============

Une librairie javascript ultra-legere pour utiliser les animations ( slide, fade, carroussel, ...  ).

Cette librairie ne necessite pas JQuery !

## Liste des fonctions de slide

- <b>slideRight</b>(type, distance, time, callback)
- <b>slideLeft</b>(type, distance, time, callback)
- <b>slideTop</b>(type, distance, time, callback)
- <b>slideBottom</b>(type, distance, time, callback)

<b>type</b> = effet de transition, par defaut 'easeOutQuad'. <br>
<b>distance</b> = distance a parcourir en pixel, par defaut le bloc va a l'extremité du bloc parent puis disparait.<br>
<b>time</b> = temps que va durée l'animation en seconde, par defaut 1s.<br>
<b>callback</b> = function a executer apres l'animation.<br>

## Liste des fonctions de fade

- <b>fadeIn</b>(time, effet, callback)
- <b>fadeOut</b>(time, effet, callback)

<b>time</b> = temps que va durée l'animation en seconde, par defaut 1s.<br>
<b>effet</b> = effet de transition, par defaut 'easeOutQuad'. <br>
<b>callback</b> = function a executer apres l'animation.<br>

## La fonction carroussel

- <b>carroussel</b>(time, type, effet)

<b>time</b> = temps que va durée l'animation en seconde, par defaut 1s.<br>
<b>type</b> = type de transition, par defaut 'fade' vous pouvez utiliser (slideRight, slideLeft, ...). <br>
<b>effet</b> = effet de transition, par defaut 'easeOutBounce'. <br>

## Examples d'utilisation

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

