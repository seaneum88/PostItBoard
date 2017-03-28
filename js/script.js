/**
 * Created by tkdrb on 2017-03-27.
 */
    // create the module and name it scotchApp
var scotchApp = angular.module('scotchApp', ['ngRoute']);

// configure our routes
scotchApp.config(function($routeProvider) {
    $routeProvider
    // route for the home page
        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'mainController'
        })
        .when('/registration', {
            templateUrl : 'pages/registration.html',
            controller  : 'registrationController'
        })
        .when('/login', {
            templateUrl : 'pages/login.html',
            controller  : 'loginController'
        });
});
// create the controller and inject Angular's $scope
scotchApp.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Home';
});
scotchApp.controller('registrationController', function($scope) {
    $scope.message = 'Join us! This is a demo.';
});
scotchApp.controller('loginController', function($scope) {
    $scope.message = 'Log In!';
});
