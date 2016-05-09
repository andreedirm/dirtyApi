(function() {
    'use strict';

    angular
        .module('app')
        .factory('speechService', speechService);

    speechService.$inject = ['$http'];

    /* @ngInject */
    function speechService($http) {
        var service = {
            talk: talk
        };
        return service;

        ////////////////

        function talk(sentence) {
        	return $http.get('https://montanaflynn-text-to-speech.p.mashape.com/speak?text=' + sentence);
        }
    }
})();