angular.module('nakApp.filters', []);
angular.module('nakApp.services', []);
angular.module('nakApp.directives', []);

angular.module('nakApp', [
    'ui.router',
    'config',
    'nakApp.filters',
    'nakApp.services',
    'nakApp.directives',
    'ngTouch',
    'ngAnimate',
    'angular-carousel'
    ])

.run(['DataService','$rootScope','$filter', function(DataService,$rootScope,$filter) {
    if(localStorage.clientList){
          $rootScope.clientList=JSON.parse(localStorage.clientList);
        $rootScope.selectedClient=$filter('filter')($rootScope.clientList, { status: true })[0].appStoreTag;
              
       
    }
    else{
     DataService.getClientListData().then(function(response){
        localStorage.clientList = JSON.stringify(response);
        $rootScope.clientList=response;
        $rootScope.selectedClient=$filter('filter')($rootScope.clientList, { status: true })[0].appStoreTag;
              
        
    })
     
 }

    FastClick.attach(document.body);
   
}]);

