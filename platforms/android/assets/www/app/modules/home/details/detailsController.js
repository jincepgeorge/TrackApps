angular.module('nakApp')
.controller('detailsController', ['$scope', "Service", "DataService", "ENV", "$anchorScroll",function($scope, Service, DataService, ENV, $anchorScroll){

	$scope.app = {};
    $scope.init = function(){
    	
      $anchorScroll();
			$scope.app = Service.current.selectedApp;
    };

    $scope.install = function(app, $event){
	    if ($event.stopPropagation) $event.stopPropagation();
	    if ($event.preventDefault) $event.preventDefault();
	    $event.cancelBubble = true;
	    $event.returnValue = false;
	    cordova.plugins.market.open("id" + app, { success: function() {}, failure: function() {}});
    };

    $scope.init();
}]);
