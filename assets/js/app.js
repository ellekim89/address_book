var AddressApp = angular.module('AddressApp', ['ui.bootstrap', 'ngRoute', 'sailsResource', 'ngMessages']);

AddressApp.run(function(){
  console.log('app is up and running')
});

AddressApp.config(['$routeProvider', '$locationProvider', 'sailsResourceProvider', function($routeProvider,$locationProvider, sailsResourceProvider){
  sailsResourceProvider.configuration = {
    prefix: '/api',
    verbose: true
  };

  $locationProvider.html5Mode(true);

  $routeProvider
  .when('/', {
    templateUrl: '/views/home.html',
    controller: 'HomeCtrl'
  })
  .when('/person/new',{
    templateUrl: 'views/person/new.html',
    controller: 'PersonNewCtrl'
  })
  .when('/person/:id',{
    templateUrl: 'views/person/show.html',
    controller: 'PersonShowCtrl'
  })
  .otherwise({
    templateUrl:'/views/404.html'
  })
}]);