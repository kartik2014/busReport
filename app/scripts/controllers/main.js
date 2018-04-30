(function () {
    'use strict';

    angular.module('busReportApp')
        .controller('MainCtrl', ['busReportService', MainCtrl]);

    function MainCtrl(busReportService) {

        init();

        function init() {
            busReportService.retrievebusReport().then(function(data){
                $scope.busReportData = data;
            } , function(errors) {
                console.log("Fetch failed");
            });
        }
    }
})();