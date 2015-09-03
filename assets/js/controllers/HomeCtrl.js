AddressApp.controller('HomeCtrl', ['$scope', 'Person', '$modal', function($scope, Person, $modal){
  $scope.person = [];

  $scope.orderField = 'lastName'

  // Person.get({ id: '55e616f0b712c4ca1148f8f1' }).then(function(person){
  //   $scope.person = person
  // })

  Person.query().then(function(person){
    console.log('person', person)
    $scope.person = person
  })

  $scope.deletePerson = function(person){
    person.$delete();
  }

  $scope.editPerson = function(person){
    $modal.open({
      templateUrl:'/views/person/editModal.html',
      controller: 'PersonEditModalCtrl',
      resolve:{
        editPerson: function(){
          return person;
        }
      }
    });
  }

}])