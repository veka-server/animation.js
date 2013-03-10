<html>
<head>
	<title>JS</title>
    <style type="text/css">

    *
    {
        margin: 0px;
        padding:0px;
    }

    .carroussel
    {
        width:400px;
        height:200px;
        position: relative;
        overflow: hidden;
        margin:20px auto;
    }
    </style>
</head>
<body>
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
</body>
</html>