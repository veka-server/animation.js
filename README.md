animation.js
============

Une librairie javascript ultra-legere pour utiliser les animation ( slide, fade, carroussel, ...  ).

[Voir le site de présentation](http://veka-server.com)

## Example d'utilisation

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