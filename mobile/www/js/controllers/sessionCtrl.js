angular.module('brasilia.controllers')

.controller('SessionCtrl', function($scope, $auth, $ionicPopup, $rootScope, SubdomainResource) {
  var user = {
    email: $scope.email,
    password: $scope.password
  };

  $scope.data = {
    availableDomains: [],
    selectedDomain: {id: '1'}
  };

  $scope.subdomains = {};

  SubdomainResource.query().$promise
    .then(function(response) {
      $scope.data.availableDomains = response;
      console.info($scope.subdomains);
    })
    .catch(function(response) {
      console.error(response);
    });


});
