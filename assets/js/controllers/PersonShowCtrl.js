AddressApp.controller('PersonShowCtrl', ['$scope', 'Person', '$routeParams', function($scope, Person, $routeParams){
  console.log('PersonShowCtrl loaded')
  $scope.person={};

  Person.get({id: $routeParams.id}).then(function(person){
    console.log('person', person)
    $scope.person = person
  })
}]);