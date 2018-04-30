'use strict';

/**
 * @ngdoc overview
 * @name busReportApp
 * @description
 * # busReportApp
 *
 * Main module of the application.
 */
angular
  .module('busReportApp', [
    'ui.bootstrap',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
