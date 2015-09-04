AddressApp.controller('PersonShowCtrl', ['$scope', 'Person', 'Contact', 'PersonContact','$routeParams', '$location','$route', '$modal', function($scope, Person, Contact, PersonContact, $routeParams, $location, $route, $modal){
  console.log('PersonShowCtrl loaded')
  $scope.person={};
  $scope.contact=[];


  Person.get({id: $routeParams.id}).then(function(person){
    console.log('person', person)
    $scope.person = person
  })

  Contact.query().then(function(contact){
    console.log('contact', contact)
    $scope.contact = contact
  })

  $scope.deleteContact = function(contact){
    var contactWhoseEndIsNigh = new Contact(contact);
    console.log('contact',contact);
    contactWhoseEndIsNigh.$delete().then(function(contact){
      console.log('deleting', $routeParams.id);
      $location.path('/person/' + $routeParams.id);
      $route.reload();
    }).catch(function(err){
      console.log('err', err);
    });
  };


    $scope.editContact = function(contact){
    $modal.open({
      templateUrl:'/views/person/editContactModal.html',
      controller: 'ContactEditModalCtrl',
      resolve:{
        editContact: function(){
          return contact;
        }
      }
    });
  }
}]);