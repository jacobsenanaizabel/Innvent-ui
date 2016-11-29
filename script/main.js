var app = angular.module('tutorialWebApp', [
  'ngRoute'
]);


app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"}) 
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);


app.controller('BlogCtrl', function (/* $scope, $location, $http */) {
  console.log("Controle teste");
});
