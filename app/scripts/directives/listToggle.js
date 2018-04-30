(function () {
    'use strict';
    angular.module('busReportApp').directive('listToggle', [listToggle]);

    function listToggle() {
        return {
            restrict: 'EA',
            transclude: true,
            template: '<div ng-transclude></div>',
            link: function (scope, element, attr, ngModelCtrl) {
                element.on('click', function () {
                    scope.isOpen = !scope.isOpen;
                    scope.$digest();
                });
                scope.$watch('isOpen', function(newVal,oldVal){
                    if(newVal !== oldVal){
                        $('.dropdownDiv', element).slideToggle('fast');
                    }
                });
            }            
        }
    }
})();