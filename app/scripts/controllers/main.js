(function () {
    'use strict';

    angular.module('busReportApp')
        .controller('MainCtrl', ['$scope','busReportResource', MainCtrl]);

    function MainCtrl($scope, busReportResource) {

        init();

        function init() {
            busReportResource.get({}, function(response) {
                $scope.busReportData=response.data;
            });
        }
    }
})();