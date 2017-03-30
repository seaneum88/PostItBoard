<!DOCTYPE html>
<html ng-app="scotchApp">
<head>
    <meta charset="UTF-8">
    <title>PostitBoard</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css" />
    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/font-awesome/4.0.0/css/font-awesome.css" />

    <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.2.25/angular.min.js"></script>
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.25/angular-route.js"></script>
    <script src="js/script.js"></script>
    <?php

    ?>
</head>
<body ng-controller="mainController">

<nav class="navbar navbar-default">
    <div class="container">
        <div class="navbar-header">
            <a class="navbar-brand" href="#">PostitBoard - Make your own notes!</a>
        </div>

        <ul class="nav navbar-nav navbar-right">
            <li><a href="#"><i class="fa fa-home"></i> Home</a></li>
            <li><a href="#registration"><i class="fa fa-shield"></i> Registration</a></li>
            <li><a href="#login"><i class="fa fa-comment"></i> Log in</a></li>
        </ul>
    </div>
</nav>

<div id="main">

    <!-- angular templating -->
    <!-- this is where content will be injected -->
    <div ng-view></div>
</div>
<div>
    <?php
    date_default_timezone_set('America/Vancouver');
    echo "Current time is " . date("g:i:a");
    ?>
</div>
<footer class="text-center">
    <p>Copyright to John & Sean</p>
</footer>

<script src="//code.jquery.com/jquery-1.11.3.min.js" type="text/javascript"></script>
<script src="//code.jquery.com/jquery-migrate-1.2.1.min.js" type="text/javascript"></script>
<script src="js/note.js"></script>
</body>
</html>
