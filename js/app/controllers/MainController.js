function MainController($scope) {
  $scope.name = "hi";
  $scope.email = "hi@aol.com";
  $scope.phone = "9993336627";

}

angular
  .module('app')
  .controller('MainController', MainController);
