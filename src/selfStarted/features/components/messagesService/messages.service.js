(function () {
    'use strict';

    angular
        .module('selfStarted.service.messages')
        .service('MessagesService', MessagesService);

    MessagesService.inject = ['$http'];
    function MessagesService($http) {
        this.exposedFn = exposedFn;

        ////////////////

        function exposedFn() { 
            
        }
    }
})();