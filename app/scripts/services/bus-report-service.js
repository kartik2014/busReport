(function() {
    'use strict';
    angular.module('busReportApp').service('busReportService', ['busReportResource', busReportService]);

    function busReportService(busReportResource) {

        var service = {
            retrievebusReport: retrievebusReport
        };
        return service;

        function retrievebusReport() {
            var result = busReportResource.query();
            return result.$promise;
        }
    }
})();

