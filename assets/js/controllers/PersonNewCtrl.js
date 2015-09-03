AddressApp.controller('PersonNewCtrl', ['$scope', 'Person', '$location', function($scope, Person, $location){

$scope.newPerson={
  firstName:'',
  lastName: '',
  notes: ''
};

$scope.createPerson = function(){
  var newPerson = new Person($scope.newPerson);

  newPerson.$save().then(function(personResult){
    console.log('person',personResult);
    $location.path('/')
  }).catch(function(err){
    console.log('err', err);
  });
}



}])
