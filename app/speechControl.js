(function() {
    'use strict';

    angular
        .module('app')
        .controller('speechControl', speechControl);

    speechControl.$inject = ['speechService', '$timeout'];

    /* @ngInject */
    function speechControl(speechService, $timeout) {
        var vm = this;
        vm.title = 'speechControl';
        vm.speechIn = '';

        vm.messageList = [];

        $timeout(function() {

            var voicelist = responsiveVoice.getVoices();
            var counter = 0;

            vm.nextVoice = function() {
                responsiveVoice.setDefaultVoice(voicelist[counter].name);
                console.log("Voice has been changed to " + voicelist[counter].name);
                counter++;
            };

            vm.speak = function() {
                vm.messageList.push({
                    'name': vm.speechIn,

                });

//to have speak there will be a function here that has a message parameter. T
                responsiveVoice.speak(vm.speechIn);
                console.log(vm.messageList);
            };

        }, 1000);

    }
})();
