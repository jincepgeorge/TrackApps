angular.module('nakApp').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    'use strict';

    $stateProvider
    .state('home.details', {
        url: '/details',
        templateUrl: './app/modules/home/details/details.html',
        controller: 'detailsController'
    })
      .state('home', {
        url: '/home',
        templateUrl: './app/modules/home/main.home.view.html',
        controller: 'mainHomeController'
    })
      .state('home.applist', {
        url: '/applist',
        templateUrl: './app/modules/home/applist/applist.view.html',
        controller: 'appListController'
    });

    $urlRouterProvider.otherwise('/home');

}]);
