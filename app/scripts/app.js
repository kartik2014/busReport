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
    }).config(['$provide', function($provide) {
      $provide.decorator('uibAccordionGroupDirective', ['$delegate', function ($delegate) {
        var directive = $delegate[0];
        directive.templateUrl = "views/uib-accordion-group-template.html";
        return $delegate;
      }]);
    }])
