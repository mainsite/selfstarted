(function () {
    'use strict';

    angular
        .module('selfStarted.service.messages')
        .service('MessagesService', MessagesService);

    MessagesService.inject = ['$http'];
    function MessagesService($http) {
        return {
            getMessages: function (userID, callback) {
                $http.get('/api/messages/searchMessages?_messageOwner=' + userID)
                    .then(function (res) {
                        var err = false;
                        callback(err, res.data);
                    }, function (err) {
                        callback(err);
                    });
            },
            postMessage: function (messageData) {
                var message = {
                    _fromUser: messageData._from,
                    _toUser: messageData._to,
                    messageSubject: messageData._subject,
                    messageText: messageData._textBody
                };

                $http.post('/api/messages/newMessage', message)
                    .then(function (res) {
                        var err = false;
                        callback(err, "message sent");
                    }, function (err) {
                        callback(err);
                    });
            },
            markMessageRead: function (messageID) {
                var message = {
                    _id: messageID
                };

                $http.post('/api/messages/markMessageRead', message)
                    .then(function (res) {
                        var err = false;
                        callback(err, "message read");
                    }, function (err) {
                        callback(err);
                    });
            },
            markMessageDeleted: function (messageID) {
                var message = {
                    _id: messageID
                };
                
                $http.post('/api/messages/deleteMessage', message)
                    .then(function (res) {
                        var err = false;
                        callback(err, "message deleted");
                    }, function (err) {
                        callback(err);
                    });
            }
        };
    }
})();