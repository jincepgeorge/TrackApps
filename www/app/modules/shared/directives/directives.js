angular.module('nakApp.directives')
.directive('back', ['$window', '$state', 'Service', function($window, $state, Service) {
        return {
            restrict: 'A',
            link: function (scope, elem, attrs) {
                elem.bind('click', function () {
                    $window.history.back();
                });
            }
        };
    }])
    .directive("loader", function() {
        return{
            restrict: "E",
            template: '<div class="loading"><img src="images/loader.gif"></span></div>',
            link: function(scope, elem, attrs){

            }
        };
    })
    .directive("header", ['$rootScope','$window',function($rootScope,$window) {
        return{
            restrict: "E",
            template: '<div class="header">'+
            '<span ng-class="{logo:brand,back:!brand}" class="left-icon"></span>'+
            '<span class="title header-content">{{title}}</span>'+
            '</div>',
            link: function(scope, elem, attrs){
                elem.bind('click', function () {
                    if(!$rootScope.brand){
                    $window.history.back();
                    $rootScope.brand=true;
                }
                });

            }
        };
    }]);
