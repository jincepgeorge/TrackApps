angular.module('nakApp')
.controller('appListController', ["$scope", "Service", "DataService", "ENV","$rootScope","$filter","$state",function($scope, Service, DataService, ENV,$rootScope,$filter,$state){

	$scope.appData = [];
	$scope.appCount = 0;

    $scope.init = function(){

      if(!localStorage.preference){
       $('#myModal').modal('show');
       localStorage.preference=true;

     }
       
        var localClientListData=angular.copy($rootScope.clientList);
        $scope.localClientList=localClientListData;
        DataService.getAppData($rootScope.selectedClient).then(function(data){
            console.log(data);
            var list = [];
            for (var i=0; i< data.results.length; i++ ) {
                var app =data.results[i];
                if (app.trackName.toLowerCase().indexOf($rootScope.selectedClient.toLowerCase()) != -1 ||app.sellerName.toLowerCase().indexOf($rootScope.selectedClient.toLowerCase()) != -1 ) {
                    list.push(app);
                }
                  //list.push(app);
            }
            $scope.appCount = list.length;
            $scope.appData = list;
            Service.showLoader(false);

        });
    };
    $scope.clientListChecked= function (index,status) {

            var filtered = $filter('filter')($scope.localClientList, { status: true });
            if(filtered.length<=4)
            $scope.localClientList[index].status=status; 
        else{
           Service.showAlert('Maximum 4 developer allowed.');
          $scope.localClientList[index].status=!status; 
      }

        };
         $scope.savePreference=function () {
               var filtered = $filter('filter')($scope.localClientList, { status: true });
               if(filtered.length>0){
            $rootScope.clientList=  angular.copy($scope.localClientList);
             localStorage.clientList = JSON.stringify($rootScope.clientList);
            var isSelectedClientExists = $filter('filter')($scope.localClientList, function(value){
        return value.appStoreTag === $rootScope.selectedClient && value.status=== true;
})[0];
             //var isSelectedClientExists = $filter('filter')($scope.localClientList, { appStoreTag: $rootScope.selectedClient,status:true });
          
            if(!isSelectedClientExists){
               $rootScope.selectedClient=$filter('filter')($rootScope.clientList, { status: true })[0].appStoreTag;
                //$rootScope.selectedClient= $rootScope.clientList[0].appStoreTag;
                $state.reload();
            }
              $('#myModal').modal('hide');
        }
        else{
             Service.showAlert('Select atleat one developer.');
        }
         };
         $scope.addPreference=function () {
          $scope.localClientList.push({'clientName':$scope.developerName,'status':false,'appStoreTag':$scope.developerName});
          $scope.developerName='';

         };


    $scope.init();
}]);
