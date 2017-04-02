angular
    .module('selfStarted.messagesPage')
    .controller('MessagesPageCtrl', MessagesPageCtrl);

function MessagesPageCtrl(MessagesService, localStorageService) {
    var vm = this;
    var messages = MessagesService;
    var userID = getUserID();

    vm.showMessage = showMessage;
    vm.show = false;

    messages.getMessages(userID, function (err, res) {
        if (err) console.log(err);
        vm.userMessages = res;
        console.log(vm.userMessages);
    });

    function showMessage(message) {
        vm.show = true;
        vm.messageBody = message;
    }

    function getUserID() {
        return localStorageService.get('userDBid');
    }
}