AddressApp.controller('PersonEditModalCtrl', ['$scope','$modalInstance', 'editPerson', function($scope, $modalInstance, editPerson){
  $scope.updatePerson = {
    firstName: editPerson.firstName,
    lastName: editPerson.lastName,
    notes: editPerson.notes
  };

  $scope.updatePerson = function(){
    editPerson.firstName = $scope.updatePerson.firstName;
    editPerson.lastName = $scope.updatePerson.lastName;
    editPerson.notes = $scope.updatePerson.notes;
    editPerson.$save().then(function(){
      $modalInstance.close();
    });
  }

  $scope.cancel = function(){
    $modalInstance.dismiss();
  }

console.log('person edit modal', editPerson)

}])