(function() {
    'use strict';

    angular
        .module('app')
        .controller('transCtrl', transCtrl);

    transCtrl.$inject = ['translateFactory'];

    /* @ngInject */

    function transCtrl(translateFactory) {
        var vm = this;
        vm.title = 'transCtrl';
        vm.trans = '';


       vm.translator = function() {
            translateFactory.translate(vm.trans).then(
                function(response) {
                    vm.tranny = response.data.data.translations[0];
                    console.log(vm.tranny);
                },
                function(error) {
                    $log.error(error);
                });
        }











    }
})();
