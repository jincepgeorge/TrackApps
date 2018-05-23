angular.module('nakApp')
.controller('mainHomeController', ["$scope", "$state", "Service", "ENV", "$rootScope", function($scope, $state, Service, ENV, $rootScope){
	
    $scope.title = ENV.appTitle;
                               
    $scope.init = function(){
       
        $state.go("home.applist");
        $rootScope.appCount = "00";
         $rootScope.brand=true;
    };
     $scope.menuClick = function(clientname,event){
          $rootScope.selectedClient = clientname;
           $('.tabopen').removeClass('tabopen');
            Service.showLoader(true);
       $state.reload();
     
        $rootScope.appCount = "00";
          $(event.currentTarget).addClass('tabopen');
       
    };
	$scope.getDetails = function(data){
		Service.current.selectedApp = data;
        $rootScope.brand=false;
		$state.go("home.details");
	};

	$scope.install = function(app, $event){
		if ($event.stopPropagation) $event.stopPropagation();
		if ($event.preventDefault) $event.preventDefault();
		$event.cancelBubble = true;
		$event.returnValue = false;
		cordova.plugins.market.open("id" + app, { success: function() {}, failure: function() {}});
	};
    
    $scope.getDate = function(dt) {
        var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        var date = new Date(dt);
        return (date.getDate() + "-" + month[date.getMonth()] +"-" + date.getFullYear());
    };
                               
                               
    $scope.emailList = function(appData, client, count){
        var data = "";
        data = data + "<h2>" + client + " Application List</h2></h4>Total Application Count: " + count + "</h4><br/><br/><br/>";
        data = data + "<table style='border-collapse:collapse; border: 1px solid grey;'><tr style='background-color: black; color: white; font-weight:600; text-align:center'><td>Sl No</td><td>App Name</td><td>Version</td><td>Release Date</td><td>Seller Name</></td><td>Description</></td></tr>";
        for(i=0;i<appData.length;i++){
            var app = appData[i];
            var color="#eee;"
            if(i%2==0){
                color="#fff;"
            }
            data = data + "<tr><td style='background-color: "+color+";padding: 5px;text-align: left;'>"+(i+1)+"</td>";
            data = data + "<td style='background-color: "+color+";padding: 5px;text-align: left;'>"+app.trackName+"</td>";
            data = data + "<td style='background-color: "+color+";padding: 5px;text-align: left;'>"+app.version+"</td>";
            data = data + "<td style='background-color: "+color+";padding: 5px;text-align: left;'>"+$scope.getDate(app.releaseDate)+"</td>";
            data = data + "<td style='background-color: "+color+";padding: 5px;text-align: left;'>"+app.sellerName+"</td>";
            data = data + "<td style='background-color: "+color+";padding: 5px;text-align: left;'>"+app.description+"</td></tr>";
        }
        data= data + "</table>";
        cordova.plugins.email.open({
            to:      '',
            subject: 'Big 4 Apps:: '+ client +' App List',
            body:    data,
            isHtml:  true
        });
    }
            
    $scope.init();
}]);

$('.tab').click(function () {
    $('.tabopen').removeClass('tabopen');
    $(this).addClass('tabopen');
});
