(function () {
    'user strict';

    angular.module('busReportApp').factory('busReportResource', ['$resource', busReportResource]);

    function busReportResource($resource) {
        return $resource('scripts/resources/bus-services-data.json')
    }
})();