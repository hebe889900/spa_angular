(function (){
'use strict';

angular.module('DIApp',[])

.controller('DIController', function ($scope, $filter) {


  $scope.upper = function() {
  	var upCase = $filter('uppercase');
  	$scope.name = upCase($scope.name);
  }

  $scope.checkAmount = function(){
  	console.log($scope.name.split(" ").length);
  	if($scope.name.split(" ").length <= 3){
  		$scope.stateOfBeing = "Enjoy!";
  	}
  	if($scope.name.split(" ").length > 3){
  		$scope.stateOfBeing = "Too Much!";
  	}
  	if($scope.name == ""){
  		$scope.stateOfBeing = "Please enter the data first!";
  	}

  }
  $scope.sayHello = function() {
    return "Hello Coursera!";
  };
});
})();
