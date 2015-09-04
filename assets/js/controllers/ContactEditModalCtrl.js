AddressApp.controller('ContactEditModalCtrl', ['$scope','$modalInstance', 'editContact', function($scope, $modalInstance, editContact){
  $scope.updateContact = {
    name: editContact.name,
    email: editContact.email
  };

  $scope.updateContact = function(){
    editContact.name = $scope.updateContact.name;
    editContact.email = $scope.updateContact.email;
    editContact.$save().then(function(){
      $modalInstance.close();
    });
  }

  $scope.cancel = function(){
    $modalInstance.dismiss();
  }

console.log('contact edit modal', editContact)

}])