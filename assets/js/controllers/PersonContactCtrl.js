AddressApp.controller('PersonContactCtrl', ['$scope', 'Contact', 'Person', 'PersonContact', '$routeParams', '$location', function($scope, Contact, Person, PersonContact, $routeParams, $location){
  $scope.person={};

$scope.contact={
  name:'',
  email: ''};


 Person.get({id: $routeParams.id}).then(function(person){
    console.log(person);
    $scope.person = person;
  });

// $scope.addContact = function(){
//     var newContact = new PersonContact($scope.newContact)
//     //we could change newComment.comment ..etc here
//     newContact.$save({
//       person_id: $scope.person.id,
//     }).then(function(contact){
//       console.log('saved',contact);
//       $location.path('/person/:id');
//     });
//   }

  $scope.addContact = function(){
    var newContact = new PersonContact($scope.contact)
    console.log(newContact);
    //we could change newComment.comment ..etc here
    newContact.$save({
      person_id: $scope.person.id
    }).then(function(contact){
      console.log('saved',contact)
      $scope.contact.name = '';
      $scope.contact.email = '';
      $location.path('/person/' + $routeParams.id);
    }).catch(function(err){
    console.log('err', err);
  })
}


}]);