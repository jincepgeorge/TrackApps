angular.module('nakApp')
.service('DataService', function($q, $timeout, $rootScope, APIServiceFactory, ENV, Service){
    var deferred = $q.defer();

    //Get RSS Feed Result  from API
    this.getAppData = function(key){
      var url = ENV.serviceURL.replace("<key>", key);
      return this.getFactoryResult(url);
    };

      //Get RSS Feed Result  from API
    this.getClientListData = function(){
      var url = ENV.clientListJSON;
      return this.getFactoryResult(url);
    };
    //Calling Factory for make API Call.
    this.getFactoryResult= function(url){
        var deferred = $q.defer();
     
            APIServiceFactory.getAPIResult(url).success(function(data){
                deferred.resolve(data);
            }).error(function(err){
                Service.showLoader(false);
                navigator.notification.confirm("No network available. Check your internet connection.", null, "EY Apps", "Cancel");
                deferred.reject(err);
            });
       
        return deferred.promise;
    };


});
